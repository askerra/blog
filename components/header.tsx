"use client";
import "@/app/globals.css";
import "katex/dist/katex.min.css";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CommandMenu } from "@/components/command-menu";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { allPosts } from "contentlayer/generated";
import { categories } from "@/config/posts";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCategory = categories.some(
    (category) => pathname === `/posts/${category.slug}`,
  );
  const isPost = allPosts.some((post) => post.url === pathname);

  const post = allPosts.find((post) => post.url === pathname);

  const category = isPost
    ? categories.find((category) => category.slug === post?.category)
    : categories.find((category) => pathname === `/posts/${category.slug}`);

  return (
    <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {isHome && (
              <BreadcrumbItem key="root">
                <BreadcrumbLink href="/">Askerra</BreadcrumbLink>
              </BreadcrumbItem>
            )}
            {isCategory && (
              <>
                <BreadcrumbItem key="root">
                  <BreadcrumbLink href="/">Askerra</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/posts/${category?.slug}`}>
                    {category?.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {isPost && (
              <>
                <BreadcrumbItem key="root">
                  <BreadcrumbLink href="/">Askerra</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/posts/${category?.slug}`}>
                    {category?.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href={post?.url}>
                    {post?.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <CommandMenu />
    </header>
  );
}
