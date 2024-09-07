import { cn } from "@/helper/cn";
import { NavbarListItemProps } from "./types";

export const NavbarListItem = ({children, className, ...props}: NavbarListItemProps) =>{
    return (
      <li className={cn("my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100", className)} {...props}>
        {children}
      </li>
    );
  };