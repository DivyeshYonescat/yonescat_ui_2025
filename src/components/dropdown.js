import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


const ProfileDropdown = ({token}) => {
    const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.reload();
    }

    

    return (
        // <div className="relative inline-block text-left px-2.5 pb-0.5 py-2.5" ref={dropdownRef}>
        //     <button type="button" className="inline-flex w-full justify-center" onClick={toggleDropdown} aria-expanded={isOpen} aria-haspopup="true">  <Image src="/images/main/svg/profile-svgrepo-com.svg" width={40} height={40} /> </button>
        //     {(isOpen || isClosing) && (
        //         <div className={` absolute right-0 z-10 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition duration-150 ease-out transform ${isOpen && !isClosing ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} `} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1} style={{ transformOrigin: 'top right' }} >
        //             <div className="py-2 px-2" role="none">
        //                 {token.user_type == "Merchant" ? <div className="dropdown-item"><span>{token.username}</span></div> : <div className="dropdown-item"><span>{token.username}</span></div>}
        //                 {token.user_type == "Merchant" ? <div className="dropdown-item">  <Link href="/invoice" className="p-0">Invoice</Link></div> : ""}
        //                 <div className="dropdown-item"><span >Profile</span> </div>
        //                 <div className="dropdown-item"><button type="button" onClick={logout} className="nav-link text-start">Logout</button></div>


        //             </div>
        //         </div>
        //     )}
        // </div>
        <Menu as="div" className="relative inline-block text-left">
      
        <MenuButton className=" shadow-none bg-transparent inline-flex w-full  justify-center  rounded-md  text-sm font-semibold">
            <Image src="/images/main/svg/user-profile-icon.svg" alt='menu button' width={30} height={30} />
        </MenuButton>
    

      <MenuItems transition className="absolute right-0 z-10 mt-2 w-40 origin-top-right  shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in" >
        <div className="dropdwon-list py-2 px-2 backdrop-blur-[8px] rounded-md" style={{background:"rgba(255, 255, 255, 0.6)",  backdropFilter:"blur(8px)"}}>
          <MenuItem>
            <div className="flex flex-row font-bold px-1 py-1 rounded-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" > 
               <Image src={"/images/main/menu/dropdown/avatar-icon.svg"} alt='avatar-icon' width={15} height={15}  />  <span className='ml-1.5 text-[14px]'>Divyesh</span> 
            </div>
            {/* {token.user_type == "Merchant" ?
            <div className="block font-bold px-2 py-2 rounded-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" > {token.username} </div>
            : <div className="block font-bold px-2 py-2 rounded-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" > {token.username} </div>
            } */}
          </MenuItem>
          
            <MenuItem>
              <Link href="/invoice" className="flex flex-row font-bold px-1 py-1 rounded-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" >
                <Image  src={"/images/main/menu/dropdown/invoice-icon.svg"} alt='invoice-icon' width={15} height={15}  /> <span className='ml-1.5 text-[14px]'>Invoice</span>
              </Link>
            </MenuItem>
          
          <MenuItem>
              <div className='flex flex-row font-bold px-1 py-1 text-sm rounded-md text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'>
                <Image src={"/images/main/menu/dropdown/id-proof-line-icon.svg"} alt='id-proof-line-icon' width={15} height={15}  />
                <span className='ml-1.5 text-[14px]'>Profile</span> 
              </div>
          </MenuItem>
          <MenuItem>
            <div className="flex flex-row font-bold px-1 py-1 text-sm rounded-md text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
              <button type="button" className='flex flex-row bg-transparent w-full p-0 text-start text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden' onClick={logout} >
                <Image src={"/images/main/menu/dropdown/power-off-icon.svg"} alt='Logout' width={15} height={15}  />
                <span className='ml-1.5 text-[14px]'> Logout </span> 
              </button>
            </div>  
          </MenuItem>
         
          
          {/* <MenuItem>
            <a href="#" className="block font-bold px-2 py-2 text-sm rounded-md text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" > 
                Support 
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" className="block font-bold px-2 py-2 rounded-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" >
              License </a>
          </MenuItem> */}
        </div>
      </MenuItems>
    </Menu>
    );
};

export default ProfileDropdown;