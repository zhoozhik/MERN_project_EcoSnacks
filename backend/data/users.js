import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Vladimir Pu',
    email: 'vladimir@example.com',
    password: bcrypt.hashSync('123456', 10),
   
  },
  {
    name: 'Alex Nav',
    email: 'alex@example.com',
    password: bcrypt.hashSync('123456', 10),

  },
]

export default users
