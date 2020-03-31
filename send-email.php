<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  mail(
    "rbowman170@gmail.com",
    $subject,
    $message,
  );
 ?>
