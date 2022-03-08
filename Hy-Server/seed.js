const db = require("./database-mongodb/index.js");
const { order } = require("./database-mongodb/schemas.js");

const orders = [
 
];

 
const insertOrder = function () {
  order
    .create(orders)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertOrder();
