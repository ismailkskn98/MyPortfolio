const Blog = require('../models').Blog;
const Category = require('../models').Category;
const User = require('../models').User;

exports.get_blogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            include: [{
                model: User,
                attributes: ['firstname'],
            }, {
                model: Category,
                attributes: ['name'],
            }
            ],
        });
        if (blogs.length === 0) {
            return res.status(404).send({ message: 'Hiç blog bulunamadı. Lütfen daha sonra tekrar deneyin.' });
        }
        res.send(blogs);
    } catch (error) {
        return res.status(500).send({ message: 'Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.' });
    }
}