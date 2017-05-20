angular.module("com.netease.classroom.directives",[])
	.directive("carouselMain",function(){
		return {
			templateUrl:"template/carousel-main.html",
			link:function(scope,element,attr){
                var gallery = mui('.mui-slider');
					gallery.slider({
						interval:1000
					});					
					$(".comment").toggle(
						function(){
							$("#select-wrap").css("display","block");
						},
						function(){
							$("#select-wrap").css("display","none");
						}
					)				
            }
		}
	})
	.directive("indexHeader",function(){
		return {
			templateUrl:"template/index-header.html"
			
		}
	})
	.directive("indexBanner",function(){
		return {
			templateUrl:"template/index-banner.html"			
		}
	})
	.directive("indexSection",function(){
		return {
			templateUrl:"template/index-section.html",
			link:function(scope,element,attrs){
				$(".look").click(function(){
					$(this).css("display","none");
					$(".look-box").css("display","block");
					$(".all-comment").css("display","block");
				})
				$(".look-box").click(
					function(){
						$(this).css("display","none");
						$(".look").css("display","block");
						$(".all-comment").css("display","none");
					}		
				)
				$(".delete-wrap").on("click",function(){			
					$(this).parent().parent().parent().remove();
				})
				$(".item").delegate(".praise","click",function(){			
					var num=parseInt($(this).parent().find(".num").html());
					console.log(num++);
					$(this).css("color","#5bafff");
					$(this).parent().find(".num").html(num++)
				})	
				//改变图片尺寸
				console.log($(".item").find(".share-img"))
			//	console.log(attrs.indexattr);
				switch(scope.imgs){
					case 1:
						$(".share-img ul li").css({width:"1.72rem"});
						$(".share-img img").css("width","100%");
					break;
					case 2:
						$(".share-img ul li").css({width:"1.34rem",height:"1.34rem"})
						$(".share-img img").css({width:"100%",height:"100%"});
					break;
					case 3:
						$(".share-img ul li").css({width:"0.75rem",height:"0.75rem"})
						$(".share-img img").css({width:"100%",height:"100%"})
					break;
					case 4:
						$(".share-img ul li").css({width:"1.34rem",height:"1.34rem"})
						$(".share-img img").css({width:"100%",height:"100%"});
					break;
					case 7:
						$(".share-img ul li").css({width:"0.75rem",height:"0.75rem"})
						$(".share-img img").css({width:"100%",height:"100%"});
					break;
					default:break;
				}
			}
		}
	})
	