import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "../../api";
import { compare } from "bcrypt";

const authOptions = {
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorizing user with credentials:", credentials);
        
        try {
          const data = await loginUser(credentials.email, credentials.password);
          console.log("Response from login API:", data);

          // Compare the provided password with the hashed password from the response
          const isValid = await compare(credentials.password, data.password);

          if (isValid) {
            return {
              token: data.access,
              name: data.name, // assuming name is returned from API
              email: credentials.email,
            };
          } else {
            console.error("Invalid password");
            return null;
          }
        } catch (error) {
          console.error("Login API error:", error);
          return null;
        }
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
    signIn: async ({ account }) => {
      if (account.provider === "credentials") return true;
      return false;
    },
    jwt: async ({ token, user, account }) => {
      if (user && account.provider === "credentials") {
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
