const jwt = require('jsonwebtoken');
const createAuthToken = (info) => {
    return jwt.sign(info, process.env.JWT_SECRET_KEY);
}
module.exports = createAuthToken;