import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-primarycolor text-white w-64 h-screen p-4">
      <nav>
        <ul>
          <li>
            <Link
              href="/admin"
              className="block py-2 px-4 hover:bg-gray-600 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className="block py-2 px-4 hover:bg-gray-600 rounded"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/admin/settings"
              className="block py-2 px-4 hover:bg-gray-600 rounded"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
