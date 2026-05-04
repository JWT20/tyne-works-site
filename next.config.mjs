import createMDX from "@next/mdx";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const withMDX = createMDX({});
const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  output: "export",
  outputFileTracingRoot: projectRoot,
  images: { unoptimized: true },
};

export default withMDX(nextConfig);
