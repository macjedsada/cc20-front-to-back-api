export const authCheck = (req, res, next) => {
  // code body
  console.log("This is middleware");
  if (true) {
    console.log("This is middleware");
    next();
  }
};
