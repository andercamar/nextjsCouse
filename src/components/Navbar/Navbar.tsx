import { HomeIcon, GamepadIcon, AwardIcon, MapIcon, GhostIcon} from "@/components";
import { cn } from "@/helper/cn";
import React from "react";
import Link from 'next/link';
import { NavbarProps } from "./types";
import { NavbarList } from "./NavbarList";
import { NavbarListItemLink } from "./NavbarListItemLink";
import { NavbarListItemButton } from "./NavbarListItemButton";

export const Navbar = ({className, ...props}: NavbarProps) =>{
    return(
        <nav className={cn("flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300", className)} {...props}>
          <div className="flex items-center justify-center">
            <img src="https://ajc-maker.s3.sa-east-1.amazonaws.com/img/duck.svg" 
                 alt="AJC Maker" 
                 className="max-w-full h-20 p-2">
            </img></div>
          <NavbarList className={"flex-grow"}>
            <NavbarListItemLink href="/">
              <HomeIcon className="w-4 h-4"/>
              Home
            </NavbarListItemLink>
            <NavbarListItemLink href="/games">
              <GamepadIcon className="w-4 h-4" />
              Games
            </NavbarListItemLink>
            <NavbarListItemLink href="/top-10">
              <AwardIcon className="w-4 h-4"/>
              Top 10
            </NavbarListItemLink>
            <NavbarListItemLink href="/walkthroughs">
              <MapIcon className="w-4 h-4"/>
              Walkthroughs
            </NavbarListItemLink>
          </NavbarList>
          <NavbarList>
            <NavbarListItemLink href="/user">
              <GhostIcon className="w-4 h-4"/>
              User
            </NavbarListItemLink>
          </NavbarList>
        </nav>
    );
}