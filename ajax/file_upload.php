<?php 
    
    header('Content-Type:text/json;charset=utf-8');

    $name = $_FILES["face"]["name"];
    $upload_file = $_FILES["face"]["tmp_name"];
    //把$upload_file里文件存入"../picture/".$name里
    $fileState = move_uploaded_file($upload_file, "../picture/".$name);

    //第一个参数：PC端文件路径
    //第二个参数：服务器端文件的相对路径

    $response["state"] = true;
    //判断上传是否成功
    if ($fileState) {
        $response["url"] = "http://192.168.100.93/babudou/picture/".$name;
    } else {
        $response["state"] = false;
        $response["error"] = "文件上传失败";
    }
    echo json_encode($response);
?>