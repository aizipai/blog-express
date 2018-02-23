import crypto from 'crypto'
import errMsg from '../config.js'


module.exports = {
    MD5_SUFFIX: 'zzb_blog',
    md5: function (pwd) {
        let md5 = crypto.createHash('md5');
        return md5.update(pwd).digest('hex')
    },
    responseClient(res,httpCode = 500, code = 3,message,result={}) {
        let responseData = {};
        responseData.errno = code;
        responseData.errmsg = message || errMsg[code];
        responseData.result = result;
        res.status(httpCode).json(responseData)
    },
    
}