import dbConnect from "lib/dbConnect";

import type { User } from "models/user";
import UserModel from "models/user";

import { emailValidator } from "utils/validators/email";

export async function register(
  userBody: Omit<User, "id">
): Promise<[User | null, string | null]> {
  try {
    const email = userBody.email || "";
    const isEmailValid = emailValidator(email);

    if (!isEmailValid) {
      return [null, "Email is not valid"];
    }

    await dbConnect();

    let user: User | null = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create(userBody);
    }

    return [user, null];
  } catch (error) {
    const message = (error as Error)?.message || "Something went wrong";
    return [null, message];
  }
}
