
const bcryptjs = require('bcryptjs');
const User = require('../models').User;
const Role = require('../models').Role;
const jwt = require('jsonwebtoken');

exports.get_login = (req, res) => {};

exports.post_login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({
            where: {username},
            attributes: ['username', 'firstname', 'lastname', 'password', 'email'],
            include: [{
                model: Role,
                attributes: ['rolename'],
            }],
        });
        if(!user) {
            // böyle bir username yok ise
            return res.status(400).json({message: 'Hatalı email ya da parola'});
        }

        // Parola kontrolü
        const passwordMatch = await bcryptjs.compare(password, user.password);
        if(!passwordMatch) {
            // şifre eşleşmiyorsa
            return res.status(400).json({message: 'Hatalı email ya da parola', success: false, error: true});
        }

        // JWT token oluşturma
        const token = jwt.sign({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.Roles[0].rolename
        }, process.env.JWT_SECRET_KEY)
        
        // Cookie'ye token kaydetme
        res.cookie('token', token, {
            httpOnly: true, // Tokenı yalnızca sunucu tarafında erişilebilir
            path:"/",
            secure: false, // production = true
            sameSite:'none', // production = 'strict'
            maxAge: 1000 * 60 * 3, // 3 dk zamanlayıcı
        });
        res.json({ message: "Giriş başarılı", success: true, error: false, token });
    } catch (error) {
        res.status(500).json({message: 'Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.', success: false, error: true});
    }
};
exports.get_signup = (req, res) => {};
exports.post_signup = (req, res) => {};
exports.logout = (req, res) => {};