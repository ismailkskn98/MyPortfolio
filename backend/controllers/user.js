const Blog = require('../models').Blog;
const Category = require('../models').Category;
const User = require('../models').User;
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: path.join(__dirname, '..' ,'public/images') })

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

exports.get_blog_by_slug = async (req, res) => {
    const { slug } = req.params;
    try {
        const blog = await Blog.findOne({
            where: { slug },
            include: [{
                    model: Category,
                    attributes: ['name'],
                }, {
                    model: User,
                    attributes: ['firstname', 'lastname']
                }
            ],
            attributes: ['title', 'slug', 'subtitle', 'description', 'createdAt']
        })
        if(!blog) {
            return res.status(404).send({ message: 'Hiç blog bulunamadı. Lütfen daha sonra tekrar deneyin.' });
        }
        return res.send(blog);
    } catch (error) {
        res.status(500).send({message: 'Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.'});
    }
}

exports.get_last_blog = async (req, res) => {
    try {
        const lastBlog = await Blog.findOne({
            order: [['id', 'DESC']],
            attributes: ['title', 'subtitle', 'slug', 'createdAt'],
            include: [{
                    model: Category,
                    attributes: ['name'],
                }, {
                    model: User,
                    attributes: ['firstname'],
                }
            ]
        })
        if(!lastBlog) {
          return res.status(404).json({message: 'blog bulunamadı. Lütfen daha sonra tekrar deneyin.'});
        }
        return res.json(lastBlog);
    } catch (error) {
        res.status(500).json({message: 'Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.'});
    }
} 