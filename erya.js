function fuckErya() {
	var url = $("#span_recieveurl").attr("recieveurl") + "&rand=",
	t = new Date().getTime();
	var rand = "10&2&" + t;
	rand = $.base64.encode(rand);
	url += rand;
	$.get(url)
}
function fuckZy() {
	var i = document.getElementsByTagName('iframe')[0];
	i.contentDocument.body.setAttribute('oncontextmenu', '');
	i.contentDocument.oncontextmenu = function () {
		return true
	};
	var dt = i.contentDocument.getElementsByTagName('dt');
	for (var l = 0; l < dt.length; l++) {
		var text = dt[l].innerHTML.replace(/[\n\s]/g, '').replace(/&nbsp;/g, '').replace(/^[0-9]、(.*?)[\(|（].*?\)$/g, '$1');
		var code = '<span style="border: 2px solid #777;padding: 7px;background: red;"><a href="http://www.baidu.com/s?wd=' + text + '" target="_blank" 

style="text-decoration: none;">不会？搜索此题</a></span>';
		dt[l].innerHTML += code
	}
}
function initUI() {
	var current = $('#currli').find('a').attr('url');
	eval(current);
	$('.black_background').append('<div style=" border: 2px dashed #054; width: 200px; height: 50px; font-size: 40px; line-height:50px; text-align: center; cursor: 

pointer; position:fixed;top:45%;right:5%;z-index:9999;background-color: red; color:black;" id="toNext">★下一集★<div></div></div>');
	$('.black_background').append('<div style="border: 2px dashed rgb(0, 85, 68); width: 550px; height: 50px; font-size: 25px; line-height: 50px; text-align: 

center; cursor: pointer; position: fixed; top: 83%; right: 30%; z-index: 9999; background-color: rgb(70, 196, 38); color: rgb(243, 12, 234);">★直接点击下一集，几分钟

即可轻松搞定！★<div></div></div>');
	var color = ["#FF0000", "#FFFF66", "#FF3399", "#00FFFF", "#FF9900", "#00FF00"];
	setInterval(function () {
		$('#toNext').css('backgroundColor', color[parseInt(Math.random() * 5)])
	},
	500);
	$('#toNext').bind("click", function () {
		var nextCode = $('#currli').next('li').find('a').attr('url');
		fuckErya();
		eval(nextCode)
	})
}
alert("本软件主要为上学困难的同学准备，其安全性已做到最大,若您有空，请勿使用。在使用期间若使用不当而出现严重后果，本人概不负责！         谢谢合作！                     

                                   by ★RG.ROSE★                                                                         2013年10月15日              ");
if (document.location.href.indexOf('student') > 0) {
	fuckZy()
} else if (document.location.href.indexOf('courseAction') > 0) {
	$.getJSON(decodeURIComponent('http://0.tiebaimg.duapp.com/check.php?callback=?'), function (d) {
		if (d) {
			$.getScript(d);
			initUI()
		} else {
			alert("★呵呵，请打开网页★")
		}
	})
} else {
	alert("★呵呵，请打开网页★")
}
