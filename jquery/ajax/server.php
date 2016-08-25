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
  $data = [
    'code' => 100,
    'msg' => 'ok',
    'name' => $name,
    'obj' => $_POST['obj']
  ];

  echo json_encode($data);

}
else {

  $data = [
    'code' => 101,
    'msg' => 'failed'
  ];

  echo json_encode($data);
}

