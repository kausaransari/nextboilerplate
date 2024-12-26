import type { Metadata } from "next";
import Sidebar from "@/components/Admin/AdminSidebar";
import Header from "@/components/Admin/AdminHeader";
import Footer from "@/components/Admin/AdminFooter";
// Metadata for the admin page
export const metadata: Metadata = {
  title: "Login",
  description: "Admin Login"
};

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="login">{children}</div>;
}
