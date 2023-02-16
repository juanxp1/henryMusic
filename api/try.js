import {sequelize} from './src/database/relations.js'

const { User } = sequelize.models

const user = await User.findOne({
  where: { username: 'mguzman' },
  include: ['avatar']
})
console.log(user.toJSON())