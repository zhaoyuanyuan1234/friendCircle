angular.module("com.netease.classroom.servers",[])
.service("courseService",function($http){
	this.courseInfo=function(){
		return $http.get("data/data.json")
	}
})
