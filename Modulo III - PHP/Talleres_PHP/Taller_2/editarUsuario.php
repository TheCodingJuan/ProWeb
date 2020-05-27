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
        <h1 align="center">Editar Rol / Eliminar Perfil</h1>
            <?php

                include_once dirname(__FILE__) . '/config.php';

                $con = mysqli_connect(HOST_DB, USUARIO_DB, USUARIO_PASS, NOMBRE_DB);
                if (mysqli_connect_errno()) {
                    echo "Error en la conexión: " . mysqli_connect_error();
                }

                $cedula = $_GET['cc'];

                $sqlPersona = "SELECT * FROM Personas WHERE Cedula = \"$cedula\" ";
                $sqlUser = "SELECT * FROM Usuarios WHERE Cedula = \"$cedula\"";
                $respuestaP = mysqli_query($con, $sqlPersona);
                $filaPersona = mysqli_fetch_array($respuestaP);
                $respuestaPU = mysqli_query($con, $sqlUser);
                $filaPersonaU = mysqli_fetch_array($respuestaPU);

                $nombreU = $filaPersona['Nombre'];
                $apellidoU = $filaPersona['Apellido'];
                $cedulaU = $filaPersona['Cedula'];
                $emailU = $filaPersona['Correo'];
                $edadU = $filaPersona['Edad'];
                $rol = $filaPersonaU['rol'];

                $str_datos="";
                $str_datos .='<h2>Perfil del Usuario: '. $nombreU .'</h2>';
                $str_datos .='<form action=\'administrarPersonas.php\' method=\'post\'>';
                $str_datos .='<table class="table table-dark">';
                    $str_datos.='<thead class="thead-dark">';
                        $str_datos.='</tr>';
                            $str_datos.='<th scope="col">Cedula</th>';
                            $str_datos.='<th scope="col">Nombre</th>';
                            $str_datos.='<th scope="col">Apellido</th>';
                            $str_datos.='<th scope="col">Correo Electronico</th>';
                            $str_datos.='<th scope="col">Edad</th>';
                            $str_datos.='<th scope="col">Rol</th>';
                        $str_datos.='</tr>';
                    $str_datos.='</thead>';
                    $str_datos.='<tbody>';
                        $str_datos.='<tr>';
                $str_datos .= '<td><input type="text" name="Nombre" readonly value='.$nombreU.'></td>';
                $str_datos .= '<td><input type="text" name="Apellido" readonly value='.$apellidoU.'></td>';
                $str_datos .= '<td><input type="number" name="Cedula" readonly value='.$cedulaU.'></td>';
                $str_datos .= '<td><input type="email" readonly name="CorreoElectronico" value='.$emailU.'></td>';
                $str_datos .= '<td><input type="number" name="Edad" readonly value='.$edadU.'></td>';


                if($rol == 'usuario'){
                    $str_datos.='<td><input name="Rol" type="radio" value="usuario" checked="checked"/>Usuario</td>';
                    $str_datos.='<td><input name="Rol" type="radio" value="admin" />Admin</td>';
                }else if($rol == 'admin'){
                    $str_datos.='<td><input name="Rol" type="radio" value="usuario" />Usuario</td>';
                    $str_datos.='<td><input name="Rol" type="radio" value="admin" checked="checked"/>Admin</td>';
                }

                $str_datos.='</tr>';
                $str_datos.='</table>';
                $str_datos.='<button class=\"btn btn-success\" type="submit" value=\'Guardar\' name=\'editarusuario\'>Guardar</button>';
                $str_datos.='<button class=\"btn btn-warning\" type="submit" value=\'Eliminar\' name=\'eliminarusuario\'>Eliminar</button>';
                $str_datos.='</form>';
                echo $str_datos;

                echo "<br>";
                echo "<br>";
                echo "<a class=\"btn btn-info\" href=\"index.php\">Regresar a Inicio</a>";

            ?>
        </div>
    </body>
</html>