angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $state) {
  $scope.goList = function(){
    $state.go('list');
  };
})

.controller('ListCtrl', function($scope, $state) {
  $scope.goDisplay = function(){
  	$state.go('display');
  };
  $scope.goFlex_direction = function(){
  	$state.go('flex-direction');
  };
  $scope.goJustify_content = function(){
  	$state.go('justify-content');
  };
  $scope.goAlign_items = function(){
  	$state.go('align-items');
  };
  $scope.goflex_wrap = function(){
  	$state.go('flex-wrap');
  };
  $scope.goAlign_content = function(){
  	$state.go('align-content');
  };
  $scope.goOrder = function(){
  	$state.go('order');
  };
  $scope.goAlign_self = function(){
    $state.go('align-self');
  };
  $scope.goFlex = function(){
    $state.go('flex');
  };
  $scope.goFlex_flow = function(){
    $state.go('flex-flow');
  };
  $scope.goFlex_flow = function(){
    $state.go('flex-flow');
  };
  $scope.goCalc = function(){
    $state.go('calc');
  };
  $scope.goBack = function(){
    $state.go('main');
  };
})

.controller('DisplayCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
})

.controller('Flex-directionCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
})

.controller('Justify-contentCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
})

.controller('Align-itemsCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
})

.controller('Flex-wrapCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
})

.controller('Align-contentCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
})

.controller('OrderCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
})

.controller('Align-selfCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
})

.controller('FlexCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
})

.controller('Flex-flowCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
})

.controller('CalcCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
  $scope.data = {
    idb:"back",
    idc:"clear",
    idt:"toggle",
    idadd:"＋",
    id9:"9",
    id8:"8",
    id7:"7",
    idj:"－",
    id6:"6",
    id5:"5",
    id4:"4",
    idx:"×",
    id3:"3",
    id2:"2",
    id1:"1",
    iddiv:"÷",
    id0:"0",
    idd:".",
    ide:"＝",
    screenData:"0",
    operaSymbo:{"＋":"+","－":"-","×":"*","÷":"/",".":"."},
    lastIsOperaSymbo:false,
    iconType:'waiting_circle',
    iconColor:'white',
    arr:[],
    logs:[]
  };

  $scope.clickBtn = function(data_id){
    var id = data_id;
    if(id == $scope.data.idb){  //退格←
      var data = $scope.data.screenData;//获取屏幕数据
      if(data == "0"){
          return;
      }
      data = data.substring(0,data.length-1);//获取屏幕数据字符串
      if(data == "" || data == "－"){
          data = 0;
      }
      $scope.data.screenData = data;
      $scope.data.arr.pop();//删除数组的最后一个元素。
    }else if(id == $scope.data.idc){  //清屏C
      $scope.data.screenData = "0";
      $scope.data.arr.length = 0;
    }else if(id == $scope.data.idt){  //正负号+/-
      var data = $scope.data.screenData;//获取屏幕数据
      if(data == "0"){
          return;
      }
      var firstWord = data.charAt(0);
      if(data == "－"){
        data = data.substr(1);
        $scope.data.arr.shift();//把数组的第一个元素从其中删除
      }else{
        data = "－" + data;
        $scope.data.arr.unshift("－");//向数组的开头添加一个或更多元素
      }
      $scope.data.screenData = data;
    }else if(id == $scope.data.ide){  //等于＝
      var data = $scope.data.screenData;
      if(data == "0"){
          return;
      }

      var lastWord = data.charAt(data.length);
      if(isNaN(lastWord)){
        return;
      }

      var num = "";

      var lastOperator = "";
      var arr = $scope.data.arr;
      var optarr = [];
      for(var i in arr){
        if(isNaN(arr[i]) == false || arr[i] == $scope.data.idd || arr[i] == $scope.data.idt){
          num += arr[i];
        }else{
          lastOperator = arr[i];
          optarr.push(num);
          optarr.push(arr[i]);
          num = "";
        }
      }
      optarr.push(Number(num));
      var result = Number(optarr[0])*1.0;
      console.log(result);
      for(var i=1; i<optarr.length; i++){
        if(isNaN(optarr[i])){
            if(optarr[1] == $scope.data.idadd){
                result += Number(optarr[i + 1]);
            }else if(optarr[1] == $scope.data.idj){
                result -= Number(optarr[i + 1]);
            }else if(optarr[1] == $scope.data.idx){
                result *= Number(optarr[i + 1]);
            }else if(optarr[1] == $scope.data.iddiv){
                result /= Number(optarr[i + 1]);
            }
        }
      }
      //存储历史记录
      $scope.data.logs.push(data + result);

      $scope.data.arr.length = 0;
      $scope.data.arr.push(result);

      $scope.data.screenData = result;
    }else{
      if($scope.data.operaSymbo[id]){ //如果是符号+-*/
        if($scope.data.lastIsOperaSymbo || $scope.data.screenData == "0"){
          return;
        }
      }

      var sd = $scope.data.screenData;
      var data;
      if(sd == 0){
        data = id;
      }else{
        data = sd + id;
      }
      $scope.data.screenData= data;
      $scope.data.arr.push(id);

      if($scope.data.operaSymbo[id]){
        $scope.data.lastIsOperaSymbo = true;
      }else{
        $scope.data.lastIsOperaSymbo = false;
      }
    }
  };
})

;
