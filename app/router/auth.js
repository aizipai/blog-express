//这里的接口要验证权限
import Express from 'express'
import Tags from '../models/tags'
import {responseClient} from '../utils/index.js'

const router = Express.Router()

// router.use('/addTag',require('./'))


module.exports = router