import React from "react";
import { Bell, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("jwt-5centCDN"); // Remove token
    console.log("User logged out");
    router.push("/"); // Redirect to login page
  };

  return (
    <div>
      <div className="bg-white p-4 hidden  sm:flex justify-between items-center border-b ">
        <div className="flex  items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div>
              <div className="text-sm font-medium">Lorem Ips</div>
              <div className="text-xs text-gray-500">user</div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Bell className="w-5 h-5 text-gray-500" />
          <button
            onClick={handleLogout}
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default header;
