import type { NextConfig } from "next"
import { withPlausibleProxy } from "next-plausible"

const nextConfig: NextConfig = withPlausibleProxy({
  customDomain: "https://plausible.gitpushoriginmain.com",
})({})

export default nextConfig


