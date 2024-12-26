import React from "react";
import { handleLogout } from "@/utils/actions";

const Header: React.FC = () => {
  return (
    <header className="bg-primarycolor text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Admin Dashboard</h1>
        <div>
          <span
            className="inline-block text-gray-100 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
