// const { MongoClient } = require("mongodb");
// const Db = process.env.DATABASE_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// var _db;

// module.exports = {
//     connectToServer: function (callback) {
//         client.connect(function (err, db) {
//             // Verify we got a good 'db' object
//             if (db) {
//                 _db = db.db("employees");
//                 console.log("Successfully connected to MongoDB.");
//             }
//             return callback(err);
//         });
//     },
//     getDb: function () {
//         return _db;
//     }
// };

const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB