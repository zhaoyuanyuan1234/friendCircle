angular.module("com.netease.classroom.controllers",[])
	.controller("mainController",["$scope","$sce","courseService",function($scope,$sce,courseService){
		courseService.courseInfo().then(function(res){			
			console.log(res.data);
			var shareLife = $scope.share=res.data.shareLife;
			$scope.shareImg=res.data.sharelink;
			console.log($scope.share);console.log($scope.shareImg);
			//$scope.imgs=$scope.share[1].shareInfo.sharePic;
			//console.log($scope.imgs);
			for(var x in shareLife){
				var a = shareLife[x];
				$scope.imgs = a.shareInfo.sharePic; 
				
			}
			console.log($scope.imgs);
		})
	}])
	