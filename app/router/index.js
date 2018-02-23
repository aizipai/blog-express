import Express from 'express'
// import tagsRoute from './tags.js'

import Tags from '../models/tags'
import {responseClient} from '../utils/index.js'

import TagsApi from './tags.js'

const router = Express.Router()

router.get('/',(req, res)=>{
	console.log(req.session)
	console.log('========')
	// res.send(JSON.stringify(res))
	res.send('apiserver111')

})



router.get('/getAllTags', function (req, res) {
    Tags.find(null, 'name').then(data => {
        responseClient(res, 200, 0, '请求成功', data);
    }).catch(err => {
        responseClient(res);
    })
});

router.use('/auth', require('./auth.js'))

// router.get('/tags',tagsRoute)

module.exports = router