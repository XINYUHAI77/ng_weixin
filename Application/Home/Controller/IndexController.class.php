<?php
// 本类由系统自动生成，仅供测试用途
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
      $this->show();
    }
    public function ajaxs() {
            $username=$_POST['username'];
            var_dump($username);
    		//$this->success('操作成功！', U('add'),true);
    	}
}