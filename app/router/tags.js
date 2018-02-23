import Express from 'express'
import Tags from '../models/tags'
import {responseClient} from '../utils/index.js'

// const router = Express.router()

// router.get('/getAllTags', function (req, res) {
//     Tags.find(null, 'name').then(data => {
//         responseClient(res, 200, 0, '请求成功', data);
//     }).catch(err => {
//         responseClient(res);
//     })
// });

const getAllTags = (req,res)=>{
	Tags.find(null, 'name').then(data=>{
		responseClient(res, 200, 0, '请求成功', data);
	}).catch(err=>{
		responseClient(res)
	})
}

const TagsApi = {
	getAllTags
}

module.exports = TagsApi