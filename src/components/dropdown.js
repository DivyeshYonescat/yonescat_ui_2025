import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const ProfileDropdown = ({ token }) => {
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  }



  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className={"bg-transparent border-0 hover:bg-transparent hover:border-0"}>
              <Image src="/images/main/svg/user-profile-icon.svg" alt='menu button' width={30} height={30} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            {token.user_type == "Merchant" ?
              <div className="flex flex-row items-center font-bold text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" >  
               <Image src={"/images/main/menu/dropdown/avatar-icon.svg"} className='mr-[10px]' alt='avatar-icon' width={20} height={20} />
                {token.username} </div> : 
              <div className="flex flex-row items-center font-bold px-2 py-2 rounded-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" > 
                 <Image src={"/images/main/menu/dropdown/avatar-icon.svg"} className='mr-[10px]' alt='avatar-icon' width={20} height={20} />
                {token.username} </div>
            }
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
               <Link href="/invoice" className="flex flex-row font-bold w-full rounded-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" >
                  <Image src={"/images/main/menu/dropdown/invoice-icon.svg"} className='mr-[10px]' alt='invoice-icon' width={15} height={15} /> <span className='ml-1.5 text-[14px]'>Invoice</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className='flex flex-row font-bold text-sm rounded-md text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'>
                <Image src={"/images/main/menu/dropdown/id-proof-line-icon.svg"} className='mr-[7px]' alt='id-proof-line-icon' width={20} height={15} />
                <span className='ml-1.5 text-[14px]'>Profile</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer " onClick={logout}>
            <div className="flex flex-row font-bold text-sm rounded-md text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
              <Image src={"/images/main/menu/dropdown/power-off-icon.svg"} className='mr-[7px]' alt='Logout' width={15} height={15} />
              <span className='ml-1.5 text-[14px]'> Logout </span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>);
};

export default ProfileDropdown;