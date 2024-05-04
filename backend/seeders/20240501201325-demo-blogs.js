'use strict';
const slugField = require('../helpers/slugField');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Blogs', [
      {
        title: 'Lorem Sit Amet',
        subTitle: 'Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet',
        slug: slugField('Lorem Sit Amet'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur risus nec mi varius, ac scelerisque mi congue. Integer in diam nulla. Etiam laoreet purus eget enim commodo fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sit amet malesuada magna, in molestie odio. Vivamus tincidunt, purus ac blandit convallis, tortor eros vehicula sapien, id congue dolor metus ut lacus.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Amet Dolor Sit Lorem',
        subTitle: 'Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet',
        slug: slugField('Amet Dolor Sit Lorem'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas ac enim nunc. Cras eget dui ac turpis luctus dictum. Fusce rhoncus tempor ex, vel efficitur ex suscipit id. Curabitur luctus tellus nec tempor viverra. Sed vel tempus enim. Morbi a ipsum non libero malesuada dapibus. Curabitur hendrerit metus sapien, nec suscipit elit vestibulum eget.',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sit Dolor Ipsum Amet',
        subTitle: 'Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet',
        slug: slugField('Sit Dolor Ipsum Amet'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lectus aliquam, malesuada urna vitae, fringilla nulla. Nulla facilisi. Cras nec lacinia justo. Pellentesque et augue a eros interdum vestibulum nec eu nisi. Nullam dapibus libero a diam bibendum, et viverra nunc tempor. Mauris pretium, ex a lacinia malesuada, urna dolor rhoncus libero, at accumsan sapien odio in libero.',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ipsum Sit Dolor',
        subTitle: 'Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet',
        slug: slugField('Ipsum Sit Dolor'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper pharetra turpis, vel viverra orci vehicula sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam cursus at ex sit amet vehicula. Integer volutpat risus in libero gravida lobortis. Nulla facilisi. Fusce sollicitudin, nisl at eleifend malesuada, turpis diam tempor sapien, sit amet tincidunt eros arcu a velit.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dolor Sit Amet Ipsum',
        subTitle: 'Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet',
        slug: slugField('Ipsum Sit Dolor'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor vitae nisi at ullamcorper. Sed placerat odio vitae augue interdum, a mattis felis egestas. Phasellus viverra ultricies arcu, eget dignissim neque consequat nec. Phasellus quis efficitur elit, a aliquet nulla. Sed auctor fermentum tellus vel congue. Pellentesque vel ligula euismod, aliquam nunc at, dapibus nunc.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Blogs', null, {});
  }
};