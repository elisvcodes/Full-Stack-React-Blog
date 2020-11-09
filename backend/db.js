// This package allows us to work with postgres in node
const { Pool } = require('pg');

// Connectioon String
const connectionString = 'postgres://ascgaoij:yvNnjJt7T8pvIj3NGZOhLpcQLTQ5HjIh@lallah.db.elephantsql.com:5432/ascgaoij';
const pool = new Pool({ connectionString });
module.exports = pool