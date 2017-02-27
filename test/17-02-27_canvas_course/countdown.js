var WINDOW_WIDTH = 1024;//画布的宽度
var WINDOW_HEIGHT = 768;//画布的高度
var RADIUS = 8; //小球的半径
var MARGIN_TOP = 60;//每一个数字距离画布上边距的距离
var MARGIN_LEFT = 30;//第一个数字距离画布左边距的距离

const endTime = new Date(2017,1,26,23,48,30);
var curShowTimeSeconds = 0;//倒计时的秒数

window.onload = function(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");//绘图的上下文环境

  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  curShowTimeSeconds = getCurrentShowTimeSeconds();

  render(context);
}

function getCurrentShowTimeSeconds(){
  var cutTime = new Date();
  var ret = endTime.getTime() - cutTime.getTime();
  ret = Math.round(ret/1000);
  console.log(cutTime.getMonth(),endTime.getMonth());
  return ret >= 0 ? ret : 0;
}
/**
 * [render 绘制当前canvas画布]
 * @param  {[type]} cxt [description]
 * @return {[type]}     [description]
 */
function render(cxt){

  //倒计时具体的数字
  var hours = parseInt(curShowTimeSeconds/3600);
  var minutes = parseInt((curShowTimeSeconds-hours*3600)/60);
  var seconds = curShowTimeSeconds%60;
  renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
  renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);
  renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);
  renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);
  renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);
  renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);
  renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);
  renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);
}
function renderDigit(x,y,num,cxt){
  cxt.fillStyle = "rgb(0,102,153)";

  for(var i=0;i<digit[num].length;i++){
    for(var j=0;j<digit[num][i].length;j++){
      if(digit[num][i][j] == 1){
        cxt.beginPath();
        cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
        cxt.closePath();

        cxt.fill();
      }
    }

  }

}
