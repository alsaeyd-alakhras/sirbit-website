import { headers } from "next/headers";

export default async function CanonicalTag() {
  const headersList = await headers(); // IMPORTANT FIX

  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "https";
  const pathname = headersList.get("x-invoke-path") || "";

  const canonicalUrl = `${protocol}://${host}${pathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
