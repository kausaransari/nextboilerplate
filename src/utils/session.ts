import { getSession } from "next-auth/react";

// Function to check if the user is authenticated
export const isAuthenticated = async () => {
  const session = await getSession();
  return !!session;
};
