window.onload = function(){
					
					//百度地图API功能
					function loadJScript() {
						var script = document.createElement("script");
						script.type = "text/javascript";
						script.src = "http://api.map.baidu.com/api?v=2.0&ak=ZZ3C8A6irhW7b3WwQSN7smNeW5EVVtqK&callback=init";
						document.body.appendChild(script);
					}
//					function init() {
						 map = new BMap.Map("allmap");            // 创建Map实例
						var point = new BMap.Point(104.071216, 30.576279); // 创建点坐标
						map.centerAndZoom(point,15); 
						map.setCurrentCity("成都");          // 设置地图显示的城市 此项是必须设置的
						map.enableScrollWheelZoom();   //启用滚轮放大缩小
//						map.addControl(navigationControl);//添加导航控件
//						map.addControl(geolocationControl);//添加定位控件
//					} 
					loadJScript();
//					init();
					 //异步加载地图
					
//					function addcontrol_left_top(){
						//定位相关控件
						// 添加带有定位的导航控件
					  var navigationControl = new BMap.NavigationControl({
					    // 靠左上角位置
					    anchor: BMAP_ANCHOR_TOP_LEFT,
					    // LARGE类型
					    type: BMAP_NAVIGATION_CONTROL_LARGE,
					    // 启用显示定位
					    enableGeolocation: true
					  });
					  		map.addControl(navigationControl);
//					}
					
//					function addcontrol_left_bottom(){
						// 添加定位控件
					  var geolocationControl = new BMap.GeolocationControl();
					  geolocationControl.addEventListener("locationSuccess", function(e){
					    // 定位成功事件
					    var address = '';
					    address += e.addressComponent.province;
					    address += e.addressComponent.city;
					    address += e.addressComponent.district;
					    address += e.addressComponent.street;
					    address += e.addressComponent.streetNumber;
					    //添加定位点
					  	var marker = new BMap.Marker(point);  // 创建标注
						map.addOverlay(marker);               // 将标注添加到地图中
					  });
					  geolocationControl.addEventListener("locationError",function(e){
					    // 定位失败事件
					    alert(e.message);
					  });
							map.addControl(geolocationControl);

//					}
					  document.getElementById("pet_history").onclick = showOver;
					  document.getElementById("pet_position").onclick = hideOver;					  
//					  function walk(){
//					  	步行规划
//						console.log(13132);
//					  		var walking = new BMap.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});
//							walking.search("锦城公园", "锦城湖");
						   polygon = new BMap.Polygon([
							new BMap.Point(104.069910, 30.681026),
							new BMap.Point(104.068850, 30.673235),
							new BMap.Point(104.067775, 30.687123),
						], {strokeColor:"blue", strokeWeight:5, strokeOpacity:0.5});
							map.addOverlay(polygon); 
							hideOver();
//					  }
					  function showOver(){
					  	polygon.show();
					  }
						function hideOver(){
						polygon.hide();
						}
}
