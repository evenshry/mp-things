// 云函数入口文件
const cloud = require('wx-server-sdk');

// 1. 初始化
cloud.init();

// 2. 获取数据库引用
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();

  return db.collection('user').get();
};
