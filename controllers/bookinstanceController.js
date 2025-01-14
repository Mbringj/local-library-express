const BookInstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstances.

exports.bookinstance_list = asynchandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance list");
});

// Display detail page for a specific BookInstance.
exports.bookinstance_list = asynchandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance detail: " + req.params.id);
});

// Display BookInstance create form on GET.

exports.bookinstance_create_get = asynchandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
});

// handle BookInstance create on POST.
exports.bookinstance_create_post = asynchandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
});


// handle BookInstance delete form on GET.

exports.bookinstance_delete_get = asynchandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
});

// handle BookInstance delete on POST.
exports.bookinstance_update_post = asynchandler(async (req, res, next) => {   
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
});

// Display BookInstance update form on GET.  
exports.bookinstance_update_post = asynchandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
});