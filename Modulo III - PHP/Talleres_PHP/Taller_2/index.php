<?php
    session_start();
    if(isset($_SESSION['visitas'])){
        $_SESSION['visitas']=$_SESSION['visitas']+1;
    }
    else{
        $_SESSION['visitas']=1;
    }
?>
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
        <div class="container-fluid bg-dark text-white">
            <h1 align="center"> CRUD de personas</h1>
            <div class="row alert alert-success" align="center">
                <div class="col">
                    <a class="btn btn-info btn-lg btn-block" style="margin-bottom: 1vw; margin-top: 1vw;" href="administradorView.php">Administrar Personas</a>
                </div>
                <div class="col">
                    <a class="btn btn-info btn-lg btn-block" style="margin-bottom: 1vw; margin-top: 1vw;" href="login.php">Login</a>
                </div>
                <div class="col">
                    <a class="btn btn-info btn-lg btn-block" style="margin-bottom: 1vw; margin-top: 1vw;" href="mostrarVisitas.php">Visitas</a>
                </div>
            </div>
        </div>
    </body>
</html>