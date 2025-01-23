'use client';
// import Image from "next/image";
// import { DEFAULT_MAX_VERSION } from "tls";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("portfolio/project");
  return (
<div>hello hi there</div>

  );
}
