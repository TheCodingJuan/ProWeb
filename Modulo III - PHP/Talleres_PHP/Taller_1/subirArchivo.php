<html>
	<head>
	<meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	</head>
	<body>
	<?php
		$str_pagina = "";
		if ($_FILES["arch"]["error"] > 0){
			$str_pagina.="Error: " . $_FILES["arch"]["error"] . "<br>";
		}
		else  {
			$str_pagina.= "Nombre: " . $_FILES["arch"] ["name"] . "<br>";
			$str_pagina.= "Tipo: " . $_FILES["arch"]["type"] . "<br>";
			$str_pagina.= "Tamaño: " . ($_FILES["arch"]["size"] / 1024) . " kB<br>";
			$str_pagina.= "Guardado en: " . $_FILES["arch"]["tmp_name"];
		}
		echo $str_pagina;
			if (!file_exists('subidos/')) {
			mkdir('subidos/',0777,true);
			}
			move_uploaded_file($_FILES["arch"]["tmp_name"],"subidos/".$_FILES["arch"]["name"]);
			echo "Guardado en: " . "subidos/" . $_FILES["arch"]["name"];

			echo "<br>";
			echo "<a href=\"gestor.php\">Regresar</a>";
	?>
	</body>
</html>