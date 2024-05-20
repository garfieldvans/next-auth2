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
          console.log(credentials?.password)
          console.log(data.token)

          const isValid = await compare(credentials.password, data.user.password);

          if (isValid) {
            return {
              token: data.token,
              name: data.user.fullname, 
              username: data.user.userName, 
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
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.token;
        token.fullname = user.name;
        token.username = user.username;
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.accessToken = token.accessToken;
        session.fullname = token.fullname;
        session.username = token.username;
        session.email = token.email;
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
