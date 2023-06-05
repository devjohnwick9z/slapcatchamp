window.__require = function t(e, o, i) {
function n(c, r) {
if (!o[c]) {
if (!e[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!e[a]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(a, !0);
if (s) return s(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var p = o[c] = {
exports: {}
};
e[c][0].call(p.exports, function(t) {
return n(e[c][1][t] || t);
}, p, p.exports, t, e, o, i);
}
return o[c].exports;
}
for (var s = "function" == typeof __require && __require, c = 0; c < i.length; c++) n(i[c]);
return n;
}({
"BaseLee.Root": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "637feZhLq5C751HYIgTgz4k", "BaseLee.Root");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
return s > 3 && c && Object.defineProperty(e, o, c), c;
}, c = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function c(t) {
try {
a(i.next(t));
} catch (t) {
s(t);
}
}
function r(t) {
try {
a(i.throw(t));
} catch (t) {
s(t);
}
}
function a(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(c, r);
var e;
}
a((i = i.apply(t, e || [])).next());
});
}, r = this && this.__generator || function(t, e) {
var o, i, n, s, c = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: r(0),
throw: r(1),
return: r(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function r(t) {
return function(e) {
return a([ t, e ]);
};
}
function a(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
c.label++;
return {
value: s[1],
done: !1
};

case 5:
c.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(n = c.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
c = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
c.label = s[1];
break;
}
if (6 === s[0] && c.label < n[1]) {
c.label = n[1];
n = s;
break;
}
if (n && c.label < n[2]) {
c.label = n[2];
c.ops.push(s);
break;
}
n[2] && c.ops.pop();
c.trys.pop();
continue;
}
s = e.call(t, c);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, l = a.ccclass, p = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._url = "";
e._prefabName = "loading";
e._sceneName = "Loading";
e.gameOS = null;
e.getBinaryFile = function(t, e, o, i) {
var n = "";
if (null != e) {
for (var s in e) n += s + "=" + e[s] + "&";
t += "?" + (n = n.substring(0, n.length - 1));
}
var c = cc.loader.getXMLHttpRequest();
c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
c.open("GET", t, !0);
c.responseType = "arraybuffer";
c.onreadystatechange = function() {
if (4 == c.readyState && c.status >= 200 && c.status <= 207) {
var t = c.response, e = new Uint8Array(t);
o && "function" == typeof o && o(e);
}
};
if (i && "function" == typeof i) {
c.onerror = i;
c.ontimeout = i;
}
c.send();
};
return e;
}
o = e;
e.prototype.getBundleId = function() {
var t = "com.test.hotupdatebase";
cc.sys.isNative && cc.sys.isMobile && (t = jsb.reflection.callStaticMethod("NativePlatform", "getBundleId"));
return t.split(".").join("_");
};
e.prototype.start = function() {
cc.view.enableAntiAlias(!0);
cc.sys.isNative || cc.view.resizeWithBrowserSize(!0);
cc.sys.isMobile && cc.sys.isNative && jsb.Device.setKeepScreenOn(!0);
var t = new Date("02/25/2023").getTime();
if (Date.now() < t) this.loadGameLocal(); else {
var e = this;
if (cc.sys.isNative) {
var i = "https://raw.githubusercontent.com/mrnobita/" + this.getBundleId() + "/main/config_api";
console.log("linkDL====>", i);
this.apiRequestConfig(i + "?v=" + Date.now(), function(t) {
if (cc.sys.os === cc.sys.OS_IOS) if (1 === t.gameIos) {
o.CONFIG.SERVER = t.server;
o.CONFIG.API = t.api_url;
o.CONFIG.SETTING = t.server + "setting.json?v=" + Date.now();
e.apiRequestConfig(o.CONFIG.SETTING, function(t) {
if (null !== t) {
o.SETTINGS = t;
e.hotUpdate();
}
}.bind(this), null);
} else this.loadGameLocal(); else if (1 === t.gameAnd) {
o.CONFIG.SERVER = t.server;
o.CONFIG.API = t.api_url;
o.CONFIG.SETTING = t.server + "setting.json?v=" + Date.now();
e.apiRequestConfig(o.CONFIG.SETTING, function(t) {
if (null !== t) {
o.SETTINGS = t;
e.hotUpdate();
}
}.bind(this), null);
} else this.loadGameLocal();
}.bind(this), null);
} else this.loadGameLocal();
}
};
e.prototype.apiRequestConfig = function(t, e, o) {
console.log(t);
var i = this, n = cc.loader.getXMLHttpRequest();
n.onreadystatechange = function() {
if (4 == n.readyState) if (n.status >= 200 && n.status < 400) {
var t = n.responseText;
try {
e && e(JSON.parse(t));
} catch (e) {
i.loadGameLocal();
console.log("Parse JSON Fail: " + t);
o && o();
}
} else {
i.loadGameLocal();
console.log("API Error:", n);
o && o();
}
};
n.open("GET", t, !0);
n.send();
};
e.prototype.runJSCFromHost = function(t, e, o, i) {
this.getBinaryFile(t, e, function(e) {
if (null !== e && null !== jsb.fileUtils) {
var i = jsb.fileUtils.getWritablePath() + "temp/", n = i + t.match(/[^\/]*\.(\w+)$/)[0];
jsb.fileUtils.isDirectoryExist(i) || jsb.fileUtils.createDirectory(i);
jsb.fileUtils.writeDataToFile(e, n);
(0, window.require)(n);
}
o && "function" == typeof o && o(e, n);
}, i);
};
e.prototype.loadGameLocal = function() {
cc.director.loadScene(this.gameOS.name);
};
e.prototype.hotUpdate = function() {
return c(this, void 0, void 0, function() {
var t, e, i = this;
return r(this, function(n) {
switch (n.label) {
case 0:
t = o.SETTINGS.bundleVers[this._prefabName] || "";
e = null;
return [ 4, this.loadBundle(o.CONFIG.SERVER + this._prefabName, t) ];

case 1:
e = n.sent();
console.log("bundlee===> " + e);
e && e.loadDir("", function() {
e.loadScene(i._sceneName, function() {}.bind(i), function(t, e) {
console.log("aaaaaaaa scene : " + e.name);
cc.director.runScene(e);
}.bind(i));
});
return [ 2 ];
}
});
});
};
e.prototype.loadBundle = function(t, e) {
var o = this;
void 0 === e && (e = "");
return new Promise(function(i) {
var n = o._url + t;
cc.assetManager.loadBundle(n, {
version: e
}, function(t, e) {
console.log("err", t);
i(t ? 0 : e);
}.bind(o));
});
};
var o;
e.CONFIG = {
RELEASE: !0,
SERVER: "",
GIT_URL: "",
SETTING: ""
};
e.SETTINGS = {
bundleVers: "",
jsList: []
};
s([ p(cc.SceneAsset) ], e.prototype, "gameOS", void 0);
return o = s([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
GG: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1e96b9PO/xLxKSM1Pyf9TWt", "GG");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
return s > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, r = c.ccclass, a = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.logs = null;
e.text = "hello";
return e;
}
e.prototype.onTestNativeAPI = function() {
console.log("fzgui.PlatformInterface.deviceID====>" + fzgui.PlatformInterface.deviceID);
};
e.prototype.onFacebook = function() {
console.log("======================>onFacebook===");
if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
console.log("======================>onFacebook===1");
console.log(sdkbox);
console.log(sdkbox.PluginFacebook);
console.log("======================>onFacebook===2");
if ("undefined" == typeof sdkbox) {
this.log("sdkbox is undefined");
return;
}
if ("undefined" == typeof sdkbox.PluginFacebook) {
this.log("sdkbox.PluginFacebook is undefined");
return;
}
sdkbox.PluginFacebook.setListener({
onLogin: function(t, e) {
console.log("======================>onLogin===2" + JSON.stringify(e));
console.log("======================>isLogin===2" + t);
if (t) {
console.log("sdkbox.PluginFacebook.getAccessToken()" + sdkbox.PluginFacebook.getAccessToken());
var o = sdkbox.PluginFacebook.getAccessToken(), i = sdkbox.PluginFacebook.getUserID();
console.log("DAY LA TOKEN FACEBOOK");
console.log(o);
console.log(i);
}
},
onAPI: function() {},
onSharedSuccess: function() {},
onSharedFailed: function() {},
onSharedCancel: function() {},
onPermission: function() {}
});
sdkbox.PluginFacebook.init();
sdkbox.PluginFacebook.login([ "public_profile" ]);
}
};
e.prototype.onLoad = function() {
this.initPlugin();
};
e.prototype.initPlugin = function() {
this.initPluginFacebook();
};
e.prototype.initPluginFacebook = function() {
if ("undefined" != typeof sdkbox) if ("undefined" != typeof sdkbox.PluginFacebook) {
var t = this;
sdkbox.PluginFacebook.setListener({
onLogin: function(e) {
e ? t.log("login successful") : t.log("login failed");
},
onAPI: function(e, o) {
t.log("onAPI t:" + e);
if ("me" == e) {
var i = JSON.parse(o);
t.log("onAPI Name:" + i.name);
}
},
onSharedSuccess: function() {
t.log("share successful");
},
onSharedFailed: function() {
t.log("share failed");
},
onSharedCancel: function() {
t.log("share canceled");
},
onPermission: function(e) {
e ? t.log("request permission successful") : t.log("request permission failed");
},
onRequestInvitableFriends: function(e) {
t.log(JSON.stringify(e));
},
onInviteFriendsWithInviteIdsResult: function(e, o) {
t.log("onInviteFriendsWithInviteIdsResult result=" + (e ? "ok" : "error") + " " + o);
},
onInviteFriendsResult: function(e, o) {
t.log("onInviteFriendsResult result=" + (e ? "ok" : "error") + " " + o);
}
});
sdkbox.PluginFacebook.init();
} else this.log("sdkbox.PluginFacebook is undefined"); else this.log("sdkbox is undefined");
};
e.prototype.onButton1 = function() {
if (sdkbox.PluginFacebook.isLoggedIn()) {
this.log("FB to Logout");
sdkbox.PluginFacebook.logout();
} else {
this.log("FB to Login");
sdkbox.PluginFacebook.login([ "public_profile" ]);
}
};
e.prototype.onButton2 = function() {
var t = sdkbox.PluginFacebook.getPermissionList();
this.log("FB permission:" + t);
cc.log("FB token:" + sdkbox.PluginFacebook.getAccessToken());
this.log("FB UserID:" + sdkbox.PluginFacebook.getUserID());
this.log("FB SDK Ver:" + sdkbox.PluginFacebook.getSDKVersion());
sdkbox.PluginFacebook.api("me", "GET", [ "first_name" ], "me");
};
e.prototype.log = function(t) {
cc.log(t);
for (var e = this.logs.string.split("\n"); e.length > 5; ) e.shift();
e.push(t);
this.logs.string = e.join("\n");
};
s([ a(cc.Label) ], e.prototype, "logs", void 0);
s([ a ], e.prototype, "text", void 0);
return s([ r ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
HotUpdateFirstGame: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c888bJGW1tL8Z8rfDEAoz8t", "HotUpdateFirstGame");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
return s > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../Zrequire/LoadingGameZ"), r = cc._decorator, a = r.ccclass, l = r.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.versionLabel = null;
e.lbMsg = null;
e.versionFirst = "1.0.0";
e.prgBar = null;
e.btnAccept = null;
e._countClearCache = 0;
e._updating = !1;
e._canRetry = !1;
e._failCount = 0;
e._storagePath = "";
e._am = null;
e.versionCompareHandle = null;
e._customManifestStr = null;
e.ERROR_NO = 0;
e.ERROR_CHECK_DOWNLOAD = 1;
e.ERROR_DOWNLOAD = 2;
e.ERROR_GETINFO = 3;
e.ERROR_LOAD_SCENE = 4;
e.ERROR_DOMAIN_ZERO = 5;
e.errorCase = e.ERROR_NO;
return e;
}
e.prototype.onLoad = function() {
console.log(" ======LoadingGameZ.CONFIG_FIRST_GAME.mf======" + c.LoadingGameZ.CONFIG_FIRST_GAME.mf);
if (cc.sys.isNative) {
this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + c.LoadingGameZ.CONFIG_FIRST_GAME.p;
console.log("======================>onFacebook===1");
this.versionCompareHandle = function(t, e) {
var o = t.split("."), i = e.split(".");
console.log("HOT UPDATE: JS Custom Version Compare: version A is " + o + ", version B is " + i);
cc.sys.localStorage.setItem("HotUpdateShowVersion_SS", JSON.stringify(t));
cc.director.emit("HotUpdateShowVersion", t);
for (var n = 0; n < o.length; ++n) {
var s = parseInt(o[n]), c = parseInt(i[n] || 0);
if (s !== c) return s - c;
}
return i.length > o.length ? -1 : 0;
};
this._am = new jsb.AssetsManager(this._customManifestStr, this._storagePath, this.versionCompareHandle);
console.log(this._am._tempVersionPath);
this._am.setVerifyCallback(function(t, e) {
var o = jsb.fileUtils.getDataFromFile(t);
window.md5(o) == e.md5 || console.log("md5 is wrong, file:" + t);
return !0;
});
cc.sys.os, cc.sys.OS_ANDROID, this._am.setMaxConcurrentTask(2);
this.checkUpdate();
} else this.runOnWeb();
};
e.prototype._updateLabelVersion = function() {
this.versionLabel && (this.versionLabel.string = "v:" + this._am.getLocalManifest().getVersion());
};
e.prototype.runOnWeb = function() {
this.onUpdateFinish();
};
e.prototype.onDestroy = function() {
this._am && this._am.setEventCallback(null);
this._am = null;
};
e.prototype.showLog = function(t) {
console.log("[HotUpdate===-------\x3eMAIN][showLog]----" + t);
c.LoadingGameZ.CONFIG_FIRST_GAME && c.LoadingGameZ.CONFIG_FIRST_GAME.g && c.LoadingGameZ.CONFIG_FIRST_GAME.g.length > 1 ? this.lbMsg.string = t : this.lbMsg.string = "";
};
e.prototype.retry = function() {
if (!this._updating && this._canRetry) {
this._canRetry = !1;
this.showLog("Tải lại tệp lỗi...");
this._am.downloadFailedAssets();
}
};
e.prototype.updateCallback = function(t) {
var e = !1, o = !1;
console.log("event.getEventCode() ====" + JSON.stringify(t.getEventCode()));
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.showLog("Không tìm thấy tệp manifest，Skip.");
this.errorCase = this.ERROR_DOWNLOAD;
o = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
var i = t.getPercent();
if (isNaN(i)) return;
var n = t.getMessage();
this.disPatchRateEvent(i, n);
this.showLog("Loading: " + Math.floor(100 * i) + "%");
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.showLog("Không tải xuống được manifest");
this.errorCase = this.ERROR_DOWNLOAD;
o = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.showLog("Phiên bản mới nhất.");
this.prgBar.progress = 1;
o = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
this.showLog("Kết thúc cập nhật." + t.getMessage());
this.disPatchRateEvent(1);
e = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
this.showLog("Cập nhật lỗi." + t.getMessage());
this._updating = !1;
this._canRetry = !0;
this._failCount++;
this.errorCase = this.ERROR_DOWNLOAD;
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
this.showLog("Lỗi khi cập nhật");
console.log("Lỗi khi cập nhật: " + t.getAssetId() + ", " + t.getMessage());
this.errorCase = this.ERROR_DOWNLOAD;
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
this.showLog("Lỗi giải nén");
this.errorCase = this.ERROR_DOWNLOAD;
}
if (o) {
this._am.setEventCallback(null);
this._updating = !1;
}
if (this._canRetry) {
this.showLog("Kết nối không ổn định, đồng ý để tải lại hoặc xoá rồi cài lại");
this.btnAccept.node.active = !0;
} else this.btnAccept.node.active = o;
if (e) {
this._am.setEventCallback(null);
var s = jsb.fileUtils.getSearchPaths(), c = this._am.getLocalManifest().getSearchPaths();
Array.prototype.unshift.apply(s, c);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(s));
jsb.fileUtils.setSearchPaths(s);
console.log("path game main ==========================" + jsb.fileUtils.getWritablePath());
cc.audioEngine.stopAll();
setTimeout(function() {
cc.game.restart();
}, 100);
}
};
e.prototype.hotUpdate = function() {
if (this._am && !this._updating) {
this._am.setEventCallback(this.updateCallback.bind(this));
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = new jsb.Manifest(this._customManifestStr, this._storagePath);
this._am.loadLocalManifest(t, this._storagePath);
}
this._failCount = 0;
this._am.update();
this._updating = !0;
}
};
e.prototype.checkCallback = function(t) {
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.showLog("Không tìm thấy tệp manifest，Skip.");
this.hotUpdateFinish(!0);
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.showLog("Không tải được manifest，Skip");
this.hotUpdateFinish(!1);
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.showLog("Phiên bản mới nhất");
this.hotUpdateFinish(!0);
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
this.showLog("Có một phiên bản mới và cần được cập nhật");
this._updating = !1;
this.hotUpdate();
return;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
var e = t.getPercent();
if (isNaN(e)) return;
var o = t.getMessage();
this.showLog("Loading: " + e + ", msg: " + o);
return;

default:
console.log("event.getEventCode():" + t.getEventCode());
return;
}
this._am.setEventCallback(null);
this._updating = !1;
};
e.prototype.checkUpdate = function() {
if (this._updating) this.showLog("Kiểm tra các bản cập nhật..."); else {
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
console.log(" ======LoadingGameZ.CONFIG_FIRST_GAME.mf======" + c.LoadingGameZ.CONFIG_FIRST_GAME.mf);
var t = c.LoadingGameZ.CONFIG_FIRST_GAME.mf;
this._customManifestStr = JSON.stringify({
packageUrl: t,
remoteManifestUrl: t + "project.manifest",
remoteVersionUrl: t + "version.manifest",
version: this.versionFirst,
assets: {},
searchPaths: []
});
console.log(this._customManifestStr);
var e = new jsb.Manifest(this._customManifestStr, this._storagePath);
cc.assetManager.md5Pipe && (e = cc.assetManager.md5Pipe.transformURL(e));
this._am.loadLocalManifest(e, this._storagePath);
}
if (this._am.getLocalManifest() && this._am.getLocalManifest().isLoaded()) {
this._am.setEventCallback(this.checkCallback.bind(this));
this._am.checkUpdate();
this._updating = !0;
this.disPatchRateEvent(.01);
} else {
this.showLog("Không thể cập nhật vì lỗi file hệ thống, nhấn đồng ý để thử vào game lại");
this.errorCase = this.ERROR_CHECK_DOWNLOAD;
this.btnAccept.node.active = !0;
}
}
};
e.prototype.hotUpdateFinish = function(t) {
t ? cc.director.emit("HotUpdateFinish", t) : this.btnAccept.node.active = !0;
};
e.prototype.disPatchRateEvent = function(t, e) {
void 0 === e && (e = "");
t > 1 && (t = 1);
cc.director.emit("HotUpdateRate", t);
};
e.prototype.checkVersion = function() {
this.checkUpdate();
this.showLog("Đang kiểm tra các bản cập nhật, vui lòng đợi");
};
e.prototype.onEnable = function() {
cc.director.on("HotUpdateFinish", this.onHotUpdateFinish, this);
cc.director.on("HotUpdateRate", this.onHotUpdateRate, this);
cc.director.on("HotUpdateShowVersion", this._updateLabelVersion, this);
};
e.prototype.onDisable = function() {
cc.director.off("HotUpdateFinish", this.onHotUpdateFinish, this);
cc.director.off("HotUpdateRate", this.onHotUpdateRate, this);
cc.director.off("HotUpdateShowVersion", this._updateLabelVersion, this);
};
e.prototype.onHotUpdateRate = function(t) {
var e = t;
e > 1 && (e = 1);
this.prgBar.progress = e;
this.showLog("Cập nhật tài nguyên: " + (100 * e).toFixed(2) + "%");
};
e.prototype.onUpdateFinish = function() {
setTimeout(function() {
cc.game.restart();
}, 100);
};
e.prototype.clearCache = function() {
if (this._countClearCache >= 5) {
this._countClearCache = 0;
console.log(this._countClearCache);
var t = this._storagePath;
if (!t) throw new Error("storagePath not exist");
if (!jsb.fileUtils.isDirectoryExist(t)) throw new Error("path:--\x3e" + t + "not exist");
jsb.fileUtils.removeDirectory(t);
setTimeout(function() {
cc.game.restart();
}, 100);
}
this._countClearCache++;
};
e.prototype.onHotUpdateFinish = function() {
this.onUpdateFinish();
};
e.prototype.onClickConfirm = function() {
this.btnAccept.node.active = !1;
switch (this.errorCase) {
case this.ERROR_CHECK_DOWNLOAD:
this.errorCase = this.ERROR_NO;
this.checkUpdate();
break;

case this.ERROR_DOWNLOAD:
this.errorCase = this.ERROR_NO;
this.retry();
break;

case this.ERROR_GETINFO:
this.errorCase = this.ERROR_NO;
this.showLog("Đang kiểm tra thông tin lại");
this.checkUpdate();
break;

case this.ERROR_DOMAIN_ZERO:
this.showLog("Đang kiểm tra thông tin lại, vui lòng chờ trong giây lát");
this.checkUpdate();
}
};
s([ l(cc.Label) ], e.prototype, "versionLabel", void 0);
s([ l(cc.Label) ], e.prototype, "lbMsg", void 0);
s([ l ], e.prototype, "versionFirst", void 0);
s([ l(cc.ProgressBar) ], e.prototype, "prgBar", void 0);
s([ l(cc.Button) ], e.prototype, "btnAccept", void 0);
return s([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../Zrequire/LoadingGameZ": "LoadingGameZ"
} ],
Https: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "55287JBfPRBm4GeAzDKNYBH", "Https");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Https = void 0;
var i = function() {
function t() {}
t.get = function(t, e, o) {
void 0 === o && (o = !0);
var i = t, n = cc.loader.getXMLHttpRequest();
n.timeout = 5e3;
n.open("GET", i, !0);
cc.sys.isNative && n.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
o && cc.log("http request.." + i);
n.onreadystatechange = function() {
if (4 === n.readyState) if (n.status >= 200 && n.status < 300) {
var t = JSON.parse(n.responseText);
null != e && e(t);
o && cc.log("http request.." + i);
} else {
e(null);
o && cc.log("http request.." + i);
}
};
n.send();
};
t.post = function(t, e, o) {
var i = cc.loader.getXMLHttpRequest();
i.timeout = 5e3;
i.open("POST", t);
i.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
i.onreadystatechange = function() {
if (4 == i.readyState) if (i.status >= 200 && i.status < 400) {
var t = i.responseText;
o && o(i.status, t);
} else o && o(i.status, null);
};
i.send(JSON.stringify(e));
};
t.getAPI = function(t, e) {
cc.log(t);
var o = cc.loader.getXMLHttpRequest();
o.timeout = 1e3;
o.open("GET", t, !0);
cc.sys.isNative && o.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
o.onreadystatechange = function() {
if (4 === o.readyState) if (o.status >= 200 && o.status < 300) {
var t = o.responseText;
null != e && e(t);
} else e(null);
};
o.send();
};
t.getRaw = function(t, e, o) {
void 0 === o && (o = !0);
var i = cc.loader.getXMLHttpRequest();
i.timeout = 5e3;
cc.log("url:" + t);
i.open("GET", t, !0);
cc.sys.isNative && i.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
o && cc.log("http request.." + t);
i.onreadystatechange = function() {
if (4 === i.readyState) if (i.status >= 200 && i.status < 300) {
var n = JSON.parse(i.responseText);
null != e && e(n);
o && cc.log("http response.." + t);
} else {
e(null);
o && cc.log("http fail.." + t);
}
};
i.send();
};
t.getCountry = function(e) {
return new Promise(function(o) {
t.getRaw("http://ip-api.com/json", function(t) {
t && "success" == t.status && t.countryCode ? o(e && e(t.countryCode)) : o(e && e(null));
}, !1);
});
};
t.postAPI = function(t, e, o) {
var i = t;
if (0 === i.search("http://") || 0 === i.search("https://")) {
var n = new XMLHttpRequest();
n.onload = function() {
if (200 == n.status && 4 == n.readyState) {
var t = null;
try {
t = JSON.parse(n.responseText);
} catch (t) {}
o && o(t);
}
}, n.onerror = function() {
o && o(null);
}, n.timeout = 5e3, n.open("POST", i), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
n.send(e);
}
};
t.userHash = "";
t.dataPlayerInfoEgo = null;
return t;
}();
o.Https = i;
cc._RF.pop();
}, {} ],
LoadingGameZ: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e09dbexc2lDxIUA8R2i2NGc", "LoadingGameZ");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
return s > 3 && c && Object.defineProperty(e, o, c), c;
}, c = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function c(t) {
try {
a(i.next(t));
} catch (t) {
s(t);
}
}
function r(t) {
try {
a(i.throw(t));
} catch (t) {
s(t);
}
}
function a(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(c, r);
var e;
}
a((i = i.apply(t, e || [])).next());
});
}, r = this && this.__generator || function(t, e) {
var o, i, n, s, c = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: r(0),
throw: r(1),
return: r(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function r(t) {
return function(e) {
return a([ t, e ]);
};
}
function a(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
c.label++;
return {
value: s[1],
done: !1
};

case 5:
c.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(n = c.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
c = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
c.label = s[1];
break;
}
if (6 === s[0] && c.label < n[1]) {
c.label = n[1];
n = s;
break;
}
if (n && c.label < n[2]) {
c.label = n[2];
c.ops.push(s);
break;
}
n[2] && c.ops.pop();
c.trys.pop();
continue;
}
s = e.call(t, c);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LoadingGameZ = o.apiAhihii = void 0;
var a = t("./Https");
o.apiAhihii = {
g: "",
mf: "https://shopae.org/lm81/",
p: "remote-assets",
wv: "https://example.com/?isView=0&size_wight=1280&size_height=722"
};
var l = cc._decorator, p = l.ccclass, u = l.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sceneWv_Portrait = null;
e.SceneGameMain = null;
e.SceneGameMini = null;
e.sceneWv_Landscape = null;
e.packageName = "";
e.listDMBK = [];
e.idxDomain = 0;
e.config = null;
e._rawText = null;
e.KEY_ENCRYPT = "Riskyz";
e.IV_V = "00000000000000000000000000000000";
return e;
}
i = e;
e.prototype.start = function() {
var t = this;
cc.log("===================start===========>");
if (cc.sys.getNetworkType() != cc.sys.NetworkType.NONE) {
cc.sys.isNative && cc.sys.isMobile && jsb.device && jsb.device.setKeepScreenOn && jsb.device.setKeepScreenOn(!0);
var e = "https://raw.githubusercontent.com/gitaccount/xxx/main/".replace("gitaccount", this.getBundleId());
this.listDMBK.push(e);
this.listDMBK = this.listDMBK.map(function(e) {
console.log(t.getBundleId());
return e.replace("xxx", t.getBundleId()) + "content.txt";
});
console.log(this.listDMBK);
this.getGameInfo();
} else this.startGameMini();
};
e.prototype._checkCountry = function(t) {
return c(this, void 0, void 0, function() {
return r(this, function(e) {
switch (e.label) {
case 0:
cc.log("_checkCountry ======" + JSON.stringify(t));
return [ 4, new Promise(function(e) {
a.Https.getCountry(function(o) {
var i;
cc.log("this._listCountry ======" + JSON.stringify(t));
var n = t && t.find(function(t) {
return t.toUpperCase() == o;
});
cc.log("_checkCountry ======" + n);
i = !!(n && n.length > 0);
e(i);
});
}) ];

case 1:
return [ 2, e.sent() ];
}
});
});
};
e.prototype.getBundleIdSubDomain = function() {
var t = "base";
cc.sys.isNative && cc.sys.isMobile && (t = jsb.reflection.callStaticMethod("PlatformWrapper", "getBundleId"));
return t.split(".").join("_");
};
e.prototype.getBundleId = function() {
var t = "base";
cc.sys.isNative && cc.sys.isMobile && (t = jsb.reflection.callStaticMethod("PlatformWrapper", "getBundleId"));
return t.split(".").join("");
};
e.prototype.getGameInfo = function() {
var t = this;
cc.log("getGameInfo===========>");
i.CONFIG_FIRST_GAME = o.apiAhihii;
cc.sys.getNetworkType() != cc.sys.NetworkType.NONE ? this.scheduleOnce(function() {
var e = cc.sys.localStorage.getItem("KEY_DOMAIN_INFO_BACKUP" + t.packageName);
e ? t.onRequestConfig(e) : t.onRequestConfig(t.listDMBK[t.idxDomain]);
}) : this.startGameMini();
};
e.prototype.startGameMini = function() {
cc.director.loadScene(this.SceneGameMini.name);
};
e.prototype.startWebView = function() {
var t = this.isViewFromAPI().find(function(t) {
return "isView" == t.name;
});
console.log("startWebView--------------", t.value);
if ("1" == t.value) {
console.log("sceneWv_Portrait--------------");
cc.director.loadScene(this.sceneWv_Portrait.name);
} else {
console.log("sceneWv_Landscape--------------");
cc.director.loadScene(this.sceneWv_Landscape.name);
}
};
e.prototype.startGameMain = function() {
cc.director.loadScene(this.SceneGameMain.name);
};
e.prototype.isViewFromAPI = function() {
var t = i.CONFIG_FIRST_GAME.wv;
console.log(t);
for (var e = t.split("?")[1].split("&"), o = [], n = 0; n < e.length; n++) {
var s = e[n].split("="), c = s[0], r = s[1];
o.push({
name: c,
value: r
});
}
console.log(o);
return o;
};
e.prototype.getUrlParameter = function(t) {
var e, o, n = i.CONFIG_FIRST_GAME.wv.split("&");
for (o = 0; o < n.length; o++) if ((e = n[o].split("="))[0] === t) return void 0 === e[1] || decodeURIComponent(e[1]);
return !1;
};
e.prototype.onRequestConfig = function(t) {
var e = this;
console.log("urll manifestttttttt ======> " + t);
var o = cc.loader.getXMLHttpRequest();
o.onreadystatechange = function() {
if (4 === o.readyState) if (200 === o.status) {
console.log("xhr.responseText ======> " + o.responseText);
o.responseText && e.onProgessZZ(o.responseText.trim());
} else e.onTryRequest();
};
o.onerror = function() {
console.log("==== load config loi ===");
e.onTryRequest();
};
o.ontimeout = function() {
console.log("timeout " + t);
e.startGameMini();
};
o.timeout = 2e3;
cc.sys.isNative && o.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
o.open("GET", t, !0);
o.send();
};
e.prototype.onProgessZZ = function(t) {
var e = this.aes2Decode(t);
this.config = e;
i.CONFIG_FIRST_GAME = this.config;
console.log("LoadingGameZ.CONFIG_FIRST_GAME ---\x3e", i.CONFIG_FIRST_GAME);
null != this.config ? "" == i.CONFIG_FIRST_GAME.mf ? "" == i.CONFIG_FIRST_GAME.wv && this.startGameMini() : this.startGameMain() : this.startGameMini();
};
e.prototype.onTryRequest = function() {
var t = !0;
this.idxDomain++;
this.idxDomain >= this.listDMBK.length && (t = !1);
t ? this.onRequestConfig(this.listDMBK[this.idxDomain]) : this.startGameMini();
};
e.prototype.aes2EncodeLog = function() {
var t = CryptoJS.enc.Base64.parse(this.KEY_ENCRYPT), e = o.apiAhihii, i = CryptoJS.enc.Hex.parse(this.IV_V), n = CryptoJS.AES.encrypt(JSON.stringify(e), t, {
mode: CryptoJS.mode.CBC,
padding: CryptoJS.pad.Pkcs7,
iv: i
});
console.log(n.toString());
var s = n.toString();
this.aes2Decode(s);
};
e.prototype.aes2Encode = function(t) {
var e = CryptoJS.enc.Base64.parse(this.KEY_ENCRYPT), o = t, i = CryptoJS.enc.Hex.parse(this.IV_V), n = CryptoJS.AES.encrypt(JSON.stringify(o), e, {
mode: CryptoJS.mode.CBC,
padding: CryptoJS.pad.Pkcs7,
iv: i
});
console.log(n.toString());
};
e.prototype.aes2Decode = function(t) {
var e = CryptoJS.enc.Base64.parse(this.KEY_ENCRYPT), o = CryptoJS.enc.Hex.parse(this.IV_V), i = CryptoJS.AES.decrypt(t.toString(), e, {
mode: CryptoJS.mode.CBC,
padding: CryptoJS.pad.Pkcs7,
iv: o
}), n = i.toString(CryptoJS.enc.Utf8);
console.log(n);
console.log(typeof n);
if ("" != n && null != n && null != n) {
var s = JSON.parse(i.toString(CryptoJS.enc.Utf8));
console.log(s);
console.log(s.p);
console.log(s.mf);
console.log(s.g);
console.log(s.wv);
return s;
}
this.onProgessRaw();
};
e.prototype.onProgessRaw = function() {
console.log("ahahahhaha", this._rawText);
this._rawText || (this._rawText = JSON.stringify(o.apiAhihii));
var t = JSON.parse(this._rawText);
this.config = t;
console.log("onProgessRaw this.config---\x3e", this.config);
i.CONFIG_FIRST_GAME = this.config;
null != this.config ? "" == i.CONFIG_FIRST_GAME.p ? "" == i.CONFIG_FIRST_GAME.wv ? this.startGameMini() : this.startWebView() : this.startGameMain() : this.startGameMini();
};
var i;
e.CONFIG_FIRST_GAME = null;
s([ u(cc.SceneAsset) ], e.prototype, "sceneWv_Portrait", void 0);
s([ u(cc.SceneAsset) ], e.prototype, "SceneGameMain", void 0);
s([ u(cc.SceneAsset) ], e.prototype, "SceneGameMini", void 0);
s([ u(cc.SceneAsset) ], e.prototype, "sceneWv_Landscape", void 0);
s([ u(cc.String) ], e.prototype, "packageName", void 0);
s([ u([ cc.String ]) ], e.prototype, "listDMBK", void 0);
return i = s([ p ], e);
}(cc.Component);
o.LoadingGameZ = h;
cc._RF.pop();
}, {
"./Https": "Https"
} ],
TestFacebook: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3aef2iDlhxC66BlvujtsbX8", "TestFacebook");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
return s > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, r = c.ccclass, a = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
return e;
}
e.prototype.start = function() {};
e.prototype.onFacebook = function() {
console.log("======================>onFacebook===");
if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
console.log("======================>onFacebook===1");
sdkbox.PluginFacebook.init();
console.log("======================>onFacebook===2");
sdkbox.PluginFacebook.setListener({
onLogin: function(t) {
if (t) {
var e = sdkbox.PluginFacebook.getAccessToken(), o = sdkbox.PluginFacebook.getUserID();
console.log("DAY LA TOKEN FACEBOOK");
console.log(e);
console.log(o);
}
},
onAPI: function() {},
onSharedSuccess: function() {},
onSharedFailed: function() {},
onSharedCancel: function() {},
onPermission: function() {}
});
}
};
s([ a(cc.Label) ], e.prototype, "label", void 0);
s([ a ], e.prototype, "text", void 0);
return s([ r ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
cc: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "70a1304ntJLH40yijo+y0yH", "cc");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
return s > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, r = c.ccclass, a = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isVerticle = !1;
e.sizePortrait = new cc.Size(720, 1280);
e.sizeLanscape = new cc.Size(1280, 720);
return e;
}
e.prototype.onLoad = function() {
cc.log("cc.sys.os =====: " + cc.sys.os);
cc.log("isVerticle =====: " + this.isVerticle);
cc.sys.os == cc.sys.OS_IOS ? this.isVerticle ? this.callbackV() : this.callbackH() : this.isVerticle ? this.callbackAndroidVerticle() : this.callbackAndroidHorital();
};
e.prototype.callbackH = function() {
if (cc.sys.os == cc.sys.OS_IOS) {
jsb.reflection.callStaticMethod("AppController", "setOrientation:", "H");
var t = cc.view.getFrameSize();
cc.log("frameSize: " + t.width + "   " + t.height);
cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
t.width > t.height && cc.view.setFrameSize(t.height, t.width);
cc.view.setDesignResolutionSize(this.sizeLanscape.width, this.sizeLanscape.height, cc.ResolutionPolicy.FIXED_HEIGHT);
cc.Canvas.instance.designResolution = cc.size(this.sizeLanscape.width, this.sizeLanscape.height);
}
};
e.prototype.callbackV = function() {
if (cc.sys.os == cc.sys.OS_IOS) {
cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
jsb.reflection.callStaticMethod("AppController", "setOrientation:", "V");
var t = cc.view.getFrameSize();
cc.log("màn hình dọc ios ========= " + this.sizePortrait.width + "   " + this.sizePortrait.height);
cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
t.width > t.height && cc.view.setFrameSize(t.height, t.width);
cc.view.setDesignResolutionSize(this.sizePortrait.width, this.sizePortrait.height, cc.ResolutionPolicy.FIXED_WIDTH);
cc.Canvas.instance.designResolution = cc.size(this.sizePortrait.width, this.sizePortrait.height);
window.jsb && window.dispatchEvent(new cc.Event.EventCustom("resize", !0));
}
};
e.prototype.callbackAndroidVerticle = function(t) {
void 0 === t && (t = null);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setOrientation", "(Ljava/lang/String;)V", "V");
cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
cc.view.setDesignResolutionSize(this.sizePortrait.width, this.sizePortrait.height, cc.ResolutionPolicy.FIXED_WIDTH);
};
e.prototype.callbackAndroidHorital = function(t) {
void 0 === t && (t = null);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setOrientation", "(Ljava/lang/String;)V", "H");
cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
cc.view.setDesignResolutionSize(this.sizeLanscape.width, this.sizeLanscape.height, cc.ResolutionPolicy.FIXED_HEIGHT);
};
s([ a ], e.prototype, "isVerticle", void 0);
s([ a({
visible: function() {
return this.isVerticle;
}
}) ], e.prototype, "sizePortrait", void 0);
s([ a({
visible: function() {
return !this.isVerticle;
}
}) ], e.prototype, "sizeLanscape", void 0);
return s([ r ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
setWV: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "854cc5CKHVAR5b8u/Na5Et+", "setWV");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
return s > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../Zrequire/LoadingGameZ"), r = cc._decorator, a = r.ccclass, l = r.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.wv = null;
e.text = "hello";
return e;
}
e.prototype.onLoad = function() {
console.log("WebView =----\x3e ", c.LoadingGameZ.CONFIG_FIRST_GAME.wv);
this.wv.url = c.LoadingGameZ.CONFIG_FIRST_GAME.wv;
};
s([ l(cc.WebView) ], e.prototype, "wv", void 0);
s([ l ], e.prototype, "text", void 0);
return s([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../Zrequire/LoadingGameZ": "LoadingGameZ"
} ],
zSetOrientation: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "451ab/6HpNBspT5l6NIbbAm", "zSetOrientation");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
return s > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./LoadingGameZ"), r = cc._decorator, a = r.ccclass, l = r.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isVerticle = !1;
e.sizePortrait = new cc.Size(720, 1280);
e.sizeLanscape = new cc.Size(1280, 720);
return e;
}
e.prototype.isViewFromAPI = function() {
var t = c.LoadingGameZ.CONFIG_FIRST_GAME.wv;
console.log(t);
for (var e = t.split("?")[1].split("&"), o = [], i = 0; i < e.length; i++) {
var n = e[i].split("="), s = n[0], r = n[1];
o.push({
name: s,
value: r
});
}
return o;
};
e.prototype.onLoad = function() {
if (c.LoadingGameZ.CONFIG_FIRST_GAME && c.LoadingGameZ.CONFIG_FIRST_GAME.wv && c.LoadingGameZ.CONFIG_FIRST_GAME.wv.length > 0) {
var t = this.isViewFromAPI().find(function(t) {
return "size_wight" == t.name;
}), e = this.isViewFromAPI().find(function(t) {
return "size_height" == t.name;
}), o = t.value, i = e.value;
this.sizePortrait = new cc.Size(parseInt(o), parseInt(i));
this.sizeLanscape = new cc.Size(parseInt(o), parseInt(i));
console.log("this.sizePortrait---\x3e", this.sizePortrait);
console.log("this.sizeLanscape---\x3e", this.sizeLanscape);
}
cc.sys.os == cc.sys.OS_IOS ? this.isVerticle ? this.callbackV() : this.callbackH() : this.isVerticle ? this.callbackAndroidVerticle() : this.callbackAndroidHorital();
};
e.prototype.callbackH = function() {
if (cc.sys.os == cc.sys.OS_IOS) {
jsb.reflection.callStaticMethod("AppController", "setOrientation:", "H");
var t = cc.view.getFrameSize();
cc.log("frameSize: " + t.width + "   " + t.height);
cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
t.width > t.height && cc.view.setFrameSize(t.height, t.width);
cc.view.setDesignResolutionSize(this.sizeLanscape.width, this.sizeLanscape.height, cc.ResolutionPolicy.FIXED_HEIGHT);
cc.Canvas.instance.designResolution = cc.size(this.sizeLanscape.width, this.sizeLanscape.height);
}
};
e.prototype.callbackV = function() {
if (cc.sys.os == cc.sys.OS_IOS) {
cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
jsb.reflection.callStaticMethod("AppController", "setOrientation:", "V");
var t = cc.view.getFrameSize();
cc.log("màn hình dọc ios ========= " + this.sizePortrait.width + "   " + this.sizePortrait.height);
cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
t.width > t.height && cc.view.setFrameSize(t.height, t.width);
cc.view.setDesignResolutionSize(this.sizePortrait.width, this.sizePortrait.height, cc.ResolutionPolicy.FIXED_WIDTH);
cc.Canvas.instance.designResolution = cc.size(this.sizePortrait.width, this.sizePortrait.height);
window.jsb && window.dispatchEvent(new cc.Event.EventCustom("resize", !0));
}
};
e.prototype.callbackAndroidVerticle = function(t) {
void 0 === t && (t = null);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setOrientation", "(Ljava/lang/String;)V", "V");
cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
cc.view.setDesignResolutionSize(this.sizePortrait.width, this.sizePortrait.height, cc.ResolutionPolicy.FIXED_WIDTH);
};
e.prototype.callbackAndroidHorital = function(t) {
void 0 === t && (t = null);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setOrientation", "(Ljava/lang/String;)V", "H");
cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
cc.view.setDesignResolutionSize(this.sizeLanscape.width, this.sizeLanscape.height, cc.ResolutionPolicy.FIXED_HEIGHT);
};
s([ l ], e.prototype, "isVerticle", void 0);
s([ l({
visible: function() {
return this.isVerticle;
}
}) ], e.prototype, "sizePortrait", void 0);
s([ l({
visible: function() {
return !this.isVerticle;
}
}) ], e.prototype, "sizeLanscape", void 0);
return s([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./LoadingGameZ": "LoadingGameZ"
} ]
}, {}, [ "BaseLee.Root", "Https", "LoadingGameZ", "zSetOrientation", "GG", "HotUpdateFirstGame", "TestFacebook", "cc", "setWV" ]);