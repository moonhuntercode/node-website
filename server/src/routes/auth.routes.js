//here I create the routes for the request. I have three files, within each one the routes are detailed:
const { loginUser } = require("../controllers/auth.controller");

router.post("/api/user/login", loginUser);

module.exports = router;
