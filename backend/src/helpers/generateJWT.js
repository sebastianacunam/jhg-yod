import jwt from 'jsonwebtoken';
import { envs } from '../conf/envs.js';

const { JWT_SECRET, JWT_REFRESH, NODE_ENV } = envs;
const generateJWT = (id) => {
    const expiresIn = 60 * 15;
    const token = jwt.sign({ id }, JWT_SECRET, { expiresIn });
    return { token, expiresIn };
};

export const generateRefreshToken = (id, res) => {
    try {
        const expiresIn = 60 * 60 * 24 * 30;
        const refreshToken = jwt.sign({ id }, JWT_REFRESH, { expiresIn });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: !(NODE_ENV === "development"),
            expires: new Date(Date.now() + expiresIn * 1000)
        })
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

export default generateJWT;