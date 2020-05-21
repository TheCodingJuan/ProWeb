<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <title>Subir Archivo</title>
        <meta charset="UTF-8">
        <style type="text/css">
        body,html{
        height:100%; 
        }
        #inferior{
        position:absolute; 
        left:0px; 
        right:0px; 
        bottom:0px; 
        text-align: center;
        }
</style>
    </head>
<body>
    <div class="container-fluid" align="center">
        <div class="row">
            <div class="col">
                <form action="subirArchivo.php" method="post" enctype="multipart/form-data">
                    <label for="arch">Nombre:</label>
                    <input type="file" name="arch" id="arch"><br>
                    <button class="btn btn-info" type="submit" name="submit" value="Enviar">Enviar</button>
                </form>
            </div>
        </div>
        <div class="row">
            <?php $date = date('m/d/Y g:ia');?>
        </div>
        <div class="row">
            <div class="alert alert-success" id="inferior">
                <h3><?php echo $date ?></h3>
            </div>
        </div>
        <div class="row" style="margin: 1vw">
            <?php
                crear_imagen();
                echo "<img src=imagen.png?".date("U").">";

                function  crear_imagen(){

                    srand(mktime());

                    $t1 = rand(150,300);
                    $t2 = rand(150,300);
                    $im = imagecreate($t1, $t2) or die("Error en la creacion de imagenes");

                    $c1 = rand(0,255);
                    $c2 = rand(0,255);

                    $color_fondo = imagecolorallocate($im, $c1, $c2, 0);   

                    $c3 = rand(0,255);
                    $c4 = rand(0,255);

                    $rojo = imagecolorallocate($im, $c3, 0, 0);                 
                    $azul = imagecolorallocate($im, 0, 0, $c4);               
                    imagerectangle ($im,   5,  10, 195, 50, $rojo); 
                    imagefilledrectangle ($im,   5,  100, 195, 140, $azul); 

                    imagepng($im,"imagen.png");
                    imagedestroy($im);
            }
            ?>
        </div>
        <div class="row" style="margin: 1vw">
            <a class="btn btn-info" href="index.php">Regresar</a>
        </div>
</body>
    </div>
</html>