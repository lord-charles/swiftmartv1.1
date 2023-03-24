import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
// import type { NextAuthOptions } from "next-auth";
import { User } from "next-auth";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email) token._id = user.email;
      if (user?.token) token.token = user.token;
      return token;
    },
    async session({ session, token }) {
      if (user?.email) token._id = user.email;
      if (user?.token) token.token = user.token;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        const res = await fetch(
          "https://ecommerce2023api.onrender.com/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

        const data = await res.json();

        console.log(data, User);
        if (data) {
          return {
            email: data.user,
            token: data.token,
          };
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
});
