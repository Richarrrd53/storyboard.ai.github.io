const path = require('path');

module.exports = {
    entry: './public/js/home.js', // 您的 home.js 檔案路徑
    output: {
        filename: 'bundle.js', // 打包後的檔案名稱
        path: path.resolve(__dirname, 'public'), // 打包後的檔案路徑
    },
    mode: 'development', // 或 'production'
};