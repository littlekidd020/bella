"use client";

import dynamic from "next/dynamic";

const GirlDetailsClient = dynamic(() => import("./GirlDetailsClient"), {
  ssr: false,
});

export default function ClientWrapper() {
  return <GirlDetailsClient />;
}
