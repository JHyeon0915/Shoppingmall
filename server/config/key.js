// 로컬 or production 모드인지 인식해주는 코드

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}