<?php
/**
 * Created by PhpStorm.
 * User: zdc
 * Date: 16-8-25
 * Time: 下午3:43
 */

//echo 'haha';

if (isset($_POST['name'])) {
  $name = $_POST['name'];
  json_encode($name);
  echo $name;
}
else {
  echo   json_encode('error');
}