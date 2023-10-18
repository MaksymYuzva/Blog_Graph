import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model";

class AuthService {
  async register(username: any, email: string, password: any) {
    const existingUser = await userModel.findUserByEmail(email);

    if (existingUser) {
      throw new Error("User with this email already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.createUser(username, email, hashedPassword);
    const token = jwt.sign({ userId: user.id }, "secret-key", {
      expiresIn: "1h", // Adjust the expiration time as needed
    });
    return { newUser, token };
  }

  async login(email: string, password: any) {
    const user = await userModel.findUserByEmail(email);

    if (!user) {
      throw new Error("User not found.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password.");
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, "your-secret-key", {
      expiresIn: "1h", // Adjust the expiration time as needed
    });

    return { user };
  }
}

export default new AuthService();
