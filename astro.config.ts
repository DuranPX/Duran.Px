import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const environment = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "",
);
const configuredSiteUrl = environment.SITE_URL?.trim();

if (configuredSiteUrl) {
  const parsedSiteUrl = new URL(configuredSiteUrl);

  if (
    parsedSiteUrl.protocol !== "https:" &&
    parsedSiteUrl.hostname !== "localhost"
  ) {
    throw new Error("SITE_URL must use HTTPS (except for localhost).");
  }

  if (parsedSiteUrl.pathname !== "/" || parsedSiteUrl.search || parsedSiteUrl.hash) {
    throw new Error("SITE_URL must be an origin without a path, query, or fragment.");
  }
}

const site = configuredSiteUrl ? new URL(configuredSiteUrl).origin : undefined;

export default defineConfig({
  ...(site ? { site } : {}),
  integrations: site ? [sitemap()] : [],
});
