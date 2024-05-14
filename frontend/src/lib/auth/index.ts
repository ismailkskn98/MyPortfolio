import { jwtVerify } from 'jose';

const getJwtSecretKey = () => {
    const secretKey = process.env.JWT_SECRET_KEY;
    
    if(!secretKey) {
        throw new Error('Jwt secret key bulunamadı.');
    }
    return new TextEncoder().encode(secretKey);
}

export async function verifyJwtToken(token: string) {
    try {
       const {payload} = await jwtVerify(token, getJwtSecretKey());
       return payload;
    } catch (error) {
        return null;
    }
}