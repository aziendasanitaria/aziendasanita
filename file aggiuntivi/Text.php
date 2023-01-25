<?php
  $inputText = $_POST["inputText"];
  $file = fopen("info.txt", "w") or die("Unable to open file!");
  fwrite($file, $inputText);
  fclose($file);
?>
