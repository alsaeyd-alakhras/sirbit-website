"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";

export default function CanonicalTag() {
  const pathname = usePathname();
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sirbit-website.vercel.app";

  const canonicalUrl = `${baseUrl}${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
