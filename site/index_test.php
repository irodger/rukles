<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Руклес - Создание персонажа за один клик онлайн" />
    <title>RUKLES - Поваренная книга эпических рецептов для современных алхимиков</title>
    <link rel="stylesheet" href="css/style.less.css?v0.7.0" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link href='https://fonts.googleapis.com/css?family=Neucha&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

    <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/img/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-touch-icon-152x152.png">

    <script type="text/javascript" src="//vk.com/js/api/openapi.js?121"></script>
    <script type="text/javascript">
        VK.init({
            apiId: 5207689,
            onlyWidgets: true
        });
    </script>
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    <!-- Google Tag Manager -->
    <noscript>
        <iframe src="//www.googletagmanager.com/ns.html?id=GTM-P65WJN" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <script>
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                '//www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-P65WJN');
    </script>
    <!-- End Google Tag Manager -->
    <div class="container-fluid">
        <div class="col-md-3 text-center header">
            <a href="/"><img src="img/logo.png" alt="Руклес - создание любых персонажей бесплатно без смс"></a>
            <span class="cur-a glyphicon glyphicon-question-sign" data-toggle="collapse" data-target="#hist"></span>&nbsp;
            <span class="cur-a glyphicon glyphicon-info-sign show-tut hidden-xs"></span>
        </div>
        <div class="filter-i text-right">
            <ul class="list-inline filter-i-list filters">
                <li class="active start"><a href="/?f=start" class="filter-i-list__link"><figure class="filter-i-list__f filter-i-list__f_start" title="Начальный уровень"></figure></a></li>
                <li class="fy"><a href="/?f=fy" class="filter-i-list__link"><figure class="filter-i-list__f filter-i-list__f_fy" title="Фэнтэзи"></figure></a></li>
                <li class="rl"><a href="/?f=rl" class="filter-i-list__link"><figure class="filter-i-list__f filter-i-list__f_rl" title="Реализм"></figure></a></li>
                <li class="fk"><a href="/?f=fk" class="filter-i-list__link"><figure class="filter-i-list__f filter-i-list__f_fk" title="Фантастика"></figure></a></li>
                <li class="hr"><a href="/?f=hr" class="filter-i-list__link"><figure class="filter-i-list__f filter-i-list__f_hr" title="Ужастики"></figure></a></li>
                <li class="wow"><a href="/?f=wow" class="filter-i-list__link"><figure class="filter-i-list__f filter-i-list__f_wow" title="World of Warcraft"></figure></a></li>
                <li class="sw"><a href="/?f=sw" class="filter-i-list__link"><figure class="filter-i-list__f filter-i-list__f_sw" title="Star Wars"></figure></a></li>
                <li class="all"><a href="/?f=all" class="filter-i-list__link"><figure class="filter-i-list__f filter-i-list__f_all" title="Все варианты"></figure></a></li>
            </ul>
        </div>
    </div>
    <div class="container-fluid rls-bg text-center">
        <!-- Nav tabs -->
        <ul class="ru-tabs list-inline text-center" role="tablist">
            <li role="presentation" class="active"><a href="#rls" aria-controls="rls" role="tab" data-toggle="tab">Персонажи</a></li>
            <li role="presentation"><a href="#blots" aria-controls="blots" role="tab" data-toggle="tab">Пятновыводитель</a></li>
        </ul>

        <div class="container">
            <div class="row">

                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="clone clone-1 col-md-offset-3 col-md-6"></div>
                    <div class="clone clone-2 col-md-offset-3 col-md-6"></div>
                    <div role="tabpanel" class="tab-pane active fade slide-left in col-md-offset-3 col-md-6" id="rls">

                        <!-- RUKLES -->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <h3 class="text-center">Руклес придумает тебе персонажа всего за один клик!</h3>
                                    <div id="result" class="text-center row anim--grow"></div>
                                    <div class="btn-cont">
                                        <a href="#" class="btn rukles"><img src="img/kas.png" alt="Do Rukles!" width="80"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade slide-left col-md-offset-3 col-md-6" id="blots">
                        <!-- Blotgen -->
                        <div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <h3 class="text-center">Увидь и нарисуй!</h3>
                                        <div class="border-rotate"></div>
                                        <div class="row blot-cont">
                                            <div class="blot blot-roll" id="blot">
                                                <figure class="can-blot blot-1"><img src="img/blot-1.svg" alt=""></figure>
                                                <figure class="can-blot blot-2"><img src="img/blot-2.svg" alt=""></figure>
                                                <figure class="can-blot blot-3"><img src="img/blot-3.svg" alt=""></figure>
                                                <figure class="can-blot blot-4"><img src="img/blot-4.svg" alt=""></figure>
                                                <figure class="can-blot blot-5"><img src="img/blot-5.svg" alt=""></figure>
                                            </div>
                                        </div>
                                        <div class="btn-cont">
                                            <p class="text-center">
                                                <a href="#" class="btn blots"><img src="img/blot.png" alt=""></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--div class="container">
        <div class="row">
            <div class="hidden-sm hidden-xs col-md-offset-3 col-md-6">
                <div id="vk_comments"></div>
                <script type="text/javascript">
                    VK.Widgets.Comments("vk_comments", {
                        limit: 10,
                        width: "585",
                        attach: "*"
                    });
                </script>
            </div>
        </div>
    </div-->
    <div class="popup-overlay"></div>
    <div class="collapse well" id="hist">
        <div class="pull-right clearfix">
            <button type="button" class="close" aria-label="Close" aria-hidden="true" data-toggle="collapse" data-target="#hist"><span aria-hidden="true"><span class="glyphicon glyphicon-remove-sign"></span></span>
            </button>
        </div>
        <div class="col-md-12 h_inside">
            <div class="row">
                <div class="col-md-4">
                    <h2>Что это и зачем оно нужно?</h2>
                    <p>Руклес - это твой индивидуальный помощник, но не такой как Siri или Cortana, он не умеет прятать трупы или искать в гугле за тебя. Руклес считает, что гуглить ты и сам уже научился, поэтому он помогает придумать тебе классных персонажей.</p>
                </div>
                <div class="col-md-4">
                    <h2>Как мне придумать персонажа и зачем?</h2>
                    <p>Рассмотрим ситуацию, когда ты захотел выдумать персонажа, но как он будет выглядеть, ты плохо представляешь, идеи кончились, и тут на помощь приходит Руклес! Ты просто нажимаешь одну из наших красивых, приятных, оранжевых кнопок и Руклес придумывает персонажа за тебя.</p>
                </div>
                <div class="col-md-4">
                    <h2>Кому может помочь Руклес?</h2>
                    <p>Всем, будь ты мамой, придумывающей истории для своих детей или очень серьезный писатель в очках и с усами, комиксист или просто художник-иллюстратор, всем подойдет. В том или ином случае ты современный алхимик, раз тебе понадобилась поваренная книга эпических рецептов современного алхимика.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <h2>Но Руклес выдумывает несерьезных персонажей!</h2>
                    <p>Мы считаем, что любой персонаж (даже <span class="inhelp">Наивный крысолюд-сиделка, великан</span>) имеет право найти свое место в каком-нибудь из придуманных (или еще не придуманных) миров. К тому же Руклес легко настраивается под любой вкус, для этого мы разделили настройки Руклеса на разные характеристики, типы и жанры. А еще сделали <a href="/#blots" aria-controls="blots" data-toggle="tab" aria-expanded="true">Пятновыводитель</a>, в нем ты можешь увидеть все что угодно!</p>
                </div>
                <div class="col-md-4">
                    <h2>Что мне делать с полученным результатом?</h2>
                    <p>Все что захочешь, это теперь твое и будет жить у тебя, ты можешь пускать это в крутые приключения своих историй или убить в первом же акте, наплодить кучу новых и их всех поубивать. Потом сделать еще и опять убить, или просто выдумывать и рисовать, делиться, рисовать и снова выдумывать, а потом опять рисовать... и делиться.</p>
                    <p>Когда тебя нет, Руклес продолжает выдумывать персонажей, но использовать их некому, поэтому они уходят в темный мир забытых персонажей.</p>
                </div>
                <div class="col-md-4">
                    <h2>Есть ли какие-нибудь условия или ограничения использования полученного персонажа?</h2>
                    <p>Нет, ты можешь взять все условия и придумать из них персонажа, или взять только несколько, а ненужные/неинтересные отбросить. Мы также считаем, что если Руклес подобрал для твоего персонажа две взаимоисключающие характеристики, то с этим тоже можно что-нибудь придумать. Это даже интересней.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <h2>Руклес умеет выдумывать только персонажей? Мне нужен целый мир!</h2>
                    <p>На данный момент Руклес придумывает только персонажей и выдумывает пятна, по которым можно рисовать персонажей, но со временем он сможет выдумывать миры, и возможно целые истории.</p>
                    <p>Чтоб как-то ускорить процесс, рассказывайте о Руклесе друзьям и в соц.сетях ставьте хэш-тег <a href="https://vk.com/feed?q=%23rukles&section=search" target="_blank">#rukles</a> и мы обязательно узнаем об этом. Ну а еще внизу есть кнопочки поделиться, делитесь, мы любим это.</p>
                </div>
                <div class="col-md-4">
                    <h2>Ваш Руклес оскорбляет мои религиозные/нравственные/моральные/любые другие чувства!</h2>
                    <p>К счатью, Руклес не умеет никого оскорблять, он использует уже придуманные, кем-то другим, возможно, для кого-то обидные слова, которые и дальше будут существовать вне зависимости от развития Руклеса.</p>
                    <p>А если вас обидело одно из наших пятен, знайте это всего лишь пятно, не обязательно, что другие видят в них то же, что и вы, даже если это кажется очевидным.</p>
                </div>
                <div class="col-md-4">
                    <h2>Руклес не заставит скучать</h2>
                    <p>На данный момент Руклес может придумать <span class="howmuch"></span> персонажей</p>
                </div>
            </div>
        </div>
        <div class="col-md-12 h_inside">
            <div class="row">
                <div class="col-md-12">
                    <h2>Количество используемых характеристик</h2>
                </div>
                <div class="col-md-4">форма - <span class="forow"></span></div>
                <div class="col-md-4">раса - <span class="trow"></span></div>
                <div class="col-md-4">профессия - <span class="srow"></span></div>
            </div>
            <p class="text-center"><span class="pseudo-link" data-toggle="collapse" data-target="#hist">Спасибо, я все понял, закройте справочку.</span></p>
        </div>
    </div>
    <div class="absolute-settings col-md-6 col-xs-12 clearfix">
        <div class="lines col-md-11 col-xs-9" id="settings">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="half-set">
                            <div class="col-md-6">
                                <h3>Выбрать набор</h3>
                                <ul class="unstyled sortby filters">
                                    <li class="start active">Начальный набор</li>
                                    <li class="fy">Фэнтези</li>
                                    <li class="rl">Реализм</li>
                                    <li class="fk">Фантастика</li>
                                    <li class="hr">Ужастики</li>
                                    <li class="wow">Вселенная Warcraft</li>
                                    <li class="sw">Звездные Войны</li>
                                    <li class="all">Все</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h3>Количество результатов за одну генерацию</h3>
                                <p>От 1 до 100</p>
                                <input type="number" class="howTime" value="1" min="1" max="100">
                            </div>
                            <p class="col-md-12 text-center"><span class="pseudo-link" data-toggle="collapse" data-target="#advance">Показать целую кучу других настроек?</span></p>
                        </div>
                        <div class="second-set collapse col-md-12" id="advance">
                            <div class="row setup-inputs">
                                <div class="col-md-4">
                                    <h4><input type="checkbox" id="bd" class="sel-row" value="" checked /> <label for="bd">Форма <span class="badge forow"></span></label></h4>
                                    <ul class="body list-unstyled">
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <h4><input type="checkbox" id="tp" class="sel-row" value="" checked /> <label for="tp">Раса <span class="badge trow"></span></label></h4>
                                    <ul class="type race list-unstyled">
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <h4><input type="checkbox" id="ps" class="sel-row" value="" checked /> <label for="ps">Профессия <span class="badge srow"></span></label></h4>
                                    <ul class="position list-unstyled">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="show_settings col-md-1 col-xs-3"><span class="glyphicon glyphicon-cog setup"></span></div>
    </div>

    <div class="tutorial hidden-xs">
        <div class="tut a">
            <div>
                <figure></figure>
            </div>
            <div>
                <p>Привет! Меня зовут Руклес и я лис - помощник современных алхимиков. Давай я расскажу тебе, что тут где и как оно работает.</p>
                <p><a href="#" class="pseudo-link pull-left next-tut">Удиви меня</a> <a href="#" class="pseudo-link pull-right close-tut">Нет, спасибо</a></p>
            </div>
        </div>
        <div class="tut b">
            <div>
                <figure></figure>
            </div>
            <div>
                <p>Нажав на вопросик справа от логотипа, можно почитать возможности Руклеса</p>
                <p><a href="#" class="pseudo-link pull-left next-tut">Давай дальше</a> <a href="#" class="pseudo-link pull-right close-tut">Мне надоело</a></p>
            </div>
        </div>
        <div class="tut c">
            <div>
                <figure></figure>
            </div>
            <div>
                <p>Если нажать на шестеренку, вылезет куча настроек, там можно что-то выбрать, что-то добавить в выборку</p>
                <p><a href="#" class="pseudo-link pull-left next-tut">Угу</a> <a href="#" class="pseudo-link pull-right close-tut">Завязывай</a></p>
            </div>
        </div>
        <div class="tut d">
            <div>
                <figure></figure>
            </div>
            <div>
                <p>Тут происходит вся основная движуха, жмешь внизу кнопочку, вверху получаешь результат, и рисуешь где-нибудь у себя, где тебе будет удобно.</p>
                <p><a href="#" class="pseudo-link pull-left next-tut">И все?</a> <a href="#" class="pseudo-link pull-right close-tut">Да и так понятно</a></p>
            </div>
        </div>
        <div class="tut e">
            <div>
                <figure></figure>
            </div>
            <div>
                <p>А еще у нас есть Пятновыводитель, там пятно, в нем можно увидеть всякое, а потом сделать скриншот и обрисовать свое увиденное в каком-нибудь пэинте. Круто же?</p>
                <p><a href="#" class="pseudo-link pull-left last close-tut">Круто, я все понял</a></p>
            </div>
        </div>
    </div>
	<?php require_once('footer_test.php'); ?>
</body>
</html>