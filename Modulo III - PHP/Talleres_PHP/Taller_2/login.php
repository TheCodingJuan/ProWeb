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
        <div class="container-fluid"  style="margin: 1vw">
            <h1>Iniciar Sesion</h1>
            <div class="row">
                <div class="col">
                    <form action="userLogin.php" method="post">
                        <div class="row form-group">
                            <label for="NombreUsuario" class="col-sm-2 col-form-label">Nombre Usuario</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" name="NombreUsuario" value="<?php if (isset($_SESSION['user'])){ echo $_SESSION['user']; } ?>">
                            </div>
                        </div>
                        <div class="row form-group">
                            <label for="contrasena" class="col-sm-2 col-form-label">Contraseña</label>
                            <div class="col-sm-4">
                                <input type="password" class="form-control" name="contrasena" value="<?php if (isset($_SESSION['pas'])){ echo $_SESSION['pas']; } ?>">
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-sm-6">
                                <button type="submit" class="btn btn-info btn-lg btn-block" name="log" value="log">Iniciar Sesion</button>   
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <a href="index.php" class="btn btn-info">Regresar</a>
            </div>
        </div>
    </body>
</html>