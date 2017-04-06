var lineChartData = {
    //X坐标数据
    labels : ["周一","周二","周三","周四","周五","周六","周末"],
    datasets : [
        {
            //统计表的背景颜色
            fillColor : "rgba(230,230,250,0.5)",
            //统计表画笔颜色
            strokeColor : "#FFEFD5",
            //点的颜色
            pointColor : "#FFEFD5",
            //点边框的颜色
            pointStrokeColor : "#FFFACD;",
            //鼠标触发时点的颜色
            pointHighlightFill : "	#00CDCD",
            //鼠标触发时点边框的颜色
            pointHighlightStroke : "#000",
            //Y坐标数据
            data : [300,555,655,714,899,905,1000]
        }
        
    ]

}

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });
}