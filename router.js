// 引入模块
const pagesControllers = require('./controllers/pagesControllers');
const userControllers = require('./controllers/userControllers')
const express = require('express');

// 创建路由模块
const router = express.Router();

// router.get('/',(req,res) => {
//     pagesControllers.getIndexPage(req,res);
// });
router
// 页面的请求
       // 获取前台首页
      .get('/',pagesControllers.getIndexPage)
      // 获取前台列表
      .get('/list',pagesControllers.getListPage)
      // 获取前台细节
      .get('/detail',pagesControllers.getDetailPage)
      // 获取后台首页
      .get('/admin',pagesControllers.getAdminIndexPage)
      // 获取后台所有评论
      .get('/admin/comments',pagesControllers.getCommentsPage)
      // 获取后台 文章 > 分类目录
      .get('/admin/categories',pagesControllers.getCategoriesPage)
      .get('/admin/login',pagesControllers.getLoginPage)
      // 获取后台设置 > 导航菜单
      .get('/admin/nav-menus',pagesControllers.getNavmenuPage)
      .get('/admin/password-reset',pagesControllers.getPassResetPage)
      // 获取后台 文章 > 写文章
      .get('/admin/post-add',pagesControllers.getPostAddPage)
      .get('/admin/post-edit/:id',pagesControllers.getPostEditPage)
      // 获取后台 文章 > 所有文章
      .get('/admin/posts',pagesControllers.getPostsPage)
      .get('/admin/profile',pagesControllers.getProfilePage)
      // 获取后台设置 > 网站设置
      .get('/admin/settings',pagesControllers.getSettingPage)
      // 获取后台设置 > 图片轮播
      .get('/admin/slides',pagesControllers.getSlidesPage)
      // 获取后台用户管理
      .get('/admin/users',pagesControllers.getUsersPage)

// 操作的请求
      // 用户登录
      .post('/login',userControllers.userLogin)
  

// 暴露路由
module.exports = router;