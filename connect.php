<?php
$connection = mysqli_connect('localhost', 'nicolass', 'k0KoqqQEqCrBtw==');
if (!$connection){
    die("Database Connection Failed" . mysqli_error($connection));
}
$select_db = mysqli_select_db($connection, 'nicolass_formulaire_Bretagne');
if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
}