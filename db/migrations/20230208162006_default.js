/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("id").primary();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.string("firstName").notNullable();
      table.string("lastName");
      table.string("role").defaultTo("user");
    })
    .createTable("profiles", function (table) {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .unique();
      table.string("username").unique();
      table.string("bio");
      table.string("image");
      table.string("location");
      table.string("website");
      table.string("twitter");
      table.string("facebook");
      table.string("github");
      table.string("linkedin");
    })
    .createTable("tags", function (table) {
      table.increments("id").primary();
      table.string("name").unique();
    })
    .createTable("profiles_tags", function (table) {
      table.increments("id").primary();
      table
        .integer("profile_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("profiles");
      table
        .integer("tag_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tags");
      table.unique(["profile_id", "tag_id"]);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("profiles_tags")
    .dropTableIfExists("tags")
    .dropTableIfExists("profiles")
    .dropTableIfExists("users");
};
