<!-- Create a change password api using doctor_api  -->
<?php
/*
     usage: to login for admin 
     how to call : http://localhost/course_project/user_change_password.php?id=1&oldpassword=123123&newpassword=123123
     output :
     [{"error":"input is missing"}] 
     [{"error":"no"},{"success":"no"},{message:"Invalid change attempt"}]
     [{"error":"no"},{"success":"yes"},{message:"password changed successfully "}]
     input : user_id,oldpassword,newpassword
     */
require_once("connection.php");
$response = array();
$input = $_REQUEST;
if (isset($input['id'], $input['oldpassword'], $input['newpassword']) == false) {
     array_unshift($response, array("error" => "Input is missing "));
} else {

     //continue
     $sql = "SELECT password from register_user where id = ? ";
     $stat = $db->prepare($sql);
     $stat->setFetchMode(PDO::FETCH_ASSOC);
     $stat->bindparam(1, $input['id']);
     $stat->execute();
     $row = $stat->fetch();
     if (password_verify($input['oldpassword'], $row['password']) == true) {
          // continue 
          $new_hash_password = password_hash($input['newpassword'], PASSWORD_BCRYPT);
          $sql = "UPDATE register_user set password = ? where id  = ? ";
          $stat = $db->prepare($sql);
          $stat->bindparam(1, $new_hash_password);
          $stat->bindparam(2, $input['user_id']);
          $stat->execute();
          array_push($response, array("error" => "no"));
          array_push($response, array("success" => "yes"));
          array_push($response, array("message" => "Password changed successfully "));
     } else {
          array_push($response, array("error" => "no"));
          array_push($response, array("success" => "no"));
          array_push($response, array("message" => "Invalid Attempt "));
     }
}
echo json_encode($response);
?>