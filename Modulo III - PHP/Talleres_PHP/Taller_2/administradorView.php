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
        <div class="container-fluid">
            <div class="container-fluid alert alert-success" style="margin: 1vw">
                <h1>Agregar persona</h1>
                <form action="administrarPersonas.php" method='post'>
                    <div class="row form-group">
                        <label for="Nombre" class="col-sm-2 col-form-label">Nombre</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="Nombre" value="<?php if (isset($_SESSION['n'])){ echo $_SESSION['n']; } ?>" >
                        </div>
                    </div>

                    <div class="row form-group">
                        <label for="Apellido" class="col-sm-2 col-form-label">Apellido</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="Apellido" value="<?php if (isset($_SESSION['a'])){ echo $_SESSION['a']; } ?>">
                        </div>
                    </div>

                    <div class="row form-group">
                        <label for="Cedula" class="col-sm-2 col-form-label">Cedula</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" name="Cedula" value="<?php if (isset($_SESSION['c'])){ echo $_SESSION['c']; } ?>">
                        </div>
                    </div>

                    <div class="row form-group">
                        <label for="Edad" class="col-sm-2 col-form-label">Edad</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" name="Edad" value="<?php if (isset($_SESSION['e'])){ echo $_SESSION['e']; } ?>">
                        </div>
                    </div>

                    <div class="row form-group">
                        <label for="Correo" class="col-sm-2 col-form-label">Correo</label>
                        <div class="col-sm-4">
                            <input type="email" class="form-control" name="Correo" value="<?php if (isset($_SESSION['ce'])){ echo $_SESSION['ce']; } ?>">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm-6">
                            <button type="submit" class="btn btn-success btn-lg btn-block" name="guardar" value="Guardar">Guardar</button>   
                        </div>
                    </div>
                </form>
            </div>

            <div class="container-fluid alert alert-warning" style="margin: 1vw">
                <h1>Agregar Usuario</h1>
                <form action="administrarPersonas.php" method='post'>
                    <div class="row form-group">
                        <label for="NombreUsuario" class="col-sm-2 col-form-label">Nombre Usuario</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="NombreUsuario" value="<?php if (isset($_SESSION['name'])){ echo $_SESSION['name']; } ?>">
                        </div>
                    </div>

                    <div class="row form-group">
                        <label for="Cedula" class="col-sm-2 col-form-label">Cedula</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" name="Cedula" value="<?php if (isset($_SESSION['cc'])){ echo $_SESSION['cc']; } ?>">
                        </div>
                    </div>

                    <div class="row form-group">
                        <label for="contrasena" class="col-sm-2 col-form-label">Contraseña</label>
                        <div class="col-sm-4">
                            <input type="password" class="form-control" name="contrasena" value="<?php if (isset($_SESSION['contr'])){ echo $_SESSION['contr']; } ?>">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm-6">
                            <button type="submit" class="btn btn-warning btn-lg btn-block" name="guardarusuario" value="GuardarUsuario">Guardar</button>   
                        </div>
                    </div>
                </form>
            </div>

            <div class="container-fluid alert alert-info" style="margin: 1vw">
                <h1>Elija como ver la lista de personas</h1>
                <form action='administrarPersonas.php' method='post'>
                    <h3>Ordenados por</h3>
                    <div class="row form-group">
                        <div class="col-sm-3">
                            <input type="checkbox" class="form-check-input" name="Cedula">
                            <label class="form-check-label" for="defaultCheck1">
                                Cedula
                            </label>
                        </div>
                        <div class="col-sm-3">
                            <input type="checkbox" class="form-check-input" name="Nombre">
                            <label class="form-check-label" for="defaultCheck1">
                                Nombre
                            </label>
                        </div>
                    </div>
                    <h3>De forma:</h3>
                    <div class="row form-group">
                        <div class="col-sm-3">
                            <input type="checkbox" class="form-check-input" name="Ascendente">
                            <label class="form-check-label" for="defaultCheck1">
                                Ascendente
                            </label>
                        </div>
                        <div class="col-sm-3">
                            <input type="checkbox" class="form-check-input" name="Descendente">
                            <label class="form-check-label" for="defaultCheck1">
                                Descendente
                            </label>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm-6">
                            <button type="submit" class="btn btn-primary btn-lg btn-block" name='ver' value='Ver Personas'>Ver Personas</button>
                        </div>
                    </div>
                </form>
                
                <br>
                <a href="index.php" class="btn btn-info">Regresar</a>

            </div>
        </div>
    </body>
</html>