import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model";
import { Context } from "@/app/api/graphql/route";

class AuthService {
  async register(
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    context: Context
  ) {
    const existingUser = await userModel.findUserByEmail(email, context);

    if (existingUser) {
      throw new Error("User with this email already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.createUser(
      username,
      email,
      hashedPassword,
      context
    );
    // const token = jwt.sign({ userId: user.id }, "secret-key", {
    //   expiresIn: "1h", // Adjust the expiration time as needed
    // });
    return { newUser };
  }

  async login(email: string, password: string, context: Context) {
    const user = await userModel.findUserByEmail(email, context);

    if (!user) {
      throw new Error("User not found.");
    }

    const isPasswordValid = await bcrypt.compare(password, password);

    if (!isPasswordValid) {
      throw new Error("Invalid password.");
    }

    // Generate a JWT token
    // const token = jwt.sign({ userId: user.id }, "your-secret-key", {
    //   expiresIn: "1h", // Adjust the expiration time as needed
    // });

    return { user };
  }
}

export default new AuthService();
