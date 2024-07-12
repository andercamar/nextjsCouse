import { HomeIcon, GamepadIcon, AwardIcon, MapIcon, GhostIcon } from "@/components";
import { cn } from "@/helper/cn";
import React from "react";

type NavbarProps = React.ComponentProps<'nav'>
type NavbarListProps = React.ComponentProps<'ul'>
type NavbarListItemProps = React.ComponentProps<'li'>

const  NavbarList  = ({children, className, ...props}: NavbarListProps) =>{
  return (
    <ul className={cn("my-4 border-t border-indigo-400/20 hover:border-indigo-400/40", className)} {...props}>
      {children}
    </ul>
  );
};
const NavbarListItem = ({children, className, ...props}: NavbarListItemProps) =>{
  return (
    <li className={cn("my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100", className)} {...props}>
      {children}
    </li>
  );
};

export const Navbar = ({className, ...props}: NavbarProps) =>{
    return(
        <nav className={cn("flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300", className)} {...props}>
          <div className="flex items-center justify-center">
            <img src="https://ajc-maker.s3.sa-east-1.amazonaws.com/img/Logo+Grande+1.svg" 
                 alt="AJC Maker" 
                 className="max-w-full h-24 p-2">
            </img></div>
          <NavbarList className={"flex-grow"}>
            <NavbarListItem>
              <HomeIcon className="w-4 h-4"/>
              Home
            </NavbarListItem>
            <NavbarListItem>
              <GamepadIcon className="w-4 h-4" />
              Games
            </NavbarListItem>
            <NavbarListItem>
              <AwardIcon className="w-4 h-4"/>
              Top 10
            </NavbarListItem>
            <NavbarListItem>
              <MapIcon className="w-4 h-4"/>
              Walkthroughs
            </NavbarListItem>
          </NavbarList>
          <NavbarList>
            <NavbarListItem>
              <GhostIcon className="w-4 h-4"/>
              User
            </NavbarListItem>
          </NavbarList>
        </nav>
    );
}