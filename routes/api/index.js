const router = require("express").Router();
const bookRoutes = require("./books");

router.use("/books", bookRoutes);

module.exports = router;
© 2020 GitHub, Inc