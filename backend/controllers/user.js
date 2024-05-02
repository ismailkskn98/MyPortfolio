const Blog = require('../models').Blog;
const Category = require('../models').Category;
const User = require('../models').User;

exports.get_blogs = async (req, res) => {
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
    res.json(blogs);
}