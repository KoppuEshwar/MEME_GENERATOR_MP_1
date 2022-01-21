<?php

session_start();

header('location:login.php');

$con = mysqli_connect('localhost','root','');

mysqli_select_db($con, 'User_Registration');

$name = $_POST['name'];

$insta_name = $_POST['insta_name'];

$s = "SELECT * FROM usertable WHERE name='$name'";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

if($num == 1){
    echo "You are already Logged In..!";
}
else{
    $reg = "INSERT INTO usertable(name, insta_name) VALUES('$name', '$insta_name')";
    mysqli_query($con, $reg);
    echo "Registration Successful..!";
}

?>