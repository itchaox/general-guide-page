/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-06-15 11:02
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-08-30 12:56
 * @desc       :
 */

import axios from 'axios';

// 公共基础路径
let PUBLIC_PATH = '';

if (import.meta.env.DEV) {
  // FIXME: 开发环境
  PUBLIC_PATH = '/';
} else {
  // FIXME: 生产环境
  PUBLIC_PATH = './';
}

//  获取部署后的配置文件
export const getServerConfig = async () => {
  try {
    const res = await axios.get(`${PUBLIC_PATH}config.json`);
    return res.data;
  } catch (error) {
    ElMessage.error('请在public文件夹下添加 config.json 配置文件');
  }
};

export { PUBLIC_PATH };
