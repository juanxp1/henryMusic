import { Router } from 'express'
import { requiresAuth } from '../auth0.js'
import User from '../models/User.js'

const router = Router()
const { BASE_URL } = process.env

router.get('/login', (req, res) => {
  res.oidc.login({
    returnTo: '/',
    authorizationParams: { redirect_uri: BASE_URL + '/callback' }
  })
})

router.get('/profile', requiresAuth(), (req, res) => {
  console.log(req.oidc.user)
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

router.post('/register-user', (req, res) => {
  const { user } = req.body
  try {
    User.create({
      id: user.user_id,
      name: user.name,
      username: user.username || null,
      email: user.email,
      password: 'no_password',
      country_id: 'khYZgSs4AUve9VHtY8qa1U',
    })
  }
  catch (error) { console.log(error) }
  res.send('ok')
})

export default router