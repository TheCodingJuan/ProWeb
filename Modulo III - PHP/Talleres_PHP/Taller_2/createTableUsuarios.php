<?php
    include_once dirname(__FILE__).'/config.php';
    
    $con = mysqli_connect(HOST_DB, USUARIO_DB, USUARIO_PASS, NOMBRE_DB);

    $sql = "CREATE TABLE Usuarios 
    (
        id  int AUTO_INCREMENT,
        cedula INT NOT NULL,
        nombreusuario VARCHAR(255),
        PRIMARY KEY(id),
        rol VARCHAR(255),
        contrasena VARCHAR(255),
        FOREIGN KEY (Cedula) references personas (cedula)
    )";

    if (mysqli_query($con, $sql)) {
        echo "Usuarios creada correctamente";
    } else {
        echo "Error en la creacion " . mysqli_error($con);
    }
?>