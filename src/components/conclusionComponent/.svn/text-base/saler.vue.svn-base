<template>
	<div class="pawnmain pr">
		<dl>
			<dt>{{salername}}</dt>
			<dd class="v2bg telicon" @click="iosphone"></dd>
			<dd class="qzdate">{{company}}</dd>
		</dl>
	</div>
</template>
<script>
export default {
	props: ['salername','telno','company'],
    methods:{
		iosphone:iosphone
	}
}

  function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

 setupWebViewJavascriptBridge(function(bridge) {
                 bridge.registerHandler('testJSFunction', function(data, responseCallback) {
                    // alert('JS方法被调用:'+data);
                    responseCallback('js执行过了');
                 })
            })
//通话
function iosphone(){
 	var params = {'telno':this.telno.toString()};
    WebViewJavascriptBridge.callHandler('iosphone',params,function(response) {
         // alert(response);
     });
}
</script>