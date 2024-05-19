"use server";

import { signIn } from "next-auth/react";

export async function loginAction(formData) {
  // console.log(formData)
  await signIn("credentials", {
    email: formData.email,
    password: formData.password,
    callbackUrl: "/pages/dashboard",
  });
}
