"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/nav/navigation-menu";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start data-[orientation=vertical]:gap-6">
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/details">Details</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/contact-us">Contact Us</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="md:hidden ml-2">
        <Button
          className="rounded-full text-base w-full sm:w-auto"
          size="lg"
          asChild
        >
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSf-k7SDEs0sekfM0YoJJOmO7_6e7bDFgYinG664yeRKyPO6cQ/viewform"
            }
            target="_blank"
          >
            Apply Now <ArrowUpRight className="h-5 w-5 text-pink-400" />
          </Link>
        </Button>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
