<?php
  header("Content-type:text/html;charset=utf-8");
  //模拟官方的请求状态返回格式
  $responseData = array("code" => 0, "msg" => "");

  //取出我们提交过来的数据
  $username = $_POST['username'];
  $password = $_POST['password'];
  $repassword = $_POST['repassword'];
  $createtime = $_POST['createtime'];

  //我们需要对我们提交过来的数据，做一个简单的验证
  if(!$username){
    $responseData['code'] = 1;
    $responseData['msg'] = "用户名不能为空";
    echo json_encode($responseData);
    exit;
  }

  if(!$password){
    $responseData['code'] = 2;
    $responseData['msg'] = "密码不能为空";
    echo json_encode($responseData);
    exit;
  }

  if($password != $repassword){
    $responseData['code'] = 3;
    $responseData['msg'] = "两次密码输入不一致";
    echo json_encode($responseData);
    exit;
  }

  //验证用户名是否重名
  //1、链接数据库
  $link = mysql_connect("localhost", "root", "123456");

  //2、判断数据库是否链接成功
  if(!$link){
    echo "数据库链接失败";
    exit; //退出程序
  }

  //3、设置访问字符集
  mysql_set_charset("utf8");

  //4、选择我们要访问数据库
  mysql_select_db("newbalance");

  //5、准备sql
  $sql1 = "SELECT * FROM users WHERE username='{$username}'";

  //6、发送sql语句
  $res = mysql_query($sql1);  //mysql_Result

  //取出一行数据
  $row = mysql_fetch_assoc($res);

  if($row){
    $responseData['code'] = 4;
    $responseData['msg'] = "用户名已存在";
    echo json_encode($responseData);
    exit;
  }

 
  $str = md5(md5(md5($password).'qingdao')."qianfeng");


  $sql2 = "INSERT INTO users(username,password,createTime) VALUES('{$username}','{$str}',{$createtime})";

  $res2 = mysql_query($sql2);

  if(!$res2){ 
    $responseData['code'] = 5;
    $responseData['msg'] = "服务器忙";
    echo json_encode($responseData);
    exit;
  }

  $responseData['msg'] = "注册成功";
  echo json_encode($responseData);

  mysql_close($link);

?>