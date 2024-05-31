"use strict";
const slugField = require("../helpers/slugField");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Blogs", [
      {
        title: "Lorem Sit Amet",
        subTitle:
          "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet",
        slug: slugField("Lorem Sit Amet"),
        description: `<h2>Sequelize</h2><blockquote><p>Sequelize, Node.js uygulamaları için kullanılan popüler bir ORM (Object-Relational Mapping) kütüphanesidir. ORM, ilişkisel veritabanları ile nesne yönelimli programlama dilleri arasında bir köprü görevi görür.</p></blockquote><p></p><h3>Sequelize Nedir?</h3><p><span style="color: rgb(18, 247, 214)">Sequelize</span>, Node.js ile birlikte kullanılan bir <span style="color: rgb(18, 247, 214)">ORM </span>kütüphanesidir ve <span style="color: rgb(18, 247, 214)">MySQL</span>, <span style="color: rgb(18, 247, 214)">PostgreSQL</span>, <span style="color: rgb(18, 247, 214)">SQLite </span>ve <span style="color: rgb(18, 247, 214)">MSSQL </span>gibi çeşitli veritabanlarını destekler. <span style="color: rgb(18, 247, 214)">Sequelize</span>, veritabanı işlemlerini basitleştirir ve <span style="color: rgb(18, 247, 214)">SQL </span>sorguları yazma ihtiyacını azaltır. Bunun yerine, <span style="color: rgb(18, 247, 214)">JavaScript </span>nesneleri kullanarak veritabanı işlemlerini gerçekleştirebilirsiniz.</p><p></p><h3>Migration Nedir?</h3><p><span style="color: rgb(18, 247, 214)">Migration</span>, veritabanı şemasının (tablolar, sütunlar, vb.) zaman içinde değişikliklerinin <span style="color: rgb(18, 247, 214)">yönetilmesi </span>sürecidir. Bir migration dosyası, veritabanında yapılacak değişikliklerin (örneğin, tablo ekleme, sütun değiştirme, tablo silme) adımlarını tanımlar. Bu dosyalar,<span style="color: rgb(18, 247, 214)"> versiyon kontrol sistemleri </span>ile birlikte kullanılabilir ve veritabanı yapısındaki değişikliklerin izlenmesini ve yönetilmesini sağlar.</p><p></p><h3>Sequelize Migration Nedir?</h3><p>Sequelize migration, Sequelize ORM ile veritabanı şemasını yönetmek için kullanılan bir araçtır. Migration dosyaları, veritabanında yapılacak değişiklikleri ve bu değişikliklerin nasıl uygulanacağını tanımlar. Sequelize CLI (Komut Satırı Arayüzü) kullanarak migration dosyaları oluşturabilir, uygulayabilir ve geri alabilirsiniz.</p><h3></h3><h3>Sequelize Migration Nasıl Kullanılır?</h3><p></p><ul><li><p><strong>Sequelize CLI Kurulumu:</strong></p></li></ul><p><code>npm install --save-dev sequelize-cli</code></p><p></p><ul><li><p><strong>Sequelize CLI Yapılandırması:</strong> Proje dizininde <code>.sequelizerc</code> adlı bir yapılandırma dosyası oluşturun ve aşağıdaki gibi yapılandırın:</p></li></ul><p><code>const path = require('path'); </code></p><p><code>module.exports = { config: path.resolve('config', 'config.json'), 'models-path': path.resolve('models'), 'seeders-path': path.resolve('seeders'), 'migrations-path': path.resolve('migrations') };</code></p><p></p><ul><li><p><strong>Veritabanı Bağlantısı Yapılandırması:</strong> <code>config/config.json</code> dosyasında veritabanı bağlantı bilgilerinizi tanımlayın:</p></li></ul><p><code>{ "development": { "username": "root", "password": null, "database": "database_development", "host": "127.0.0.1", "dialect": "mysql" }, "test": { "username": "root", "password": null, "database": "database_test", "host": "127.0.0.1", "dialect": "mysql" }, "production": { "username": "root", "password": null, "database": "database_production", "host": "127.0.0.1", "dialect": "mysql" } }</code></p><p></p><ul><li><p><strong>Migration Dosyası Oluşturma:</strong></p><p><code>npx sequelize-cli migration:generate --name migration-name</code></p><p></p></li><li><p><strong>Migration Dosyasını Düzenleme:</strong> Oluşturulan migration dosyasını açarak, veritabanında yapılacak değişiklikleri tanımlayın:</p></li></ul><p><code>'use strict'; module.exports = { up: async (queryInterface, Sequelize) =&gt; { await queryInterface.createTable('Users', { id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER }, name: { type: Sequelize.STRING }, email: { type: Sequelize.STRING }, createdAt: { allowNull: false, type: Sequelize.DATE }, updatedAt: { allowNull: false, type: Sequelize.DATE } }); }, down: async (queryInterface, Sequelize) =&gt; { await queryInterface.dropTable('Users'); } };</code></p><p></p><ul><li><p><strong>Migration Uygulama:</strong></p></li></ul><p><code>npx sequelize-cli db:migrate</code></p><p></p><ul><li><p><strong>Migration Geri Alma:</strong></p></li></ul><p><code>npx sequelize-cli db:migrate:undo</code></p><p></p><blockquote><h3>Nerelerde Kullanılır?</h3><p>Veritabanı Şeması Yönetimi: Veritabanı tablolarının ve sütunlarının eklenmesi, değiştirilmesi veya silinmesi için kullanılır.</p><p>Versiyon Kontrolü: Veritabanı şemasındaki değişikliklerin izlenmesi ve yönetilmesi için idealdir.</p><p>Takım Çalışması: Farklı geliştiricilerin yaptığı veritabanı değişikliklerinin tutarlı bir şekilde uygulanmasını sağlar.</p></blockquote><p></p>`,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Amet Dolor Sit Lorem",
        subTitle:
          "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet",
        slug: slugField("Amet Dolor Sit Lorem"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas ac enim nunc. Cras eget dui ac turpis luctus dictum. Fusce rhoncus tempor ex, vel efficitur ex suscipit id. Curabitur luctus tellus nec tempor viverra. Sed vel tempus enim. Morbi a ipsum non libero malesuada dapibus. Curabitur hendrerit metus sapien, nec suscipit elit vestibulum eget.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sit Dolor Ipsum Amet",
        subTitle:
          "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet",
        slug: slugField("Sit Dolor Ipsum Amet"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lectus aliquam, malesuada urna vitae, fringilla nulla. Nulla facilisi. Cras nec lacinia justo. Pellentesque et augue a eros interdum vestibulum nec eu nisi. Nullam dapibus libero a diam bibendum, et viverra nunc tempor. Mauris pretium, ex a lacinia malesuada, urna dolor rhoncus libero, at accumsan sapien odio in libero.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ipsum Sit Dolor",
        subTitle:
          "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet",
        slug: slugField("Ipsum Sit Dolor"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper pharetra turpis, vel viverra orci vehicula sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam cursus at ex sit amet vehicula. Integer volutpat risus in libero gravida lobortis. Nulla facilisi. Fusce sollicitudin, nisl at eleifend malesuada, turpis diam tempor sapien, sit amet tincidunt eros arcu a velit.",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dolor Sit Amet Ipsum",
        subTitle:
          "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet",
        slug: slugField("Ipsum Sit Dolor"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor vitae nisi at ullamcorper. Sed placerat odio vitae augue interdum, a mattis felis egestas. Phasellus viverra ultricies arcu, eget dignissim neque consequat nec. Phasellus quis efficitur elit, a aliquet nulla. Sed auctor fermentum tellus vel congue. Pellentesque vel ligula euismod, aliquam nunc at, dapibus nunc.",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Blogs", null, {});
  },
};
