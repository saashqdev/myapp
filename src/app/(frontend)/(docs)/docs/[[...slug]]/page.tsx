import { source } from '@/lib/source'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { type ReactElement } from 'react'
import {
  PageArticle,
  PageBreadcrumb,
  PageFooter,
  PageLastUpdate,
  PageRoot,
  PageTOC,
  PageTOCItems,
  PageTOCPopover,
  PageTOCPopoverContent,
  PageTOCPopoverItems,
  PageTOCPopoverTrigger,
  PageTOCTitle,
} from 'fumadocs-ui/layouts/docs/page'

export default async function Page(props: {
  params: Promise<{ slug: string[] }>
}): Promise<ReactElement> {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (page == null) {
    notFound()
  }

  const { body: Mdx, toc, lastModified } = await page.data.load()

  return (
    <PageRoot
      toc={{
        toc,
        single: false,
      }}
    >
      {toc.length > 0 && (
        <PageTOCPopover>
          <PageTOCPopoverTrigger />
          <PageTOCPopoverContent>
            <PageTOCPopoverItems />
          </PageTOCPopoverContent>
        </PageTOCPopover>
      )}
      <PageArticle>
        <PageBreadcrumb />
        <h1 className="text-3xl font-semibold">{page.data.title}</h1>
        <p className="text-lg text-fd-muted-foreground">{page.data.description}</p>
        <Mdx components={{ ...defaultMdxComponents }} />
        {lastModified && <PageLastUpdate date={lastModified} />}
        <PageFooter />
      </PageArticle>
      {toc.length > 0 && (
        <PageTOC>
          <PageTOCTitle />
          <PageTOCItems variant="clerk" />
        </PageTOC>
      )}
    </PageRoot>
  )
}

export async function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params
  const page = source.getPage(resolvedParams.slug)

  if (page == null) notFound()

  return {
    title: `${page.data.title} | inTake`,
    description: page.data.description,
  } satisfies Metadata
}
