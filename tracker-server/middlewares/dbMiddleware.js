//Middleware to check databse connection 
export const confirmDBconnection = (req, res, next) => {
  console.log("Checking Middleware");
  next();
}

export const tokenAuthentication = () => {
  
}