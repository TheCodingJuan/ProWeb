<!DOCTYPE html>
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
        session_start();
        if(isset($_SESSION['visitas'])){
            echo '<h3>Total visitas: '. $_SESSION['visitas'].'</h3>';
        unset($_SESSION['visitas']);
        }

        echo "<br>";
        echo "<a class=\"btn btn-info btn-lg\" style=\"margin-bottom: 1vw; margin-top: 1vw;\" href=\"index.php\">Ir a Inicio</a>";
    ?> 
    </body>
</html>