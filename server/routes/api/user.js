// IMPORT DEPENDENCIES
// ---------------------------------------------------
const router = require("express").Router();
const userController = require("../../controllers/usersController");

// API ROUTES
// ---------------------------------------------------
// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// EXPORT ROUTES
// ---------------------------------------------------
module.exports = router;
