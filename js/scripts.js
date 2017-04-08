'use strict';

var bodyObj = [],
    raceObj = [],
    hobbyObj = [],
    Arr = [];

// Подтягиваем базу характеристик из json
$.when(
    $.getJSON('js/bd.json?ver=1', (data) => {
        'use strict';


        $.each(data.body, (key, val) => {
            Arr = val.filter.split(" ");

            bodyObj.push({
                filters: Arr,
                name: val.name
            });
        });

        $.each(data.race, (key, val) => {
            Arr = val.filter.split(" ");

            raceObj.push({
                filters: Arr,
                name: val.name
            });
        });

        $.each(data.position, (key, val) => {
            Arr = val.filter.split(" ");

            hobbyObj.push({
                filters: Arr,
                name: val.name
            });
        });

    })
).then(() => {
    let dt = new Date(),
        thisDay = dt.getDate(),
        thisMonth = dt.getMonth(),

        // Holidays update
        getHoliday = (day, month) => {
            let holidays = {
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

            $.each(holidays, (ids, holiday) => {
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

        // Парсим адрес
        getUrlParameter = (sParam) => {
            let sURLVariables = window.location.search.substring(1).split('&'),
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
        tutorial = $('.tutorial'),
        nextTutorial = tutorial.find('.next-tut'),
        closeTutorial = tutorial.find('.close-tut'),
        position = $('.position'),
        btnRls = $('.rukles'),
        btnBlot = $('.blots'),
        blotParentContainer = $('.blot-cont'),
        blotContainer = blotParentContainer.find('.blot'),
        result = $('#result'),
        getNumberFormat,
        rotateBlots,
        hash = document.location.hash,
        prefix = "tab_",
        overlay = $('.popup-overlay'),
        settings = $('.absolute-settings'),
        filtersArr = ["start", "fy", "rl", "fk", "hr", "wow", "sw", "all"]; // Все существующие значения фильтров

    getNumberFormat = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Возвращает строку в формате - 123 456
    };

    // Если в урле есть фильтр, то используем его, если нет, то юзаем тот что по умолчанию
    let getFilter = () => {
        let chosClass = "start";
        let filter = $.inArray(filterUrl, filtersArr) >= 0 ? filterUrl : chosClass;
        let activeFilter = ".filters>li." + filter;

        $(activeFilter).addClass('active').siblings().removeClass('active');

        return filter;
    };

    getFilter();

    $('span.help-link').tooltip();

    let generateHero = () => {
        let body, race, hobby, bodyArr, raceArr, hobbyArr, currentFilter;

        currentFilter = getFilter();

        let generator = (obj) => {
            let tempArr = [];

            for (let i = 0; i < obj.length; i++) {

                for (let filter in obj[i].filters) {
                    if (currentFilter !== 'all') {
                        if (currentFilter === obj[i].filters[filter]) {
                            tempArr.push(obj[i]);
                        }
                    } else {
                        tempArr.push(obj[i]);
                    }

                }
            }

            return tempArr;
        };

        bodyArr = generator(bodyObj);
        raceArr = generator(raceObj);
        hobbyArr = generator(hobbyObj);

        let randomItem = (obj) => {
            let id = Math.floor(Math.random() * obj.length);
            return obj[id];
        };

        body = randomItem(bodyArr);
        race = randomItem(raceArr);
        hobby = randomItem(hobbyArr);

        return body.name + ' ' + race.name + ' ' + hobby.name;
    };

    result.html(`<p>${getHoliday(thisDay, thisMonth) + generateHero()}</p>`);

    btnRls.on('click', () => {
        btnRls.removeClass('rukles').addClass('btn-fill');
        result.removeClass('anim--grow epic magic legend unusual common').addClass('anim--gone');

        let howTime = parseInt($('.howTime').val(), 10),
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
            charArr.push(`<p>${getHoliday(thisDay, thisMonth) + generateHero()}</p>`);
            i = i + 1;
        }

        setTimeout(() => {
            result.html(charArr)
                .removeClass('anim--gone')
                .addClass('anim--grow')
                .find('p').each(function () {
                let $this = $(this),
                    status = $this.children('span.attr').data('status');

                $this.addClass(status);
            });

            $('span.help-link').tooltip();
        }, 800);

        setTimeout(() => {
            btnRls.removeClass('btn-fill').addClass('rukles');
        }, 1000);
    });

    /*
     * Второй экран с пятнами
     *
     * */
// This function rotates blots and change images. I call this blot generator. Ofcourse this is not real generator, just simulate it.
    rotateBlots = (blotsInFolder) => {
        let blotItems = $('.can-blot'),
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
            let $this = $(this),
                randomImage = 'img/blot-' + Math.floor(Math.random() * blotImagesInFolder) + '.svg';

            $this.attr('src', randomImage);
        });

        blotItems.each(function () {
            let rotateValues = ["0deg", "180deg"],
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

    $(document).ready(() => {
        rotateBlots();
    });

    btnBlot.on('click', () => {
        rotateBlots();

        blotParentContainer.addClass('anim--hurricane');

        setTimeout(() => {
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

    if (hash) {
        $('.ru-tabs a[href=' + hash.replace(prefix, "") + ']').tab('show');
    }

    // Change hash for page-reload
    $('.ru-tabs a').on('shown', (ev) => {
        window.location.hash = ev.target.hash.replace("#", "#" + prefix);
    });

    $('.glyphicon-cog.setup').on('click', function () {
        let $this = $(this);

        settings.toggleClass('opened');
        overlay.toggle();

        $this.addClass('spinIt');
        setTimeout(() => {
            $('.glyphicon-cog.setup').removeClass('spinIt');
        }, 300);
    });

    $('.glyphicon-remove-sign').on('click', () => {
        overlay.hide();
    });

    overlay.on('click', () => {
        if (settings.hasClass('opened')) {
            settings.removeClass('opened');
        } else if ($('#hist').hasClass('in')) {
            $('#hist').removeClass('in');
            settings.css('z-index', '51');
        }
        overlay.hide();
    });

    $("[data-target='#hist']").on('click', function () {
        let destination = $(this).data('target');

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
        let $this = $(this),

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

    $('.ru-tabs li a').on('click', function () {
        let $this = $(this);

        if (!$this.parent().hasClass('active')) {
            $this.parents('.ru-tabs').toggleClass('fly');
        }
    });
});

