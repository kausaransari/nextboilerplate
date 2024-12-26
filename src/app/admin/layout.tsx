import type { Metadata } from "next";
import Sidebar from "@/components/Admin/AdminSidebar";
import Header from "@/components/Admin/AdminHeader";
import Footer from "@/components/Admin/AdminFooter";
// Metadata for the admin page
export const metadata: Metadata = {
  title: "Admin",
  description: "Admin Page"
};

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
