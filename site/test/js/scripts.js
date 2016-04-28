	$.when($.getJSON('js/bd.json?ver=1', function (data) {
	 	var stJsId = 0,
	  	charsJ = [],
	  	bodysJ = [],
	  	racesJ = [],
	  	posisJ = [];

		$.each( data.char, function( key, val ) {
			stJsId = stJsId+1 ;
		    charsJ.push( "<li class='"+ val.filter +"'><input type='checkbox' id='a" + stJsId + "' value='"+ val.name +"' checked> <label for='a"+ stJsId +"'>" + val.name + "</label></li>" );
		});
		$.each( data.body, function( key, val ) {
			stJsId = stJsId+1 ;
		    bodysJ.push( "<li class='"+ val.filter +"'><input type='checkbox' id='b" + stJsId + "' value='"+ val.name +"' checked> <label for='b"+ stJsId +"'>" + val.name + "</label></li>" );
		});
		$.each( data.race, function( key, val ) {
			stJsId = stJsId+1 ;
		    racesJ.push( "<li class='"+ val.filter +"'><input type='checkbox' id='c" + stJsId + "' value='"+ val.name +"' checked> <label for='c"+ stJsId +"' title='"+ val.desc +"'>" + val.name + "</label></li>" );
		});
		$.each( data.position, function( key, val ) {
			stJsId = stJsId+1 ;
		    posisJ.push( "<li class='"+ val.filter +"'><input type='checkbox' id='d" + stJsId + "' value='"+ val.name +"' checked> <label for='d"+ stJsId +"'>" + val.name + "</label></li>" );
		});

		$( ".setup-inputs ul.char").html(charsJ.join( "" ));
		$( ".setup-inputs ul.body").html(bodysJ.join( "" ));
		$( ".setup-inputs ul.type").html(racesJ.join( "" ));
		$( ".setup-inputs ul.position").html(posisJ.join( "" ));
		
	})).then(function () {
		 var ch_l = $('.char').find("li :checkbox").length,
			po_l = $('.position').find("li :checkbox").length,
			tp_l = $('.type').find("li :checkbox").length,
			bd_l = $('.body').find("li :checkbox").length,
			character = $('.char'),
			position = $('.position'),
			type = $('.type'),
			body = $('.body'),
			btn = $('.btn.rukles'),
			btn_blot = $('.btn.blots'),
			result = $('#result'),
			res_info = $('.inhelp');

		doNice = function(obj) {
	        return obj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
	    }

		howmuch = ch_l * po_l * tp_l * bd_l;
		$('.frow').text(ch_l);
		$('.srow').text(po_l);
		$('.trow').text(tp_l);
		$('.forow').text(bd_l);
		$('.howmuch').text( doNice(howmuch) );

		var c_l = character.find("li :checkbox").eq( Math.floor(Math.random()*character.find("li").length) ).val() + " ",
			p_l = position.find("li :checkbox").eq( Math.floor(Math.random()*position.find("li").length) ).val(),
			t_t = type.find("li :checkbox").eq( Math.floor(Math.random()*type.find("li").length) );
			t_l = "<span class='help-link' data-toggle='tooltip' data-placement='top' title='" + t_t.next('label').attr('title') +"' >" + t_t.val() + "</span>" + " - ",
			b_l = body.find("li :checkbox").eq( Math.floor(Math.random()*body.find("li").length) ).val() + " ",

		res_onload = c_l + b_l + t_l + p_l;
		res_info.html(res_onload);
		result.html("<p>" + res_onload + "</p>");
		$('span.help-link').tooltip();

		// Очистка чекбоксов по требованию
		$('.sel-row').on('change click', function(){
			if ( $(this).prop('checked') === true ) {
				$(this).parents().next('ul').children().children().prop('checked',true);
			} else {
				$(this).parents().next('ul').children().children().removeAttr('checked');
			}
		});

		// Сортировка по разделам, пока в разработке
		$('.sortby li').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');

			if ( $(this).hasClass('fantasy') ) {
				$('.setup-inputs ul li :checkbox').removeAttr('checked').parents('.fy').children(':checkbox').prop('checked',true);
			} else if ( $(this).hasClass('realism') ) {
				$('.setup-inputs ul li :checkbox').removeAttr('checked').parents('.rl').children(':checkbox').prop('checked',true);
			} else if ( $(this).hasClass('fantastick') ) {
				$('.setup-inputs ul li :checkbox').removeAttr('checked').parents('.fk').children(':checkbox').prop('checked',true);
			} else if ( $(this).hasClass('horror') ) {
				$('.setup-inputs ul li :checkbox').removeAttr('checked').parents('.hr').children(':checkbox').prop('checked',true);
			} else if ( $(this).hasClass('all') ) {
				$('.setup-inputs ul li :checkbox').prop('checked',true);
			}
		});

		// Приятная кнопочка на мобилках
		btn.on('touchstart', function(){
			$(this).addClass('touched');
		}).on('touchend', function(){
			$(this).removeClass('touched');
		});

		genMeChar = function() {
			var char_l = character.find("li :checkbox:checked").length,
				pos_l = position.find("li :checkbox:checked").length,
				type_l = type.find("li :checkbox:checked").length,
				body_l = body.find("li :checkbox:checked").length;
				
			if (char_l > 1) {
				var char_rnd = Math.floor(Math.random()*char_l),
					cr = character.find("li :checkbox:checked").eq(char_rnd);
					
					if (cr.parent('li').hasClass('magic')) {
						var status = "magic";
					} else if (cr.parent('li').hasClass('epic')) {
						var status = "epic";
					} else if (cr.parent('li').hasClass('legend')) {
						var status = "legend";
					} else if (cr.parent('li').hasClass('unusual')) {
						var status = "unusual";
					}

					var char_r = "<span class='attr' data-status='"+ status +"'>" + cr.val() + "</span> ";
			} else if (char_l === 1) {
				var cr = character.find("li :checkbox:checked");
					if (cr.parent('li').hasClass('magic')) {
						var status = "magic";
					} else if (cr.parent('li').hasClass('epic')) {
						var status = "epic";
					} else if (cr.parent('li').hasClass('legend')) {
						var status = "legend";
					} else if (cr.parent('li').hasClass('unusual')) {
						var status = "unusual";
					}
					var char_r = "<span class='attr' data-status='"+ status +"'>" + cr.val() + "</span> ";
			} else {
				var char_r = "";
			}

			if (pos_l > 1) {
				var pos_rnd = Math.floor(Math.random()*pos_l),
					pos_r = " - " + position.find("li :checkbox:checked").eq(pos_rnd).val();
			} else if (pos_l === 1) {
				var pos_r = " - " + position.find("li :checkbox:checked").val();
			} else {
				var pos_r = "";
			}

			if (type_l > 1) {
				var type_rnd = Math.floor(Math.random()*type_l),
					tp = type.find("li :checkbox:checked").eq(type_rnd),
					type_r = "<span class='help-link' data-toggle='tooltip' data-placement='top' title='"+ tp.next('label').attr('title') +"' >" + tp.val() + "</span>";
			} else if (type_l === 1) {
				var tp = type.find("li :checkbox:checked"),
					type_r = "<span class='help-link' data-toggle='tooltip' data-placement='top' title='"+ tp.next('label').attr('title') +"' >" + tp.val() + "</span>";
			} else {
				var type_r = "";
			}

	        

			if (body_l > 1) {
				var body_rnd = Math.floor(Math.random()*body_l),
					body_r = body.find("li :checkbox:checked").eq(body_rnd).val() + " ";
			} else if (body_l === 1) {
				var body_r = body.find("li :checkbox:checked").val() + " ";
			} else {
				var body_r = "";
			}

			res = char_r + body_r + type_r + pos_r;
			return res;
		}

		hideRes = function(obj) {
			obj.addClass('result-anim-reverse');
		}
		remHideRes = function(obj) {
			obj.removeClass('result-anim-reverse').css('opacity','0');
		}

		rotateBlots = function() {

			$('.can-blot img').each(function() {
				blot = 'img/blot-' + Math.floor(Math.random()*8) + '.svg';
				$(this).attr('src', blot);
			});

			var rotate_deg = Math.floor(Math.random()*360),
				rotate_deg_1 = Math.floor(Math.random()*360),
				rotate_deg_2 = Math.floor(Math.random()*-360),
				rotate_deg_3 = Math.floor(Math.random()*360),
				rotate_deg_4 = Math.floor(Math.random()*720),
				rotate_deg_5 = Math.floor(Math.random()*-360),
				blot1 = $('.blot-1'),
				blot2 = $('.blot-2'),
				blot3 = $('.blot-3'),
				blot4 = $('.blot-4'),
				blot5 = $('.blot-5'),
				blot = $('.blot');

			rotate_deg = "rotate(" + rotate_deg + "deg)";
			rotate_deg_1 = "rotate(" + rotate_deg_1 + "deg)";
			rotate_deg_2 = "rotate(" + rotate_deg_2 + "deg)";
			rotate_deg_3 = "rotate(" + rotate_deg_3 + "deg)";
			rotate_deg_4 = "rotate(" + rotate_deg_4 + "deg)";
			rotate_deg_5 = "rotate(" + rotate_deg_5 + "deg)";
			blot.css({'transform': rotate_deg});

			if (blot1.css('left') === "-50px") {
				blot1.css({'transform': rotate_deg_1, 'left':'300px'});
				blot2.css({'transform': rotate_deg_2, 'left':'-50px'});
				blot3.css({'transform': rotate_deg_3, 'top': '90px'});
				blot4.css({'transform': rotate_deg_4});
				blot5.css({'transform': rotate_deg_5, 'top': '420px'});
			} else {
				blot1.css({'transform': rotate_deg_1, 'left':'-50px'});
				blot2.css({'transform': rotate_deg_2, 'left':'300px'});
				blot3.css({'transform': rotate_deg_3, 'top': '420px'});
				blot4.css({'transform': rotate_deg_4});
				blot5.css({'transform': rotate_deg_5, 'top': '90px'});
			}
		};

		$( document ).ready(function() {
			rotateBlots();
		});
		
		btn_blot.on('click', function(e) {
			e.preventDefault();
			rotateBlots();
		});

		btn.on('click', function(e){
			e.preventDefault();

			btn.addClass('disabled');
			result.removeClass('result-anim epic magic legend unusual');
			
			hideRes(result);
			
			setTimeout(remHideRes(result),1100); // Всякая анимация

			howTime = parseInt($('.howTime').val());

		if( (howTime !== "" || howTime > 0) && howTime < 101 ) { howTime = howTime; } else if (howTime > 100) { howTime = 100; } else { howTime = 1; }
			
			var charArr = [],
				i = 0;
			
			while(i < howTime) { 
				charArr.push( "<p>" + genMeChar() + "</p>" );
				i++;
			};
			
			setTimeout(function() {
				result.html(charArr).addClass('result-anim').css('opacity','1');
				btn.removeClass('disabled');
				$('span.help-link').tooltip();
				
					$('#result p').each( function() {
						var status = $(this).children('span.attr').data('status');
						$(this).addClass(status);
					});
			},1100);
		});
	});