

const Admin = require("./models/admin");
const { admin } = require("./database-mongodb/schemas");





let newAdmin = new admin({
    username: "Bechir01",
    email: "bechir.ghaoui@gmail.com",
    password: "bechir123456789"
  });

  Admin.addAdmin(newAdmin, (err, data) => {
    if (err) {
      console.log({ success: false, msg: err.message });
    } else {
      console.log({ success: true, msg: "admin registered" });
    }
  });