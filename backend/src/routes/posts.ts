import express from 'express'
import posts from '../data/posts.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(posts)
})

export default router
