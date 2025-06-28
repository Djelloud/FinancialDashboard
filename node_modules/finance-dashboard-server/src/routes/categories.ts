import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.json({ message: 'Categories endpoint - to be implemented' })
})

export default router 