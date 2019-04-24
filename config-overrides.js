/*
* @description 项目支持装饰器配置
*/

const { override, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
 addDecoratorsLegacy()
 );