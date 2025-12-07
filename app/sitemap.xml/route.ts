import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const urls = [
    "",
    "/en",
    "/ar",
    "/en/services",
    "/ar/services",
    "/en/about",
    "/ar/about",
    "/en/contact",
    "/ar/contact",
    "/en/portfolio",
    "/ar/portfolio",
  ];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${baseUrl}${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join("")}
    </urlset>
  `.trim();

  return new NextResponse(sitemap, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
