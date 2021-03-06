// Подтягиваем базу характеристик из json, пока не подтянется, ждем
$.when($.getJSON('js/bd.json?ver=1', function (data) {
	"use strict";
	var itemsID = 0,
		bodyItems = [],
		racesItems = [],
		hobbyItems = [],
		setupFields = $('.setup-inputs'),
		bodyField = setupFields.find('ul').filter('.body'),
		raceField = setupFields.find('ul').filter('.race'),
		hobbyField = setupFields.find('ul').filter('.position');

	// Кладем каждый элемент из ноды body в инпут
	$.each(data.body, function (key, val) {
		itemsID++;
		bodyItems.push("<li class='" + val.filter + "'><input type='checkbox' id='b" + itemsID + "' value='" + val.name + "' checked> <label for='b" + itemsID + "'>" + val.name + "</label></li>");
	});
	// Кладем каждый элемент из ноды race в инпут
	$.each(data.race, function (key, val) {
		itemsID++;
		racesItems.push("<li class='" + val.filter + "'><input type='checkbox' id='c" + itemsID + "' value='" + val.name + "' checked> <label for='c" + itemsID + "' title='" + val.desc + "'>" + val.name + "</label></li>");
	});
	// Кладем каждый элемент из ноды position в инпут
	$.each(data.position, function (key, val) {
		itemsID++;
		hobbyItems.push("<li class='" + val.filter + "'><input type='checkbox' id='d" + itemsID + "' value='" + val.name + "' checked> <label for='d" + itemsID + "'>" + val.name + "</label></li>");
	});

	bodyField.html(bodyItems.join("")); // Кладем Body в столбик Форма
	raceField.html(racesItems.join("")); // Кладем Race в столбик Раса
	hobbyField.html(hobbyItems.join("")); // Кладем Position в столбик Профессия

})).then(function () {
	"use strict";
	var dt = new Date(),
		thisDay = dt.getDate(),
		thisMonth = dt.getMonth(),

		// Holidays update
		getHoliday = function getHoliday(day, month) {
			var holidays = {
					newYear: {
						start: 1,
						end: 6,
						month: 0,
						name: "Новогодний"
					},
					xmasDay: {
						start: 7,
						end: 13,
						month: 0,
						name: "Рождественский"
					},
					helloween: {
						start: 29,
						end: 31,
						month: 9,
						name: "Пугающий"
					},
					valentine: {
						start: 13,
						end: 15,
						month: 1,
						name: "Влюбленный"
					},
					mansDay: {
						start: 20,
						end: 25,
						month: 1,
						name: "Мужественный"
					},
					womansDay: {
						start: 7,
						end: 10,
						month: 2,
						name: "Женственный"
					},
					foolDay: {
						start: 1,
						end: 2,
						month: 3,
						name: "Глупый"
					},
					schoolDay: {
						start: 1,
						end: 10,
						month: 8,
						name: "Учащийся"
					},
					victoryDay: {
						start: 8,
						end: 12,
						month: 4,
						name: "Героический"
					},
					mayDay: {
						start: 1,
						end: 3,
						month: 4,
						name: "Работящий"
					}
				},
				todayHoliday = '';

			$.each(holidays, function (ids, holiday) {
				if (day >= holiday.start && day <= holiday.end && month === holiday.month) {
					todayHoliday = holiday.name;
					return;
				}
			});

			if (todayHoliday !== "") {
				return todayHoliday + " ";
			} else {
				return "";
			}
		},

		// Notification 
		notifyMe = function notifyMe() {
			// Проверка поддерживаемости браузером уведомлений
			if (!("Notification" in window)) {
				console.log("Браузер не поддерживает уведомления, а могли бы идти прикольные напоминалки");
			} else if (Notification.permission === "granted") {
				// Если разрешено то создаем уведомлений
				var options = {
					tag: "rkls",
					body: "Не хочешь порисовать героев Варкрафта?",
					iconUrl: "http://rukles.ru/favicon.ico",
					icon: "http://rukles.ru/favicon.ico"
				};
				var notification = new Notification("Rukles", options);

				notification.onclick = function () {
					notification.close();
					location.replace("http://rukles.ru/?f=wow");
				};

			} else if (Notification.permission !== 'denied') {
				Notification.requestPermission(function (permission) {
					// Если пользователь разрешил, то создаем уведомление 
					if (permission === "granted") {
						var notification = new Notification("Hi there!");
					}
				});
			}
		},

		// Парсим адрес
		getUrlParameter = function getUrlParameter(sParam) {
			var sURLVariables = window.location.search.substring(1).split('&'),
				sParameterName, i;
			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] === sParam) {

					if (sParameterName[1] === undefined) {
						return true;
					} else {
						return decodeURIComponent(sParameterName[1]);
					}
				}
			}
		},

		filterUrl = getUrlParameter('f'), // Предустановки в зависимости от Урла url/?f=sw - starwars (как класс фильтра)
		chkOnStart = $('.filters>li.active').attr('class'),
		chosClass = "start", //chkOnStart.replace(/active|(\s)/gi, ''),
		po_l = $('.position').find(":checkbox").length,
		tp_l = $('.race').find(":checkbox").length,
		bd_l = $('.body').find(":checkbox").length,
		settingsList = $('.setup-inputs'),
		settingsBoxes = settingsList.find(':checkbox'),
		tutorial = $('.tutorial'),
		nextTutorial = tutorial.find('.next-tut'),
		closeTutorial = tutorial.find('.close-tut'),
		position = $('.position'),
		positionChecked = position.find(":checked"),
		race = $('.race'),
		body = $('.body'),
		btnRls = $('.btn.rukles'),
		btnBlot = $('.btn.blots'),
		blotParentContainer = $('.blot-cont'),
		blotContainer = blotParentContainer.find('.blot'),
		result = $('#result'),
		res_info = $('.inhelp'),
		howmuch = po_l * tp_l * bd_l,
		p_l,
		t_t,
		t_l,
		b_l,
		res_onload,
		getNumberFormat,
		activeFilter,
		getRandomHero,
		rotateBlots,
		hash = document.location.hash,
		prefix = "tab_",
		overlay = $('.popup-overlay'),
		settings = $('.absolute-settings'),
		filtersArr = ["start", "fy", "rl", "fk", "hr", "wow", "sw", "all"]; // Все существующие значения фильтров

	getNumberFormat = function getNumberFormat(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Возвращает строку в формате - 123 456
	};
	
	// Если в урле есть фильтр, то используем его, если нет, то юзаем тот что по умолчанию
	var getFilter = function getFilter() {
		var changeFilter = function changeFilter(choosedFilter) {
			if (choosedFilter !== "all") {
				choosedFilter = "." + choosedFilter
				settingsBoxes.removeAttr('checked').parents(choosedFilter).children(':checkbox').prop('checked', true);
			} else {
				settingsBoxes.attr('checked', true).prop('checked', true);
			}	
		},
		filter;

		if ($.inArray(filterUrl, filtersArr) >= 0) {
			activeFilter = ".filters>li." + filterUrl;
			filter = filterUrl;
		}
		else {
			activeFilter = ".filters>li." + chosClass;
			filter = chosClass;
		}

		$(activeFilter).addClass('active').siblings().removeClass('active');
		changeFilter(filter);
	};

	getFilter();
	
	$('.filters li').on('click', function () {

		var $this = $(this),
			clsString = $this.attr('class');

			$this.addClass('active').siblings().removeClass('active');
			clsString = clsString.replace(/active/g, '');
			
			changeFilter(clsString);
	});
	
	p_l = positionChecked.eq(Math.floor(Math.random() * positionChecked.length)).val();
	t_t = race.find(":checked").eq(Math.floor(Math.random() * race.find(":checked").length));
	t_l = "<span class='help-link' data-toggle='tooltip' data-placement='top' title='" + t_t.next('label').attr('title') + "' >" + t_t.val() + "</span>" + " ";
	b_l = body.find(":checked").eq(Math.floor(Math.random() * body.find(":checked").length)).val() + " ";
	res_onload = b_l + t_l + p_l;

	$('.srow').text(po_l);
	$('.trow').text(tp_l);
	$('.forow').text(bd_l);
	$('.howmuch').text(getNumberFormat(howmuch));


	res_info.html(res_onload);
	result.html("<p>" + getHoliday(thisDay, thisMonth) + res_onload + "</p>");
	$('span.help-link').tooltip();

	// Очистка чекбоксов по требованию
	$('.sel-row').on('change click', function () {
		var $this = $(this);

		if ($this.prop('checked')) {
			$this.parents().next('ul').children().children().prop('checked', true);
		} else {
			$this.parents().next('ul').children().children().removeAttr('checked');
		}
	});

	//getRandomHero = function getRandomHero() {
	getRandomHero = function getRandomHero(oneElNeeded) {
		var hobbyChecked = position.find(":checked"),
			hobbyLength = hobbyChecked.length,
			racesChecked = race.find(":checked"),
			raceLength = racesChecked.length,
			bodyChecked = body.find(":checked"),
			bodyLength = bodyChecked.length,
			bdy,
			body_r,
			tp,
			race_r,
			pos_r,
			res,
			bodyStatus;

		// Присваивается качественный статус - magic, epic, legend, unusual, common
		bodyStatus = function bodyStatus(bdy) {
			var status;

			if (bdy.parent('li').hasClass('magic')) {
				status = "magic";
			} else if (bdy.parent('li').hasClass('epic')) {
				status = "epic";
			} else if (bdy.parent('li').hasClass('legend')) {
				status = "legend";
			} else if (bdy.parent('li').hasClass('unusual')) {
				status = "unusual";
			} else if (!bdy.parent('li').hasClass('epic') || !bdy.parent('li').hasClass('unusual') || !bdy.parent('li').hasClass('magic') || !bdy.parent('li').hasClass('legend')) {
				status = "common";
			}

			return "<span class='attr' data-status='" + status + "'>" + bdy.val() + "</span> ";
		};

		//		var getBody = function getBody(amount) {
		//			var randomOfBody = Math.floor(Math.random() * amount),
		//				bodyChecked = body.find(":checked"),
		//				bodyEq = bodyChecked.eq(randomOfBody);
		//			
		//			if (amount > 1) {
		//				return bodyEq;
		//			} else if (amount === 1){
		//				return bodyChecked;
		//			} else {
		//				return "";
		//			}
		//		};

		if (bodyLength > 1) {
			body_r = Math.floor(Math.random() * bodyLength);
			bdy = bodyChecked.eq(body_r);
			body_r = bodyStatus(bdy);
		} else if (bodyLength === 1) {
			bdy = bodyChecked;
			body_r = bodyStatus(bdy);
		} else {
			body_r = "";
		}

		if (raceLength > 1) {
			race_r = Math.floor(Math.random() * raceLength);
			tp = racesChecked.eq(race_r);
			race_r = "<span class='help-link' data-toggle='tooltip' data-placement='top' title='" + tp.next('label').attr('title') + "' >" + tp.val() + "</span>";
		} else if (raceLength === 1) {
			tp = racesChecked;
			race_r = "<span class='help-link' data-toggle='tooltip' data-placement='top' title='" + tp.next('label').attr('title') + "' >" + tp.val() + "</span>";
		} else {
			race_r = "";
		}

		if (hobbyLength > 1) {
			pos_r = Math.floor(Math.random() * hobbyLength);
			pos_r = " " + hobbyChecked.eq(pos_r).val();
		} else if (hobbyLength === 1) {
			pos_r = " " + hobbyChecked.val();
		} else {
			pos_r = "";
		}

		if (oneElNeeded == "body") {
			return body_r;
		} else if (oneElNeeded == "race") {
			return race_r
		} else if (oneElNeeded == "hobbie") {
			return pos_r;
		} else {
			res = body_r + race_r + pos_r;
			return res;
		}
	};

	// This function rotates blots and change images. I call this blot generator. Ofcourse this is not real generator, just simulate it.
	rotateBlots = function rotateBlots(blotsInFolder) {
		var blotItems = $('.can-blot'),
			blot1 = blotItems.filter('.blot-1'),
			blot2 = blotItems.filter('.blot-2'),
			blot3 = blotItems.filter('.blot-3'),
			blot5 = blotItems.filter('.blot-5'),
			blotImagesInFolder,
			bl1_left = blot1.css('left'),
			bl2_left = blot2.css('left'),
			bl3_top = blot3.css('top'),
			bl5_top = blot5.css('top');

		if (blotsInFolder !== "" && !isNaN(blotsInFolder)) {
			blotImagesInFolder = blotsInFolder;
		} else {
			blotImagesInFolder = 8;
		}

		blotItems.children().each(function () {
			var $this = $(this),
				randomImage = 'img/blot-' + Math.floor(Math.random() * blotImagesInFolder) + '.svg';

			$this.attr('src', randomImage);
		});

		blotItems.each(function () {
			var rotateValues = ["0deg", "180deg"],
				$this = $(this),
				rotateByY = "rotateY(" + rotateValues[Math.floor(Math.random() * rotateValues.length)] + ")",
				rotateByX = "rotateX(" + rotateValues[Math.floor(Math.random() * rotateValues.length)] + ")",
				rotateXY = "rotate(" + Math.floor(Math.random() * 360) + "deg) " + rotateByY + " " + rotateByX;

			$this.css('transform', rotateXY);
		});

		blot1.css('left', bl2_left);
		blot2.css('left', bl1_left);
		blot3.css('top', bl5_top);
		blot5.css('top', bl3_top);
	};

	$(document).ready(function () {
		rotateBlots();
	});

	btnBlot.on('click', function (e) {
		e.preventDefault();
		rotateBlots();

		blotParentContainer.addClass('anim--hurricane');

		setTimeout(function () {
			blotParentContainer.removeClass('anim--hurricane');
		}, 1500);
	});

	// Приятная кнопочка на мобилках
	btnRls.on('touchstart', function () {
		$(this).addClass('touched');
	}).on('touchend', function () {
		$(this).removeClass('touched');
	});

	blotContainer.on('touchstart', function () {
		$(this).addClass('touched');
	}).on('touchend', function () {
		$(this).removeClass('touched');
	}).on('click', function () {
		$(this).toggleClass('stopped');
	});

	btnRls.on('click', function (e) {
		e.preventDefault();

		//notifyMe(); // Уведомлялки

		btnRls.removeClass('rukles').addClass('btn-fill');
		result.removeClass('anim--grow epic magic legend unusual common').addClass('anim--gone');

		var howTime = parseInt($('.howTime').val(), 10),
			charArr = [],
			i = 0;

		if (howTime !== "" && !isNaN(howTime)) {
			if (howTime > 100) {
				howTime = 100;
			} else if (howTime < 0) {
				howTime = 1;
			}
		} else {
			howTime = 1;
		}

		while (i < howTime) {
			charArr.push("<p>" + getHoliday(thisDay, thisMonth) + getRandomHero() + "</p>");
			i = i + 1;
		}

		setTimeout(function () {
			result.html(charArr)
					.removeClass('anim--gone')
					.addClass('anim--grow')
					.find('p').each(function () {
						var $this = $(this),
							status = $this.children('span.attr').data('status');

						$this.addClass(status);
					});
			
			$('span.help-link').tooltip();
		}, 800);

		setTimeout(function () {
			btnRls.removeClass('btn-fill').addClass('rukles');
		}, 1000);
	});

	if (hash) {
		$('.ru-tabs a[href=' + hash.replace(prefix, "") + ']').tab('show');
	}

	// Change hash for page-reload
	$('.ru-tabs a').on('shown', function (ev) {
		window.location.hash = ev.target.hash.replace("#", "#" + prefix);
	});

	$('.glyphicon-cog.setup').on('click', function () {
		var $this = $(this);

		settings.toggleClass('opened');
		overlay.toggle();

		$this.addClass('spinIt');
		setTimeout(function () {
			$('.glyphicon-cog.setup').removeClass('spinIt');
		}, 300);
	});

	$('.glyphicon-remove-sign').on('click', function () {
		overlay.hide();
	});

	overlay.on('click', function () {
		if (settings.hasClass('opened')) {
			settings.removeClass('opened');
		} else if ($('#hist').hasClass('in')) {
			$('#hist').removeClass('in');
			settings.css('z-index', '51');
		}
		overlay.hide();
	});

	$("[data-target='#hist']").on('click', function () {
		var destination = $(this).data('target');

		if (!$(destination).filter('collapse').hasClass('in')) {
			settings.css('z-index', '49');
			overlay.show();
		} else {
			settings.css('z-index', '51');
			overlay.hide();
		}
	});

	if (Cookies.get('rkls_tutorial') !== 'closed') {
		tutorial.show().find('.a').show().siblings().hide();
	}

	$('.show-tut').on('click', function () {
		tutorial.show().find('.a').show().siblings().hide();
	});

	nextTutorial.on('click', function (e) {
		e.preventDefault();
		var $this = $(this),

			subClass = '.' + $this.parents('.tut').attr('class').replace(/tut|(\s)/gi, ''),
			nextTut = $this.parents(subClass).hide().next().show(),
			destination = $(nextTut).offset().top;
		$('html,body').animate({
			scrollTop: destination
		}, 300);
	});

	closeTutorial.on('click', function (e) {
		e.preventDefault();

		tutorial.hide();
		if (Cookies.get('rkls_tutorial') !== 'closed') {
			Cookies.set('rkls_tutorial', 'closed');
		}
	});

	$('.filter-i-list__link').on('click', function (e) {
		//e.preventDefault();
	});

	$('.ru-tabs li a').on('click', function () {
		var $this = $(this);

		if (!$this.parent().hasClass('active')) {
			$this.parents('.ru-tabs').toggleClass('fly');
		}
	});
});