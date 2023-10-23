import { AuthenticationError } from "apollo-server-core";
import jwt from "jsonwebtoken";

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1]; // Add a space after "Bearer" to properly split the token
    if (token) {
      try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        return user;
      } catch (error) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
  }
  throw new AuthenticationError("Authorization header must be provided");
};
