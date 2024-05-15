
const bcryptjs = require('bcryptjs');
const User = require('../models').User;
const Role = require('../models').Role;
const jwt = require('jsonwebtoken');


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
        }, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})
        
        // Cookie'ye token kaydetme
        res.cookie('token', token, {
            httpOnly: true,
            path: "/",
            secure: false,
            sameSite: 'Lax', // veya 'None' olarak ayarlayabilirsiniz
            expires: new Date(Date.now() + 1000 * 60 * 60), // 1 saat sonra sona erecek
        });
        res.json({ message: "Giriş başarılı", success: true, error: false, token });
    } catch (error) {
        res.status(500).json({message: 'Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.', success: false, error: true});
    }
};