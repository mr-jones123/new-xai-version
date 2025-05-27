import { NextResponse } from "next/server";
// The client you created from the Server-Side Auth instructions
import { createClient } from "@/utils/supabase/server";

//route

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const isLocalEnv = process.env.NODE_ENV === "development";
      
      if (isLocalEnv) {
        // In development, use TEST_SITE_URL
        return NextResponse.redirect(`${process.env.TEST_SITE_URL || origin}${next}`);
      } else {
        // In production, use PRODUCTION_SITE_URL
        return NextResponse.redirect(`${process.env.PRODUCTION_SITE_URL_NEW || origin}${next}`);
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
