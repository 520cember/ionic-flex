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
  $scope.goCalc = function(){
    $state.go('calc');
  };
  $scope.goExpress = function(){
    $state.go('express');
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

.controller('ExpressCtrl', function($scope, $state, $http, $ionicActionSheet, $timeout) {
  $scope.items = [];
  $scope.goBack = function(){
    $state.go('list');
  };

  $scope.companyNo = '';

  $scope.show = function() {
    var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>申通</b>' },
          { text: '<b>EMS</b>' },
          { text: '<b>顺丰</b>' },
          { text: '<b>圆通</b>' },
          { text: '<b>中通</b>' },
          { text: '<b>韵达</b>' },
          { text: '<b>天天</b>' },
          { text: '<b>汇通</b>' },
          { text: '<b>全峰</b>' },
          { text: '<b>德邦</b>' },
          { text: '<b>宅急送</b>' }
        ],
        titleText: '选择快递公司',
        cancelText: '取消',
        cancel: function() {
          $scope.companyNo = '';
          // add cancel code..
        },
        buttonClicked: function(index) {
          // ps:快递公司编码:申通="shentong" EMS="ems" 顺丰="shunfeng" 圆通="yuantong" 中通="zhongtong" 韵达="yunda" 天天="tiantian" 汇通="huitongkuaidi" 全峰="quanfengkuaidi" 德邦="debangwuliu" 宅急送="zhaijisong"
          switch(index)
          {
          case 0:
            $scope.companyNo = '申通';
            break;
          case 1:
            $scope.companyNo = 'EMS';
            break;
          case 2:
            $scope.companyNo = '顺丰';
            break;
          case 3:
            $scope.companyNo = '圆通';
            break;
          case 4:
            $scope.companyNo = '中通';
            break;
          case 5:
            $scope.companyNo = '韵达';
            break;
          case 6:
            $scope.companyNo = '天天';
            break;
          case 7:
            $scope.companyNo = '汇通';
            break;
          case 8:
            $scope.companyNo = '全峰';
            break;
          case 9:
            $scope.companyNo = '德邦';
            break;
          case 10:
            $scope.companyNo = '宅急送';
            break;
          default:
            $scope.companyNo = "";
          }
          return true;
        }
    });
};  

  // shentong&postid=3317899668939
  $scope.search = function(companyNo,expressNo){
    // ps:快递公司编码:申通="shentong" EMS="ems" 顺丰="shunfeng" 圆通="yuantong" 中通="zhongtong" 韵达="yunda" 天天="tiantian" 汇通="huitongkuaidi" 全峰="quanfengkuaidi" 德邦="debangwuliu" 宅急送="zhaijisong"
    var company = "";
    switch(companyNo)
    {
    case '申通':
      company = 'shentong';
      break;
    case 'EMS':
      company = 'ems';
      break;
    case '顺丰':
      company = 'shunfeng';
      break;
    case '圆通':
      company = 'yuantong';
      break;
    case '中通':
      company = 'zhongtong';
      break;
    case '韵达':
      company = 'yunda';
      break;
    case '天天':
      company = 'tiantian';
      break;
    case '汇通':
      company = 'huitongkuaidi';
      break;
    case '全峰':
      company = 'quanfengkuaidi';
      break;
    case '德邦':
      company = 'debangwuliu';
      break;
    case '宅急送':
      company = 'zhaijisong';
      break;
    default:
      company = "";
    }
    var url = "http://www.kuaidi100.com/query?type=" + company + "&postid=" + 3317899668939;
    $http.get(url)
    .success(function (result) {
      $scope.items = result.data;
      $scope.message = result.message;
    });
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
