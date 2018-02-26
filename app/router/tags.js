import Tags from '../models/tags'
import {responseClient} from '../utils/index.js'

const TagsApi = {
	getAllTags(req,res){
		Tags.find(null, 'name').then(data=>{
			responseClient(res, 200, 0, '请求成功', data);
		}).catch(err=>{
			responseClient(res)
		})
	},
	addTag(req, res){
		const { name } = req.body
		Tags.findOne({
			name
		}).then(result=>{
			if(!result){
				const tag = new Tags({ name })
				tag.save().then(data => {
					responseClient(res, 200, 0, '添加成功', data)
				}).catch(err=>{
					console.log('操作数据库出错-->addTag')
					throw err
				})
			}else{
				//添加的标签名字已经存在
				responseClient(res, 200, 1, '该标签已经存在')
			}
		})
	},
	delTag(req, res){
		const {_id} = req.query
		Tags.remove({
			_id
		}).then(result=>{
			console.log(result)
			if(result.n===1){
				responseClient(res, 200, 0, '删除成功', result)
			}else{
				responseClient(res, 200, 1, '标签不存在')
			}
		}).catch(err=>{
			console.log('操作数据库出错-->delTage')
			throw err
		})
	},
	editTag(req, res){
		const { _id, name } = req.body
		console.log(_id, name)
		console.log(11111111111)
		Tags.update({ _id }, { name })
			.then(result=>{
		
				responseClient(res, 200, 0, '修改成功')
		
		}).catch(err=>{
			console.log('操作数据库出错-->editTag')
			throw err
		})
	}
}

module.exports = TagsApi