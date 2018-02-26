import Express from 'express'

import Tags from '../models/tags'
import {responseClient} from '../utils/index.js'

import TagsApi from './tags.js'

const router = Express.Router()

router.get('/',(req, res)=>{
	console.log(req.session)
	console.log('========')
	res.send('apiserver111')
})

//===============不需要 auth 权限检测============

// 获取所有标签
router.get('/getAllTags', TagsApi.getAllTags);

//===============需要 auth 权限检测==============

//权限检测中间件
// router.use('/auth', require('./auth.js'))

//添加标签
router.use('/auth/addTag', TagsApi.addTag)
//删除标签
router.get('/auth/delTag', TagsApi.delTag)
//编辑标签
router.post('/auth/editTag', TagsApi.editTag)

// ============================================



module.exports = router