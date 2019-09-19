// 点击登录按钮 实现数据收集 并发送ajax请求
$(function() {    // jq入口函数 dom数加载完毕就运行jq 可以多次写 window.onlord函数只能写一次
  $('.btn').on('click',function() {
    console.log('ajax请求触发');
    $.ajax({
      type: 'post',
      datatype: 'json',
      url: '/login',
      data: $('.login-wrap').serialize(),
      success: function(res) {
        // console.log(JSON.parse(res));
        console.log(res);
      }
    })
  })
})

// 可以尝试一下自己处理一下请求失败的结果
