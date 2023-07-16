import { useState } from "react";
import { SlArrowDown } from 'react-icons/sl'
import { IconContext } from "react-icons";

export default function DesktopHeaderMenu() {

    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  return (
    <ul className="hidden w-full text-white md:flex flex-row justify-center items-center
                text-lg gap-[3rem]">

                    <li className="relative"
                        onMouseLeave={() => setIsShopDropdownOpen(false)}
                    >
                        <div className="py-6 flex flex-row items-center gap-[1rem] 
                        cursor-pointer" onMouseEnter={() => setIsShopDropdownOpen(true)}>
                            Shop 
                            <IconContext.Provider value={{size: ".8rem"}}>
                                <SlArrowDown />
                            </IconContext.Provider>
                        </div>

                        <ul className={`${isShopDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4' } 
                        absolute -left-10 top-16 w-[24rem] bg-white text-black flex flex-col
                        justify-center items-start gap-[1rem] py-8 shadow-xl text-voces transition-all duration-300`}>
                            <li className="px-10 cursor-pointer">Men's Watches</li>
                            <li className="px-10 cursor-pointer">Women's Watches</li>
                            <li className="px-10 cursor-pointer">Men's Wristbands</li>
                            <li className="px-10 cursor-pointer">Women's Wristbands</li>
                            <li className="px-10 cursor-pointer">Men's Sunglasses</li>
                            <li className="px-10 cursor-pointer">All Products</li>
                        </ul>
                    </li>

                    <li className="relative"
                    onMouseLeave={() => setIsBrandsDropdownOpen(false)}>
                        <div className="py-6 flex flex-row items-center gap-[1rem] cursor-pointer"
                        onMouseEnter={() => setIsBrandsDropdownOpen(true)}>
                            Brands 
                            <IconContext.Provider value={{size: ".8rem"}}>
                                <SlArrowDown/>
                            </IconContext.Provider>
                        </div>

                        <ul className={`${isBrandsDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4' } 
                        absolute -left-10 top-16 w-[24rem] bg-white text-black flex flex-col
                        justify-center items-start gap-[1rem] py-8 shadow-xl text-voces transition-all duration-300`}>
                            <li className="px-10 cursor-pointer">Brand 1</li>
                            <li className="px-10 cursor-pointer">Brand 2</li>
                            <li className="px-10 cursor-pointer">Brand 3</li>
                            <li className="px-10 cursor-pointer">Brand 4</li>
                            <li className="px-10 cursor-pointer">Brand 5</li>
                            <li className="px-10 cursor-pointer">Brand 6</li>
                        </ul>
                    </li>

                    <li className="cursor-pointer">News</li>

                    <li className="relative"
                    onMouseLeave={() => setIsMoreDropdownOpen(false)}>
                        <div className="py-6 flex flex-row items-center gap-[1rem] cursor-pointer"
                        onMouseEnter={() => setIsMoreDropdownOpen(true)}>
                            More 
                            <IconContext.Provider value={{size: ".8rem"}}>
                                <SlArrowDown/>
                            </IconContext.Provider>
                        </div>

                        <ul className={`${isMoreDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4' } absolute -left-10 top-16 w-[24rem] bg-white text-black flex flex-col
                        justify-center items-start gap-[1rem] py-8 shadow-xl text-voces transition-all duration-300`}>
                            <li className="px-10 cursor-pointer">Contact us</li>
                            <li className="px-10 cursor-pointer">About us</li>
                            <li className="px-10 cursor-pointer">Blog</li>
                            <li className="px-10 cursor-pointer">Reviews</li>
                        </ul>
                    </li>

    </ul>
  )
}