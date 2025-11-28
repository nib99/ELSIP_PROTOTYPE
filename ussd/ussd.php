<?php
// Simple USSD demo endpoint (Africa's Talking)
$text = $_POST['text'] ?? '';
if($text == '') {
  echo 'CON Welcome to ELSIP\n1. Find Job\n2. Skills ID';
} else if ($text == '1') {
  echo 'CON Please enter your city:';
} else {
  echo 'END Thank you - demo';
}
?>
