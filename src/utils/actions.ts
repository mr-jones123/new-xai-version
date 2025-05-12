"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

type Provider = "google" | "github";
//ssr

const signInWith = (provider: Provider) => async (): Promise<void> => {
  const supabase = await createClient();

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });

  if (error) {
    console.error(`Error signing in with ${provider}:`, error.message);
    return;
  }

  console.log("Sign-in data:", data);

  if (data.url) {
    redirect(data.url);
  } else {
    throw new Error("Redirect URL is null");
  }
};

const signInWithGithub = signInWith("github");
const signInWithGoogle = signInWith("google");

export { signInWith, signInWithGithub, signInWithGoogle };
