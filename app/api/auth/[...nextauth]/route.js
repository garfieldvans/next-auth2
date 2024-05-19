"use client";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = NextAuth({
  secret: process.env.SECRET,
  nextUrl: process.env.NEXTAUTH_URL,
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        //databaselookup
        const response = await fetch(
          "localhost:3080/api/users/login",
          {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        if (response.status == 200) {
          return {
            token: data.access,
            name: credentials.email,
            email: credentials.email,
          };
        }
        return null;
      },
    }),
  ],
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
    },
    warn(code) {
      console.warn(code);
    },
    debug(code, metadata) {
      console.debug(code, metadata);
    },
  },
  callbacks: {
    signIn: async ({ account, profile }) => {
      if (account.provider == "credentials") return true;
    },
    jwt: async ({ token, user, account }) => {
      if (user && account.provider == "credentials") {
        token.accessToken = user.token;
        token.provider = account.provider;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.accessToken = token.accessToken;
        session.provider = token.provider;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

const handler = authOptions;

export { handler as GET, handler as POST };
