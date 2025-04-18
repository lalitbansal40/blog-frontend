"use client"

import * as React from "react"
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Facebook, Instagram, Twitter, Linkedin, Logo } from "@/components/icons";

export function Header() {
  return (
    <header className="container py-3 grid grid-cols-1 grid-rows-1 xl:grid-cols-6 gap-4 flex-wrap items-center justify-around md:justify-between mx-auto">

      <Button variant="link" className="[&_svg]:size-8 stroke" asChild>
        <Link href="/" className="flex items-center">
          <>
            <Logo />   <span className="self-center text-2xl font-semibold whitespace-nowrap">AllTypeBlogs</span>
          </>
        </Link>

      </Button>

      <NavigationMenu className="xl:col-span-3 mx-auto w-full">
        <NavigationMenuList className="flex flex-wrap">
          <NavigationMenuItem>
            <Link href="/" className="text-background">
              <Button variant="link">Home</Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/tag/trending" className="text-background">
              <Button variant="link">Trending</Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/tag/programming" className="text-background">
              <Button variant="link">Programming</Button>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/tag/photography" className="text-background">
              <Button variant="link">Photography</Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pages/about" className="text-background">
              <Button variant="link">About</Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="xl:col-span-2 mx-auto xl:col-start-5 gap-4 xl:gap-2 flex flex-row flex-wrap">
        {/* <Button variant="link" asChild>
          <Link href={"#"}>
            <Facebook />
          </Link>
        </Button> */}

        <Button variant="link" asChild>
          <Link href={"https://www.instagram.com/lalitbansal40/?hl=en"}>
            <Instagram />
          </Link>
        </Button>

        {/* <Button variant="link" asChild>
          <Link href={"https://x.com/FrontendWeb3"}>
            <Twitter />
          </Link>
        </Button> */}

        <Button variant="link" asChild>
          <Link href={"https://www.linkedin.com/in/lalitbansal40/"}>
            <Linkedin />
          </Link>
        </Button>

        {/* <Button className="rounded-2xl"> Subscrible </Button> */}
        <ThemeToggle />
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
