import React, { useState } from "react";

const tabs = () => {
  const [activeTab, setActiveTab] = useState("Project");
  return (
    <div>
      <div className="text-xs sm:text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-row gap-1  sm:flex-row justify-evenly  flex-wrap -mb-px">
          <li className="me-2 ml-2 ">
            <a
              href="project"
              onClick={() => setActiveTab("Project")}
              className={`inline-block sm:p-4 px-1.2 border-b-4 rounded-t-lg ${
                activeTab === "Project"
                  ? "text-[#E84C3D] border-[#E84C3D]"
                  : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              aria-current={activeTab === "Project" ? "page" : undefined}
            >
              Project
            </a>
          </li>
          <li className="me-2">
            <a
              href="saved"
              onClick={() => setActiveTab("Saved")}
              className={`inline-block sm:p-4 px-1.2 border-b-4 rounded-t-lg ${
                activeTab === "Saved"
                  ? "text-[#E84C3D] border-[#E84C3D]"
                  : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              aria-current={activeTab === "Saved" ? "page" : undefined}
            >
              Saved
            </a>
          </li>
          <li className="me-2">
            <a
              href="shared"
              onClick={() => setActiveTab("Shared")}
              className={`inline-block sm:p-4 px-1.2 border-b-4 rounded-t-lg ${
                activeTab === "Shared"
                  ? "text-[#E84C3D] border-[#E84C3D]"
                  : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              aria-current={activeTab === "Shared" ? "page" : undefined}
            >
              Shared
            </a>
          </li>
          <li className="me-2">
            <a
              href="achievments"
              onClick={() => setActiveTab("Achievments")}
              className={`inline-block sm:p-4 px-1.2 border-b-4 rounded-t-lg ${
                activeTab === "Achievments"
                  ? "text-[#E84C3D] border-[#E84C3D]"
                  : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              aria-current={activeTab === "Achievments" ? "page" : undefined}
            >
              Achievments
            </a>
          </li>
          <li className="me-2 hidden sm:block">
            <a
              href="#"
              className="inline-block sm:p-4 px-0.5 border-b-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default tabs;
