<?php
/**
 * Created by PhpStorm.
 * User: dragon
 * Date: 16-6-14
 * Time: 下午2:20
 */


$backAjaxVal = array();

$code = $_POST['code'];

$nickname = 'test';
$openid = 'test';
$access_token = 'test';
$sex = 'test';
$city = 'test';
$province = 'test';
$headimgurl = 'test';

$backAjaxVal = array();
$backAjaxVal['code'] = $code;
$backAjaxVal['name'] = $nickname;
$backAjaxVal['openid'] = $openid;
$backAjaxVal['accesstoken'] = $access_token;
$backAjaxVal['sex'] = $sex;
$backAjaxVal['city'] = $city;
$backAjaxVal['province'] = $province;
$backAjaxVal['headimgurl'] = $headimgurl;

echo json_encode($backAjaxVal);
