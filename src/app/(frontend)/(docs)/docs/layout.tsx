import { DocsLayout } from 'fumadocs-ui/layouts/notebook'
import type { ReactNode } from 'react'
import { baseOptions } from '@/app/(frontend)/(docs)/layout.config'
import { source } from '@/lib/source'

import Image from 'next/image'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        defaultOpenLevel: 1,
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node)
            if (!meta) return option

            return {
              ...option,
              icon: (
                <div
                  className="rounded-md border bg-linear-to-t from-fd-background/80 p-1  [&_svg]:size-5"
                  style={{
                    color: `hsl(var(--${meta.file.dirname}-color))`,
                    backgroundColor: `hsl(var(--${meta.file.dirname}-color)/.3)`,
                  }}
                >
                  {node.icon}
                </div>
              ),
            }
          },
        },
      }}
      nav={{
        title: (
          <div className="flex items-center justify-center gap-2 font-semibold text-sm">
            <Image
              src="https://5xfmztgsig.ufs.sh/f/ZzCwT4wrsqrVtobqq9xNxCS7Zb4WiHRBPtFmL5aoKp6vgMA2"
              alt="HextaUI"
              width={17}
              height={17}
            />
            HextaUI
          </div>
        ),
        transparentMode: 'always',
      }}
    >
      {children}
    </DocsLayout>
  )
}
