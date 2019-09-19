// 引入模块
const fs = require('fs');
const querystring = require('querystring');

module.exports = {
// 获取前台首页的请求
  getIndexPage(req,res) {
    res.render('index.ejs');
  },
// 获取前台列表
  getListPage(req,res) {
    res.render('list.ejs');
  },  
// 获取前台细节
  getDetailPage(req,res) {
    res.render('detail.ejs');
  },
// 获取后台首页  
  getAdminIndexPage(req,res) {
    var obj = querystring.parse(req.headers.cookie);
    if(obj.isLogin && obj.isLogin === 'true'){
      // 有登录状态 就返回后台主页
      res.render('admin/index.ejs');
    }else {
      // 没有登录状态 就重定向回登录页
      res.redirect('/login');
    }
  },
// 获取后台所有评论
  getCommentsPage(req,res) {
    res.render('admin/comments.ejs');
  },
// 获取后台 文章 > 分类目录
  getCategoriesPage(req,res) {
    res.render('admin/categories.ejs');
  },
  getLoginPage(req,res) {
    res.render('admin/login.ejs');
  },
// 获取后台设置 > 导航菜单
  getNavmenuPage(req,res) {
    res.render('admin/nav-menus.ejs');
  },
  getPassResetPage(req,res) {
    res.render('admin/password-reset.ejs');
  },
// 获取后台 文章 > 写文章
  getPostAddPage(req,res) {
    res.render('admin/post-add.ejs');
  },
  getPostEditPage(req,res) {
    res.render('admin/post-edit.ejs');
  },
// 获取后台 文章 > 所有文章
  getPostsPage(req,res) {
    res.render('admin/posts.ejs');
  },
  getProfilePage(req,res) {
    res.render('admin/profile.ejs');
  },
// 获取后台设置 > 网站设置
  getSettingPage(req,res) {
    res.render('admin/settings.ejs');
  },
  getSlidesPage(req,res) {
    res.render('admin/slides.ejs');
  },
// 获取后台用户管理
  getUsersPage(req,res) {
    res.render('admin/users.ejs');
  },



}