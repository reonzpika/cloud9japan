'use client'

import { TableOfContents } from '@/components/sections/table-of-contents'
import { HOME_TOC_SECTIONS } from '@/lib/home-toc-sections'

type HomePageLayoutProps = {
  children: React.ReactNode
}

export function HomePageLayout({ children }: HomePageLayoutProps) {
  return (
    <div className="container pt-12 md:pt-16 lg:pt-20 pb-0 grid lg:grid-cols-[250px_1fr] gap-8 lg:gap-12">
      <aside className="hidden lg:block">
        <TableOfContents sections={HOME_TOC_SECTIONS} variant="full" />
      </aside>
      <div className="min-w-0">
        {children}
      </div>
    </div>
  )
}
