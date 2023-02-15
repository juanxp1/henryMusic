import { Router } from 'express'
import User from '../models/User.js'

const router = Router()

router.post('/register-user', (req, res) => {
  // crear playlist por defecto
  const { user } = req.body
  try {
    User.findOrCreate({
      where: { id: user.user_id },
      defaults: {
        name: user.name || null,
        username: user.username || null,
        email: user.email || null,
        password: null,
        country_id: null,
      }
    })
  }
  catch (error) { console.log(error) }
  res.send('ok')
})

export default router