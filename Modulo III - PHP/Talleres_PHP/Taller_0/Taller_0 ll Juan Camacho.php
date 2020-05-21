<?php
    function cualquiera($Arreglo){
        foreach ($Arreglo as $llave => $contenido) {
            if($contenido == "button"){
                echo "<button type=\"".$contenido."\">".$llave."</button>";
            }else{
                echo $llave.": ";
                echo "<br>";
                echo "<input type=\"".$contenido."\">";
            }
            echo "<br>";
        }
    }

    $myArray = array(    'nombre' =>  'text', 'telefono' => 'numeric',    'email' =>  'email',    'contrasena' =>  'password',    'si' =>  'radio',    'no' =>  'checkbox',    'enviar'=>  'button', 'salir' => 'button'  );

    $myArray2 = array(   'nombre' =>  'button',
    'telefono' =>  'button',
    'email' =>  'button', 
    'contrasena' =>  'button', 
    'si' => 'button',
    'no' => 'button',
    'enviar'=> 'button',
    'salir' => 'button' );
    cualquiera($myArray);


?>
