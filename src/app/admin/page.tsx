import { redirect } from "next/navigation";
import { getSession } from "@/utils/actions";
import type { Metadata } from "next";

import db from "@/utils/db";

export const metadata: Metadata = {
  title: "admin",
  description: "this is admin page"
};

const AdminPage = async () => {
  const sessionId = await getSession();
  console.log("sessionId", sessionId);

  // If no session ID in the cookie, redirect to the login page
  if (!sessionId) {
    redirect("/login");
  }

  // Find the session from the database
  const session = await db.session.findUnique({
    where: { token: sessionId }
  });

  console.log("sessiondb", session);
  // If session doesn't exist or is expired, redirect to login
  if (!session || session.expiresAt < new Date()) {
    redirect("/login");
  }

  // Fetch the user associated with the session
  const user = await db.user.findUnique({
    where: { id: session.userId }
  });

  // If no user found, invalid session, redirect to login
  if (!user) {
    redirect("/login");
  }

  // If the session is valid, render the admin page
  return (
    <div>
      Welcome to the admin page! Your session is valid. Welcome, {user.name}.
      <div>kkk</div>
    </div>
  );
};

export default AdminPage;
