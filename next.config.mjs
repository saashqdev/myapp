import { withPayload } from '@payloadcms/next/withPayload'
import { withContentCollections } from '@content-collections/next'
import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withContentCollections(
  withMDX(withPayload(nextConfig, { devBundleServerPackages: false })),
)
