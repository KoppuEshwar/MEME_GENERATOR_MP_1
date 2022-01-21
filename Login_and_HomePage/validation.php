<?php

session_start();

$con = mysqli_connect('localhost','root','');

mysqli_select_db($con, 'User_Registration');

$name = $_POST['name'];

$insta_name = $_POST['insta_name'];

$s = "SELECT * FROM usertable WHERE insta_name='$insta_name'";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

if($num == 1){
    $_SESSION['name'] = $name;
    header('location:home.php');
}
else{
    header('location:login.php');
}

?>