import jwt from 'jsonwebtoken'
import { boolean } from 'webidl-conversions'

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

export default generateToken