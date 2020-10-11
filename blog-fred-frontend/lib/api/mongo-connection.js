const mongoose = require('mongoose');
require('dotenv/config');

export default async function mongoConnection() {

   const connection = await mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      return connection;
};
