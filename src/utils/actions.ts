"use server";
import db from "./db";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
// import { useSession } from "next-auth/react";

export const getRoles = async () => {
  const roles = await db.role.findMany();
  console.log(roles);
  return [roles];
};

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session"); // Assuming the session cookie is named "session"
  return session?.value || null;
}

export const handleLogout = async () => {
  // Delete session from the database
  const sessionId = await getSession();
  if (sessionId) {
    await db.session.delete({
      where: { token: sessionId }
    });
  }

  // Clear the session cookie on the client-side
  const cookieStore = await cookies();
  cookieStore.set("session", "", { maxAge: -1 }); // Expire the session cookie immediately

  // Redirect to login page
  redirect("/login");
};

// export const getUserData = async () => {
//   const sessiondata = useSession();
//   return sessiondata;
// };
