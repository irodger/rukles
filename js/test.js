function () {
	var _id = "4af1e6fab558a7ddf2b24956a520f055";
	while (document.getElementById("timer" + _id)) _id = _id + "0";
	document.write("<div id='timer" + _id + "' style='min-width:935px;height:158px;'></div>");
	var _t = document.createElement("script");
	_t.src = "http://megatimer.ru/timer/timer.min.js";
	var _f = function (_k) {
		var l = new MegaTimer(_id, {
			"view": [1, 1, 1, 1],
			"type": {
				"currentType": "2",
				"params": {
					"startByFirst": false,
					"days": "99",
					"hours": "",
					"minutes": "",
					"utc": 1456300940167
				}
			},
			"design": {
				"type": "plate",
				"params": {
					"round": "6",
					"background": "gradient",
					"background-color": ["#fff", "#efefef"],
					"effect": "flipchart",
					"space": "9",
					"separator-margin": "35",
					"number-font-family": {
						"family": "Russo One",
						"link": "<link href='http://fonts.googleapis.com/css?family=Russo+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
					},
					"number-font-size": "80",
					"number-font-color": "#00273a",
					"padding": "23",
					"separator-on": false,
					"separator-text": ":",
					"text-on": true,
					"text-font-family": {
						"family": "Russo One",
						"link": "<link href='http://fonts.googleapis.com/css?family=Russo+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
					},
					"text-font-size": "30",
					"text-font-color": "#ffffff"
				}
			},
			"designId": 2,
			"theme": "white",
			"width": 935,
			"height": 158
		});
		if (_k != null) l.run();
	};
	_t.onload = _f;
	_t.onreadystatechange = function () {
		if (_t.readyState == "loaded") _f(1);
	};
	var _h = document.head || document.getElementsByTagName("head")[0];
	_h.appendChild(_t);
}).call(this);