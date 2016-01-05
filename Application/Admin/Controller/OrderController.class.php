<?php
namespace Admin\Controller;
use Think\Controller;
class OrderController extends Controller
{
	public function add()
	{


			$model = D('Order');
			if($model->create())
			{
				// 5. 插入数据库
				if($model->add())
				{
					// 6. 提示信息
					$this->success('操作成功！', U('add'),true);

				}else{
				  $this->error('操作失败！', U('add'),true);
				}
			}
		}

	// 列表
	public function lst()
	{
		$phone = $_GET ['phone'];
        $data = D ( 'Order' )->where("phone=$phone")->select ();
        $this->ajaxReturn ( $data );

	}


}














