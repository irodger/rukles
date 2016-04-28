<footer class="container">
	<div class="row">
		<p class="text-center clearfix">&copy 2015 <a href="/" target="_blank">iRodger</a> & <a href="http://maksimenkogalina.tumblr.com/" target="_blank">Ga Mak</a>. 
		<?php if ( $set == "1" || $setAllow ) { ?><span class="pseudo-link" data-toggle="collapse" data-target="#ver"><?php } ?>Ver 0.3.2<?php if ( $set == "1" || $setAllow ) { ?></span><?php } ?></p>
		<div class="text-center">
			<div class="social-likes">
				<div class="facebook" title="Поделиться ссылкой на Фейсбуке">Facebook</div>
				<div class="twitter" data-via="merryrodger" data-related="Rodger" title="Поделиться ссылкой в Твиттере">Twitter</div>
				<div class="vkontakte" title="Поделиться ссылкой во Вконтакте">Вконтакте</div>
				<div class="odnoklassniki" title="Поделиться ссылкой в Одноклассниках">Одноклассники</div>
			</div>
		</div>
		<?php if ( $set == "1" || $setAllow ) { ?>
		<div class="clearfix collapse well" id="ver">
			<div class="pull-right"><button type="button" class="close" aria-label="Close" aria-hidden="true" data-toggle="collapse" data-target="#ver"><span aria-hidden="true">&times;</span></div>
			<h5>ver 0.3.2</h5>
			<ul>
			<li>Добавлен функционал вывода описания и описание расам, теперь можно прочитать про расу, наведя на нее мышку.</li>
				<li>Простыня настроек была спрятана на один уровень дальше</li>
			</ul>
			<h5>ver 0.3.1</h5>
			<ul>
				<li>Добавлена возможность выводить несколько генераций одновременно, можно найти в настройках</li>
				<li>Проект сменил название, шрифт, текст, порядок блоков и вообще стал более приветливый</li>
			</ul>
			<h5>ver 0.3</h5>
			<ul>
				<li>Характеристики вынесены в отдельный файл</li>
				<li>Полностью переделан принцип настроек</li>
				<li>Уменьшена задержка генерации и задержка при повторном вызове генерации</li>
			</ul>
			<hr>
			<h5>ver 0.2.3</h5>
			<ul>
				<li>Добавлена анимация кнопки при нажатии</li>
				<li>Добавлена анимация текста при генерации</li>
				<li>Добавлена задержка генерации и задержка при повторном вызове генерации</li>
			</ul>
			<hr>
			<h5>ver 0.2.2</h5>
			<ul>
				<li>Добавлена генерация рандомного персонажа при загрузке страницы</li>
				<li>Добавлены расы из фэнтэзи</li>
				<li>Кнопка стала приятно нажиматься и на мобильных устройствах</li>
			</ul>
			<hr>
			<h5>ver 0.2.1</h5>
			<ul>
				<li>Добавлена возможность отметить и отменить выбор одного из ряда сразу</li>
				<li>Добавлены социальные кнопки, чтоб можно было поделиться</li>
			</ul>
			<hr>
			<h5>ver 0.2</h5>
			<ul>
				<li>Кнопка стала карамельного цвета, заметно приятнее и отзывчевей</li>
				<li>Рандомайзер учитывает отмеченные результаты и исходя из результата генерирует</li>
				<li>Добавлено 800+ характеристик</li>
				<li>Характеристики убраны в настройки</li>
			</ul>
			<hr>
			<h5>ver 0.1.2</h5>
			<ul>
				<li>Добавлены чекбоксы к характеристикам</li>
				<li>Добавлены тестовые фильтры</li>
				<li>Сменен порядок вывода характеристик для удобной читаемости</li>
			</ul>
			<hr>
			<h5>ver 0.1.1</h5>
			<ul>
				<li>Переделан рандомайзер, теперь он сам считает количество характеристик и из этого числа выберается произвольная</li>
				<li>Добавлен раздел F.A.Q.</li>
			</ul>
			<hr>
			<h5>ver 0.1</h5>
			<ul>
				<li>Добавлен фреймворк Twitter Bootsrap 3</li>
			</ul>
			<hr>
			<h5>ver 0.0.1</h5>
			<ul>
				<li>Добавлено 28 характеристик</li>
				<li>Создан алгоритм генерации персонажей</li>
				<li>Сделана большая кнопка</li>
			</ul>
		</div>
		<?php } ?>
	</div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/social-likes.min.js"></script>
<script src="js/scripts.js"></script>