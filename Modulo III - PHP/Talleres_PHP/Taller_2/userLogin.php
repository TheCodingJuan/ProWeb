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
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <?php
                include_once dirname(__FILE__) . '/config.php';

                $con = mysqli_connect(HOST_DB, USUARIO_DB, USUARIO_PASS, NOMBRE_DB);
                if (mysqli_connect_errno()) {
                    echo "Error en la conexión: " . mysqli_connect_error();
                }

                $_SESSION['user'] = $_POST['NombreUsuario'];
                $_SESSION['pas'] = $_POST['contrasena'];

                $nombreUsuario = $_POST['NombreUsuario'];
                $contrasena = $_POST['contrasena'];
                
                $verify = "SELECT * FROM Usuarios WHERE NombreUsuario = \"$nombreUsuario\" ";
                $result = mysqli_query($con,$verify);
                $verifyUserName = mysqli_num_rows($result);

                if($_POST['NombreUsuario'] != '' && $_POST['contrasena'] != ''){
                    if($verifyUserName > 0){
                        $fila = mysqli_fetch_array($result);
                        $rol = $fila['rol'];
                        $hash = $fila['contrasena'];
                        $cedula = $fila['cedula'];

                        if(hash_equals($hash,crypt($contrasena,$hash))){
                            $_SESSION['user'] = '';
                            $_SESSION['pas'] = '';

                            if($rol == 'usuario'){
                                echo "<h1 align = \"center\">Mi Pefil : $nombreUsuario</h1>";

                                $sql = "SELECT * FROM Personas WHERE Cedula = \"$cedula\" ";

                                $query2 = mysqli_query($con, $sql);
                                $fila2 = mysqli_fetch_array($query2);
                                $nombre = $fila2['Nombre'];
                                $apellido = $fila2['Apellido'];
                                $correo = $fila2['Correo'];
                                $edad = $fila2['Edad'];
        
                                $str = "";
                                $str .= "<div class = \"container\">";
                                    $str .="<div class = \"row\">";

                                        $str .= "<div class = \"col\">";
                                            $str .= "<label>Cedula</label>";
                                            $str .= "<p> $cedula </p>";
                                        $str .= "</div>";

                                        $str .= "<div class = \"col\">";
                                            $str .= '<label>Nombre</label>';
                                            $str .= "<p> $nombre </p>";
                                        $str .= "</div>";

                                        $str .= "<div class = \"col\">";
                                            $str .= '<label>Apellido</label>';
                                            $str .= "<p> $apellido </p>";
                                        $str .= "</div>";

                                        $str .= "<div class = \"col\">";
                                            $str .= '<label>Correo</label>';
                                            $str .= "<p> $correo </p>";
                                        $str .= "</div>";

                                        $str .= "<div class = \"col\">";
                                            $str .= '<label>Edad</label>';
                                            $str .= "<p> $nombre </p>";
                                        $str .= "</div>";

                                        $str .= "<div class = \"col\">";
                                            $str .= '<label>Rol</label>';
                                            $str .= "<p> $rol </p>";
                                        $str .= "</div>";

                                    $str .= "</div>";
                                $str .= "</div>";
                                        

                                echo $str;

                            }

                            if($rol == "admin"){
                                $queryPersonas = "SELECT * FROM Usuarios WHERE Rol = \"usuario\" ";
                                $resultPersonas = mysqli_query($con,$queryPersonas);

                                echo "<h1 align = \"center\">Administrador : $nombreUsuario</h1>"; 

                                $strDatos = "";
                                $strDatos .= "<h2> Lista de usuarios</h2>"; 
                                $strDatos.='<table class="table">';
                                    $strDatos.='<thead class="thead-dark">';
                                        $strDatos.='<tr>';
                                            $strDatos.='<th scope="col">Nombre de Usuario</th>';
                                        $strDatos.='</tr>';
                                    $strDatos.='</thead>';

                                    foreach($resultPersonas as $persona){
                                        $strDatos.='<tbody>';
                                            $strDatos.='<tr>';
                                                $strDatos.='<td><a href=\'editarUsuario.php?cc='.$persona['cedula'].'\'>'. $persona['nombreusuario'] . '</a></td>';
                                            $strDatos.='</tr>';
                                        $strDatos.='</tbody>';
                                    }
                                $strDatos .= "</table>";
                                $strDatos .= "<br>";

                                echo $strDatos;
                            }
                            echo "<br>";
                            echo "<a class=\"btn btn-info\" href=\"login.php\">Cerrar sesion</a>";
                        }
                        else{
                            echo '<h1>Contraseña incorrecta</h1>';

                            echo "<br>";
                            echo "<a class=\"btn btn-info\" href=\"login.php\">Cerrar sesion</a>";
                        }
                    }
                    else{
                        echo "<h1>No existe el usuario</h1>";

                        echo "<br>";
                        echo "<a class=\"btn btn-info\" href=\"login.php\">Cerrar sesion</a>";
                    }
                } 
                else{
                    header ("Location: login.php");
                }
            ?>
        </div>
    </body>
</html>