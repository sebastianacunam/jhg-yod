import jwt from 'jsonwebtoken';
import { envs } from '../conf/envs.js';

const { JWT_SECRET } = envs;

const generateJWT = (id) => {
    return jwt.sign( { id }, JWT_SECRET, {
        expiresIn: '30d',
    });
};

export default generateJWT;