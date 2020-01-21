<!DOCTYPE HTML>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="estilo.css">
		<title>Mensagens divertidas</title>
	</head>

	<body>
		<?php
			$mensagens_divertidas[1] = 'Frase 1';
			$mensagens_divertidas[2] = 'Frase 2';
			$mensagens_divertidas[3] = 'Frase 3';
			$mensagens_divertidas[4] = 'Frase 4';
			$mensagens_divertidas[5] = 'Frase 5';
		

			var_dump($mensagens_divertidas);
			echo "<br />";
			echo "<br />";
			print_r($mensagens_divertidas);
		?>
	</body>
</html>