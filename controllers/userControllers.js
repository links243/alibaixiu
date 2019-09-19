// 引入模块
const userModel = require('../models/userModel');

module.exports = {
  userLogin(req,res) {
    userModel.userLogin(req.body.email,(err,data,fields) => {
      if(err){
        res.end(JSON.stringify({
          code : 400,
          msg : '服务器异常，请稍后重试'
        }))
      }else {
        // 判断是否查询到数据
        if(data){
          if(data.password == req.body.password){
            res.json({
              code: 200,
              msg: '登录成功'
            })
          }else {
            res.json({
              code: 400,
              msg: '密码错误'
            })
          }
        }else {
          res.json({
            code: 400,
            msg: '邮箱输入有误'
          })
        }
      }
    })
  }
}