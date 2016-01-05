<?php
namespace Admin\Controller;
use Think\Controller;
class GoodsController extends Controller 
{
	public function add()
	{
		// 2.处理表单
		if(IS_POST)
		{
			//3. 先生成模型
			// D和M的区别：D生成我们自己创建的模型对象，M生成TP自带的模型对象
			// 这里我们要生成我们自己创建的模型，因为这里要使用我们自己创建的模型中的验证规则来验证表单
			// 这里用M可以添加成功但是验证表单的功能会失败，因为验证规则是在我们自己定义的模型中的，而M生成的是TP自带的模型里没有验证规则
			$model = D('Goods');
			// 4. a.接收表单中所有的数据并存到模型中 b.使用I函数过滤数据 c.根据模型中定义的规则验证表单
			if($model->create(I('post.'), 1))
			{
				// 5. 插入数据库
				if($model->add())
				{
					// 6. 提示信息
					$this->success('操作成功！', U('add'));
					// 7.停止执行后面的代码
					exit;
				}
			}
			// 8. 如果上面失败，获取失败的原因
			$error = $model->getError();
			// 9. 显示错误信息，并跳回到上一个页面
			$this->error($error);
		}
		// 1.显示表单
		$this->display();
	}
	public function edit()
	{
		
	}
	public function delete()
	{
		
	}
	// 列表
	public function lst()
	{
		$model = D('Goods');
		// 获取带翻页的数据
		$data = $model->search();
		$this->assign(array(
			'data' => $data['data'],
			'page' => $data['page'],
		));

		$this->display();
	}

   //获取商品列表
   	public function Goodslst() {
   		$lastid = $_GET ['lastid'];
   		$data = D ( 'Goods' )->where("id>$lastid")->select ();
   		$this->ajaxReturn ( $data );
   	}
   //获取某个商品
      	public function Gooddetail() {
      		$id = $_GET ['id'];
      		$data = D ( 'Goods' )->where("id=$id")->select ();
      		$this->ajaxReturn ( $data );
      	}
   //获取商品列表
      	public function goodSearch() {
      	   $goods_name = $_GET ['goods_name'];
      	    $where = array();
      	    if($goods_name){
              $where['goods_name'] = array('like', "%$goods_name%");
      	    }

      		$data = D ( 'Goods' )->where($where)->select ();
      		//echo D ( 'Goods' )->getLastSql();

      		$this->ajaxReturn ( $data );

      	}
      	//首页 列表
        	public function indexlst()
        	{
        		$model = D('Goods');
        		// 获取带翻页的数据
        		$data = $model->search();
        		$this->ajaxReturn ( $data['data'] );

        	}
        	public function getGood()
                    	{
                    	   $id=$_GET['id'];
                    		$model = D('Goods');
                    		$data = $model->where("id=$id")->select ();;
                    		$this->ajaxReturn ($data );

                    	}
}














