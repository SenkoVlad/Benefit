<?php
ini_set("mysql.connect_timeout", 300);
ini_set("default_socket_timeout", 300);

if(isset($_POST['submit']))
{
  if(getimagesize($_FILES['photo']['tmp_name']) == FALSE) {
    echo "Please select an image.";
  }
  else {
    $image = addslashes($_FILES['photo']['tmp_name']);
    $image = file_get_contents($image);
    $image = base64_encode($image);
    $name = $_POST['name'];
    $job = $_POST['job'];
    $message = $_POST['message'];
    save($image, $name, $job, $message);
  }
  header("location:javascript://history.go(-1)");
  exit();
}

function save($image, $name, $job, $message)
{
  $mysqli =new  mysqli("localhost", "benefit", "root_benefit", "benefit");
  $query = "insert into comments (foto, name, job, message) values ('$image','$name','$job','$message');";
  $result = $mysqli->query($query);

}

?>

