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
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[5]) && is_numeric($path[5]) )
        {
            $json_array = array();
            $notice_id = $path[5];
            // echo "get user id ------".$notice_id;die;

            $getNoticeRow = mysqli_query($db_conn, "SELECT * FROM notices WHERE id = '$notice_id'");
            if(mysqli_num_rows($getNoticeRow) == 0) {
                echo json_encode(array("result" => "No Notices Found"));
                return;
            } else {
                while($noticeRow = mysqli_fetch_array($getNoticeRow)){
                    $json_array['rowNoticeData'] = array('id'=> $noticeRow['id'], 'title'=> $noticeRow['notice_name'], 'link'=> $noticeRow['notice_link']);
                }
                echo json_encode($json_array['rowNoticeData']);
                return;
            }

        } else {
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
        }
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

        case "PUT":
            $noticeUpdate = json_decode(file_get_contents('php://input'));
            $id = $noticeUpdate->id;
            $title = $noticeUpdate->title;
            $link = $noticeUpdate->link;
    
            $updateNotice = mysqli_query($db_conn, "UPDATE notices SET notice_name = '$title', notice_link = '$link' WHERE id = '$id'");
    
            if($updateNotice) {
                echo json_encode(array("result" => "Notice Updated Successfully"));
                return;
            } else {
                echo json_encode(array("result" => "Notice Updation Failed"));
                return;
            }
    
            break;
            case "DELETE":
                $path = explode('/', $_SERVER['REQUEST_URI']);
                if (isset($path[5]) && is_numeric($path[5]) )
                {
                    $notice_id = $path[5];
                    $deleteNotice = mysqli_query($db_conn, "DELETE FROM notices WHERE id = '$notice_id'");
                    if($deleteNotice) {
                        echo json_encode(array("result" => "Notice Deleted Successfully"));
                        return;
                    } else {
                        echo json_encode(array("result" => "Notice Deletion Failed"));
                        return;
                    }
                } else {
                    echo json_encode(array("result" => "Notice Deletion Failed"));
                    return;
                }

                break;

}



?>