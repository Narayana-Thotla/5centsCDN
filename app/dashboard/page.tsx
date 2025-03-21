"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, Bell, Search, ChevronRight, Filter } from "lucide-react";
import Image from "next/image";
import Tabs from "@/components/tabs";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const [loading, setloading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [posts, setPosts] = useState<any>();
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [search, setsearch] = useState("");
  const itemsPerPage = 5;
  const paginatedPosts = posts?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwt-5centCDN");

    if (!token) {
      router.push("/");
      alert("Unauthorized , please Login!!");
    } 

    getServerSideProps();
  }, []);

  const getServerSideProps = async () => {
    try {
      setloading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      // console.log("data:", data.slice(0, 20));
      if (data) setPosts(data.slice(0, 20));
      setloading(false);
      return { props: { initialPosts: data.slice(0, 20) } };
    } catch (error) {
      return { props: { initialPosts: [], error: "Error loading posts." } };
    }finally{
      setloading(false)
    }
  };

  const handleSubmit: any = (e: any) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      alert("Search input must be atleast 4 characters!");
    }
    const filteredItems = posts.filter((item: any) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    // console.log("search input:", filteredItems, search);

    if (filteredItems) {
      setPosts(filteredItems);
      setsearch("");
    } else {
      alert("No such user found!");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-[#E84C3D] transition-all duration-300 fixed h-full hidden sm:block`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ${
          isSidebarOpen ? "sm:ml-64" : "sm:ml-20"
        } transition-all duration-300`}
      >
        {/* Header */}
        <div>
          <Header />
        </div>

        {/* Tabs and Search */}

        <div className="bg-white rounded-lg shadow-sm  sm:mt-4  sm:m-4 ">
          <h1 className=" text-sm  sm:text-xl font-semibold p-3.5 sm:p-4">
            Dashboard
          </h1>
          <div className="p-0 sm:p-4 sm:flex justify-between items-center">
            
            <div className="">
              <Tabs />
            </div>

            <div className="flex items-center gap-2 m-2 mt-4 sm:m-2">
              <div className="hidden sm:block">
                <button className="px-3 py-1 text-gray-500 border rounded-md flex gap-1 ">
                  <span className="px-0 py-1">
                    <Filter />
                  </span>
                  <span>Filter</span>
                </button>
              </div>
              <div className="relative text-xs">
                <form action="" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search by id or Title"
                    className="pl-4 pr-10 py-2 border rounded-md w-64 mx-1.5 sm:w-64"
                    value={search}
                    onChange={(e) => {
                      setsearch(e.target.value);
                    }}
                  />
                  <button type="submit">
                    <Search className="w-5 h-5 sm:w-7 sm:h-7 bg-[#E84C3D] rounded-lg p-1.5 sm:p-2 absolute right-3 top-1/2 transform -translate-y-1/2 text-white " />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* //-------------------------------------------------------------------------------- */}

          {loading ? (
            <div className="flex justify-center items-center h-72 ">
              <div className="w-12 h-12 border-4 border-[#E84C3D] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E84C3D] text-white">
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Title</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPosts?.map((post: any, index: number) => (
                  <tr
                    key={post.id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-orange-50" : "bg-white"
                    } hover:bg-orange-100 transition`}
                  >
                    <td className="p-3">{post.id}</td>
                    <td className="p-3">{post.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Pagination Controls */}
          <div className="mt-3 flex justify-center gap-4">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="bg-[#E84C3D] text-white px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 disabled:opacity-50 transition"
            >
              Previous
            </button>
            <button
              disabled={page * itemsPerPage >= posts?.length}
              onClick={() => setPage(page + 1)}
              className="bg-[#E84C3D] text-white px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 disabled:opacity-50 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;
