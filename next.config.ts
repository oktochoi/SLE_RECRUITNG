import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 빌드 시 ESLint 오류로 인한 실패를 막습니다.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
