import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { register } from "controllers/user";

import type { User } from "models/user";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async session({ session }) {
      const { user } = session;
      try {
        if (!user) {
          return session;
        }

        const userBody: Omit<User, "id"> = {
          email: user.email || "",
          avatar: user.image || "",
          username: user.name || "",
        };

        const [userFromDB] = await register(userBody);

        if (userFromDB) {
          session.userId = userFromDB.id;
        }
        return session;
      } catch (error) {
        console.log(error);
        return session;
      }
    },
  },
});
