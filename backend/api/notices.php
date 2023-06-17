<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn=mysqli_connect("localhost","root","","unibuddy");
if(!$db_conn){
    die("Connection failed: " . mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];

// echo "test------".$method;

switch ($method) 
{
    case "GET":
        $allnotices = mysqli_query($db_conn, "SELECT * FROM notices");
        if(mysqli_num_rows($allnotices) > 0) 
        {
            while($row = mysqli_fetch_array($allnotices)) 
            {
                $json_array["notice"][] = array("id" => $row["id"], "title" => $row["notice_name"], "link" => $row["notice_link"]);
            }
            echo json_encode($json_array["notice"]);
            return;
        } else {
            echo json_encode(array("result" => "No Notices Found"));
            return;
        }
        break;
    
    case "POST":
        $userPostData = json_decode(file_get_contents('php://input'));
        // echo "successfully posted notices";
        // print_r($userPostData);
        $title = $userPostData->title;
        $link = $userPostData->link;
        $result = mysqli_query($db_conn, "INSERT INTO notices (notice_name, notice_link) VALUES('$title', '$link')");
        if($result) {
            echo json_encode(array("result" => "Notice Posted Successfully"));
            return;
        } else {
            echo json_encode(array("result" => "Notice Failed"));
            return;
        }

        break;
}



?>