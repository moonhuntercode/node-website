const slugify = require("slugify");

//the function pre of the postSchema allows us run a function between the validate and the store article on the database
postSchema.pre("validate", function (next) {
  const post = this;

  if (post.title) {
    post.slug = slugify(post.title, { lower: true, strict: true }); // We use slugify to create the slug with the title, before save the article in the database
  }

  next();
});