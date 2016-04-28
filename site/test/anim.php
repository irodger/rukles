<?php 
	ini_set('display_errors',1);
	error_reporting(E_ALL);

	if (isset($_COOKIE['ruklesSet'])) {
		$setAllow = true;
	} else {
		$setAllow = false;
	}
	$url = $_SERVER['QUERY_STRING'];
	if ($url != NULL || $url != "") {
		parse_str($url, $result);
		$set = $result['set'];

		if ($set == "1" && !$setAllow) {
			//Вешаем куку для секретного урла
			setcookie("ruklesSet", "OMG_ARE_YOU_AN_ADMIN", time()+31556926);
		}
	} else {
		$set = "";
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Руклес - Создание персонажа за один клик онлайн"/>
	<title>RUKLES - Поваренная книга эпических рецептов для современных алхимиков</title>
	<link href="css/bootstrap.min.css" rel="stylesheet" />
	<link rel="stylesheet" href="css/social-likes_flat.css" />
	<link rel="stylesheet" href="css/style.css" />
	<link href='https://fonts.googleapis.com/css?family=Neucha&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
	<style>
	.block-block {
		position: relative;
	}
	#block {
		position: absolute;
	}
	#block .obj {
		position: relative;
	}
	.ob-1 {
		background:url('img/lookit.png') no-repeat;
		width:110px;
		height: 71px;
		transform: translate(-75px,-280px) rotate(180deg);
		transition: all .6s .4s ease-in-out;
	}
	.ob-2 {
		background:url('img/lookit.png') no-repeat;
		width:110px;
		height: 71px;
		transform: translate(195px,-420px);
		transition: all .4s .2s ease-in-out;
	}
	.ob-3 {
		background:url('img/small-dot.png') no-repeat;
		width: 16px;
		height: 16px;
		transform: translate(25px,-200px);
		transition: all .6s .4s ease-in-out;
	}
	.ob-4 {
		background:url('img/small-dot.png') no-repeat;
		width: 16px;
		height: 16px;
		transform: translate(135px,-260px);
		transition: all 1.2s .2s ease-in-out;
	}
	.ob-5 {
		background:url('img/small-dot.png') no-repeat;
		width: 16px;
		height: 16px;
		transform: translate(190px,-310px);
		transition: all .4s .2s ease-in-out;
	}
	.ob-6 {
		background:url('img/red-circle.png') no-repeat;
		width: 129px;
		height: 129px;
		transform: translate(80px, -170px);
		transition: all .3s 1.5s ease-in-out;
	}
	.ob-7 {
		background:url('img/blue-block.png') no-repeat;
		width: 300px;
		height:150px;
		transition: all .4s ease-in-out;
	}
	.ob-8 {
		transform: translate(255px,-90px);
		transition: all .2s ease-in-out;
	}
	.ob-9 {
		transform: translate(-75px,210px);
		transition: all .6s .4s ease-in-out;
	}
	.ring {
		width: 150px;
		height: 150px;
		background: url('img/ring.png') no-repeat;
		transform: translate(10px,0px);
		transition: all 2s .4s linear;
	}
	.ring.anims {
		transform: translate(10px,0px);
		-webkit-animation: rollRing 1s infinite linear;
		animation: rollRing 1s infinite linear;
		z-index: 1000;
	}
	@keyframes rollRing {
		from{
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);	
		}
	}
	@-webkit-keyframes rollRing {
		from{
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);	
		}
	}
	.ob-6.anims {
		transform: translate(80px, -225px);
		transition: all .6s .4s ease-in-out;
	}
	.ob-1,.ob-2,.ob-3,.ob-4,.ob-5,.ob-8,.ob-9,.ring  {
		opacity: 0;
	}
	.ob-1.anims,.ob-2.anims,.ob-3.anims,.ob-4.anims,.ob-5.anims,.ob-8.anims,.ob-9.anims,.ring.anims  {
		opacity: 1;
	}
	</style>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div style="height:1000px; background:#333;">
					<h1 class="text-center" style="color:#fff;margin-top:0;padding-top:100px;">Листай вниз бро!</h1>
					<div class="text-center"><a href="#block" class="goto-link glyphicon glyphicon-arrow-down" style="color:#fff;font-size:3em;padding-top:50px;"></a></div>
				</div>
			</div>
		<div class="row">
			<div class="col-md-12">
				<div style="height:1000px; background:#fff;">
					
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12" style="height:1000px;">
				<div class="block-block">
					<div id="block">
						<div class="obj ring"></div>
						<div class="obj ob-9">Текст</div>
						<div class="obj ob-8">Текст</div>
						<div class="obj ob-7"></div>
						<div class="obj ob-6"></div>
						<div class="obj ob-5"></div>
						<div class="obj ob-4"></div>
						<div class="obj ob-3"></div>
						<div class="obj ob-2"></div>
						<div class="obj ob-1"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div style="height:1000px; background:#ccc;">
					
				</div>
			</div>
		</div>
	</div>
	<?php require_once('footer.php'); ?>
	<script>
		$(document).ready(function() {
		    $("a.goto-link").on('click', function (e) { 
		    	e.preventDefault();
		      	var elementClick = $(this).attr("href");
		      	var destination = $(elementClick).offset().top;

		      	$('html,body').animate( { scrollTop: destination-500 }, 1100 );
		      	return false;
		    });
		  });
		$(window).scroll(function(){
        var objects = $('.obj'),
            scroll = $(window).scrollTop();

        if (scroll >= 1400) {
            objects.addClass('anims');
        } else {
            objects.removeClass('anims');
        }
    });
	</script>
</body>
</html>