<?php
    session_start();
    if(isset($_SESSION['visitas'])){
        $_SESSION['visitas']=$_SESSION['visitas']+1;
    }
    else{
        $_SESSION['visitas']=1;
    }
?>
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
            <div class="row">
                <?php
                    include_once dirname(__FILE__) . '/config.php';

                    $con = mysqli_connect(HOST_DB, USUARIO_DB, USUARIO_PASS, NOMBRE_DB);
                    if (mysqli_connect_errno()) {
                        echo "Error en la conexión: " . mysqli_connect_error();
                    }

                    if(isset($_POST['guardarusuario'])){

                        $_SESSION['name'] = $_POST['Nombre'];
                        $_SESSION['contr'] = $_POST['Contrasena'];
                        $_SESSION['cc'] = $_POST['Cedula'];

                        $cedula = $_POST['Cedula'];
                        $nombreUsuario = $_POST['NombreUsuario'];
                        $password = $_POST['contrasena'];
            
                        $verify = "SELECT * FROM Personas WHERE Cedula = \"$cedula\" ";
                        $result1 = mysqli_query($con, $verify);
                        $verifyExists = mysqli_num_rows($result1);

                        if($_POST['Cedula'] != '' && $_POST['NombreUsuario'] != '' && $_POST['contrasena']){
                            $_SESSION['name'] = '';
                            $_SESSION['contr'] = '';
                            $_SESSION['cc'] = '';

                            if($verifyExists > 0){
                                $verify2 = "SELECT * FROM Usuarios WHERE nombreusuario = \"$nombreUsuario\"";
                                $result2 = mysqli_query($con,$verify2);
                                $verifyUserName = mysqli_num_rows($result2);

                                if($verifyUserName > 0){
                                    echo "<h1>Ya existe ese nombre de usuario</h1>";
                                } 
                                else{
                                    $verify3 = "SELECT * FROM Usuarios";
                                    $result3 = mysqli_query($con,$verify3);
                                    $verifyRol = mysqli_num_rows($result3);
                                    $userRol = "usuario";

                                    if($verifyRol == 0){
                                        $userRol = "admin";
                                    }
                                    if (CRYPT_SHA512 == 1){
                                        $hash = crypt($password, '$6$rounds=5000$unsaltcheveredeejemplo$');
                                    }else{
                                        echo "SHA-512 no esta soportado.";
                                    }
                                    
                                    $sql = "INSERT INTO Usuarios (Cedula, NombreUsuario, Contrasena, Rol) VALUES (\"$cedula\", \"$nombreUsuario\", \"$hash\", \"$userRol\")";
                                    if(mysqli_query($con,$sql)){
                                        echo "<h1>Usuario creado Exitosamente</h1>";
                                    }
                                }
                            }
                            else{
                                echo "<h1>No existe ese usuario en la tabla Personas</h1>";
                            }

                            echo "<br>";
                            echo "<a class=\"btn btn-info\" href=\"administradorView.php\">Regresar</a>";
                        }
                        else{
                            header ("Location: administradorView.php");
                        }
                    }

                    if(isset($_POST['eliminarusuario'])){

                        $cedula = $_POST['Cedula'];
                    
                        $sql = "DELETE FROM Usuarios WHERE Cedula = \"$cedula\"";
                        if(mysqli_query($con, $sql)){
                            echo "Usuario eliminado";
                        }
                        else{
                            echo "Error";
                        }
                    
                        echo "<br>";
                        echo "<a class=\"btn btn-info\" href=\"index.php\">Regresar a Inicio</a>";
                    
                    }

                    if(isset($_POST['editarusuario'])){

                        $cedula = $_POST['Cedula'];
                        $rol = $_POST['Rol'];
                    
                        $sql = "UPDATE Usuarios set 
                                Rol = \"$rol\" 
                                WHERE Cedula = \"$cedula\"";
                    
                        if(mysqli_query($con, $sql)){
                            echo "Rol del usuario actualizado";
                        }
                    
                        echo "<br>";
                        echo "<a class=\"btn btn-info\" href=\"index.php\">Regresar a Inicio</a>";
                    }
                    

                    if (isset($_POST['guardar'])) {

                        $_SESSION['c'] = $_POST['Cedula'];
                        $_SESSION['n'] = $_POST['Nombre'];
                        $_SESSION['a'] = $_POST['Apellido'];
                        $_SESSION['ce'] = $_POST['Correo'];
                        $_SESSION['e'] = $_POST['Edad'];

                        $nuevaPersona = array (
                            "Cedula" => $_POST['Cedula'],
                            "Nombre" => $_POST['Nombre'],
                            "Apellido" => $_POST['Apellido'],
                            "Correo" => $_POST['Correo'],
                            "Edad" => $_POST['Edad']
                        );
                    
                        $sql = "INSERT INTO Personas (Cedula, Nombre, Apellido, Correo, Edad) VALUES (\"$nuevaPersona[Cedula]\",
                                                        \"$nuevaPersona[Nombre]\", \"$nuevaPersona[Apellido]\",
                                                        \"$nuevaPersona[Correo]\", $nuevaPersona[Edad])";
                        if(mysqli_query($con, $sql)){
                            $_SESSION['c'] = '';
                            $_SESSION['n'] = '';
                            $_SESSION['a'] = '';
                            $_SESSION['ce'] = '';
                            $_SESSION['e'] = '';
                            echo "<h1>CREADO</h1>";
                        }
                        else{
                            if(mysqli_error($con) == "Duplicate entry '$nuevaPersona[Cedula]' for key 'PRIMARY'"){
                                $sql = "UPDATE Personas SET 
                                        Cedula = \"$nuevaPersona[Cedula]\", 
                                        Nombre = \"$nuevaPersona[Nombre]\", 
                                        Apellido = \"$nuevaPersona[Apellido]\", 
                                        Correo = \"$nuevaPersona[Correo]\", 
                                        Edad = $nuevaPersona[Edad]
                                        WHERE Cedula = \"$nuevaPersona[Cedula]\"";
                                if(mysqli_query($con, $sql)){
                                    echo "ACTUALIZADO";
                                }
                            }
                        }
                        echo "<br>";
                        echo "<a class=\"btn btn-info\" href=\"administradorView.php\">Regresar</a>";
                    }
                    else if(isset($_POST['borrar'])) {

                        $_SESSION['c'] = $_POST['Cedula'];
                        $_SESSION['n'] = $_POST['Nombre'];
                        $_SESSION['a'] = $_POST['Apellido'];
                        $_SESSION['ce'] = $_POST['Correo'];
                        $_SESSION['e'] = $_POST['Edad'];
                    
                        $cedula = $_POST['Cedula'];
                    
                        $sql = "DELETE FROM Personas WHERE Cedula = \"$cedula\"";
                        if(mysqli_query($con, $sql)){
                            echo "<div class=\"alert alertr-danger\"><h1>BORRADO</h6></div>";
                        }
                        else{
                            echo "Error";
                        }
                    
                        echo "<br>";
                        echo "<a class=\"btn btn-info\" href=\"administradorView.php\">Regresar</a>";
                    }
                    else if(isset($_POST['ver'])) {

                        $parametros = array();
                    
                        foreach ($_POST as $key => $value) {
                            
                            array_push($parametros, $key);
                        }
                    
                    
                        if( $parametros[0] == 'Nombre'){
                            if( $parametros[1] == 'Ascendente'){
                                $sql = "SELECT * FROM Personas ORDER BY Nombre ASC";
                                $resultado = mysqli_query($con,$sql);
                            } else if($parametros[1] == 'Descendente'){
                                $sql = "SELECT * FROM Personas ORDER BY Nombre DESC";
                                $resultado = mysqli_query($con,$sql);
                            }else{
                                $sql = "SELECT * FROM Personas ";
                                $resultado = mysqli_query($con,$sql);
                            }
                        } else if($parametros[0] == 'Cedula'){
                            if( $parametros[1] == 'Ascendente'){
                                $sql = "SELECT * FROM Personas ORDER BY Cedula ASC";
                                $resultado = mysqli_query($con,$sql);
                            } else if($parametros[1] == 'Descendente'){
                                $sql = "SELECT * FROM Personas ORDER BY Cedula DESC";
                                $resultado = mysqli_query($con,$sql);
                            }else{
                                $sql = "SELECT * FROM Personas ";
                                $resultado = mysqli_query($con,$sql);
                            }
                        }else{
                            $sql = "SELECT * FROM Personas ";
                            $resultado = mysqli_query($con,$sql);
                        }
                    
                        $str_datos="";
                        $str_datos.='<h1 align="center">Lista de Personas</h1>';
                        $str_datos.='<br>';
                        $str_datos.='<br>';
                        $str_datos.='<table class="table">';
                            $str_datos.='<thead class="thead-dark">';
                                $str_datos.='<tr>';
                                    $str_datos.='<th scope="col">Cedula</th>';
                                    $str_datos.='<th scope="col">Nombre</th>';
                                    $str_datos.='<th scope="col">Apellido</th>';
                                    $str_datos.='<th scope="col">Correo Electronico</th>';
                                    $str_datos.='<th scope="col">Edad</th>';
                                $str_datos.='</tr>';
                                $str_datos.='</thead>';
                        
                        foreach ($resultado as $persona) {
                            $str_datos.='<tbody>';
                                $str_datos.='<tr>';
                                    $str_datos.='<td>'. $persona['Cedula'] . '</td>';
                                    $str_datos.='<td>'. $persona['Nombre'] . '</td>';
                                    $str_datos.='<td>'. $persona['Apellido'] . '</td>';
                                    $str_datos.='<td>'. $persona['Correo'] . '</td>';
                                    $str_datos.='<td>'. $persona['Edad'] . '</td>';
                                $str_datos.='</tr>';
                            $str_datos.='</tbody>';
                        }
                        $str_datos.='</table>';
                        $str_datos.='<br>';
                        
                        echo $str_datos;
                        echo "<br>";
                        echo "<a class=\"btn btn-info\" href=\"administradorView.php\">Regresar</a>";
                    }
                ?>
            </div>
        </div>

    </body>
</html>