angular.module('app-controller', [])
    .controller('startController',  [
        '$scope',
        '$http',
        function($scope,$http){
            $http.get('http://www.34.com/index.php/Admin/Goods/indexlst')
                .success(function(data){
                    if(data instanceof Array && data.length>0) {
                        $scope.dishList = data;  //清除已有的记录，只显示此次查询到的记录
                    }
                });
        }
    ])
    .controller('detailController',  [
        '$scope',
        '$http',
        '$routeParams',
        function($scope,$http,$routeParams){
            $http.get('/Index.php/Admin/Goods/getGood?id='+$routeParams.id).success(function(data){
                $scope.dish = data[0];
            });
            $scope.buyodrder={num:2,id:$routeParams.id}
            $scope.addnum=function (){
                $scope.buyodrder.num++;
            }
            $scope.rednum=function(){
                $scope.buyodrder.num--;
                if( $scope.buyodrder.num < 1){
                    $scope.buyodrder.num=1;
                }
            }
        }
    ])
    .controller('payController',  [
        '$scope',
        '$http',
        '$routeParams',
        '$location',
        function($scope,$http,$routeParams,$location){
            $http.get('/Index.php/Admin/Goods/getGood?id='+$routeParams.id).success(function(data){
                $scope.dishorder = data[0];
            });
            $scope.jumpToorderlst = function(){
                $location.path('/orderlst');
            }
            $scope.detailorder=$routeParams;
            $scope.order_menages={user_name:'',phone:'',addr:'',goodid:$routeParams.id,goodnum:$routeParams.num}
            $scope.submit = function(){
                $scope.order='';
                for( $scope.k in $scope.order_menages){
                    $scope.order +=$scope.k+'='+$scope.order_menages[$scope.k]+'&'
                };
                $http.post(
                    '/Index.php/Admin/Order/add',
                    $scope.order,
                    {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
                ).success(function(data){
                        if(data.status==1){
                            $scope.succMsg = '订餐成功！您的订单编号为：'+data.info+'。您可以在用户中心查看订单状态。'
                            console.log(data.info)
                            setTimeout($scope.jumpToorderlst(),10)
                        }else {
                            $scope.errMsg = '订餐失败！错误码为：'+data.info;
                        }
                    });
            }
        }

    ])
    .controller('orderlstController',  [
        '$scope',
        '$http',
        function($scope,$http){

        }
    ])
    .controller('hotController',  [
        '$scope',
        '$http',
        function($scope,$http){
            $http.get('http://www.34.com/index.php/Admin/Goods/indexlst')
                .success(function(data){
                    if(data instanceof Array && data.length>0) {
                        $scope.dishList = data;  //清除已有的记录，只显示此次查询到的记录
                    }
                });
        }
    ])