"use client";
// import Image from "next/image";
// import { DEFAULT_MAX_VERSION } from "tls";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("portfolio/project");
  return (
    <div className="text-center text-3xl font-bold underline ">
      welcome to Home page
    </div>
  );
}
