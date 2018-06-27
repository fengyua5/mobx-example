function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) { //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { //Others
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

window._myImport = function (url) {

  return new Promise(function (resolve, reject) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    // 超时时间为120s
    script.timeout = 120000;
    // 需要加载的文件名
    script.src = url;
    // 120s的定时器，超时后触发onScriptComplete回调
    var timeout = setTimeout(onScriptComplete, 120000);
    // chunk加载完毕后的回调
    script.onerror = script.onload = onScriptComplete;

    function onScriptComplete(event) {
      console.log(arguments, '-------');
      // avoid mem leaks in IE.
      script.onerror = script.onload = null;
      // 清空定时器
      clearTimeout(timeout);
      //返回promise
      resolve('123')
    };
    head.appendChild(script);
  });

};