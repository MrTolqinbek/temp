const bcrypt = require("bcrypt");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("123456", salt);
  await knex("profiles_tags").del();
  await knex("profiles").del();
  await knex("users").del();
  await knex("tags").del();

  await knex("users").insert([
    {
      firstName: "John",
      email: "my@example.com",
      password: hashedPassword,
      role: "admin",
    },
    {
      firstName: "Jane",
      email: "kenaa2@example.com",
      password: hashedPassword,
    },
    {
      firstName: "Mary",
      email: "kenaa3@example.com",
      password: hashedPassword,
    },
    {
      firstName: "Mike",
      email: "kenaa4@example.com",
      password: hashedPassword,
    },
    {
      firstName: "Mary",
      email: "kenaa5@example.com",
      password: hashedPassword,
    },
  ]);
  await knex("profiles").insert([
    {
      user_id: 1,
      image:
        "https://i.pinimg.com/originals/8d/14/5d/8d145d45755555555555555555555555.jpg",
      bio: "I am a full-stack developer",
      location: "New York, NY",
      website: "https://www.google.com",
      github: "https://github.com/jimmyjimmy",
      linkedin: "https://www.linkedin.com/in/jimmy-jimmy",
      twitter: "https://twitter.com/jimmyjimmy",
      facebook: "https://www.facebook.com/jimmyjimmy",
    },
    {
      user_id: 2,
      image:
        "https://i.pinimg.com/originals/8d/14/5d/8d145d4575555555555555555555555.jpg",
      bio: "I am a full-stack developer",
      location: "New York, NY",
      website: "https://www.google.com",
      github: "https://github.com/jimmyjimmy",
      linkedin: "https://www.linkedin.com/in/jimmy-jimmy",
      twitter: "https://twitter.com/jimmyjimmy",
      facebook: "https://www.facebook.com/jimmyjimmy",
    },
  ]);
 await knex("tags").insert([
    {
      name: "javascript",
    },
    {
      name: "react",
    },
    {
      name: "node",
    },
    {
      name: "express",
    },
    {
      name: "mongodb",
    },
    {
      name: "mysql",
    },
    {
      name: "postgresql",
    },
    {
      name: "django",
    },
    {

      name: "python",
    },
    {

      name: "docker",
    },
    {

      name: "git",
    },
  ]);
 await knex("profiles_tags").insert([
    {
      profile_id: 1,
      tag_id: 1,
    },
    {
      profile_id: 1,
      tag_id: 2,
    },
    {
      profile_id: 1,
      tag_id: 3,
    },
  ]);
};
