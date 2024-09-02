
// eslint-disable-next-line no-unused-vars
import React from "react";
function Nav(){
    return(
        <div>
            <nav className="container px-[80px] lg:px-[80px] w-full max-w-[1440px] h-auto lg:h-[164px]">
                <div className="flex justify-between">
                    <div className="pt-[67px] lg:pt-[67px] h-auto lg:h-[30px]">
                        <div>
                            <h1 className="text-xl font-semibold">Site name</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 pt-[67px] lg:pt-[67px] h-auto lg:h-[52px]">
                        <a href="" className="w-full max-w-[49px] h-[30px] pt-[11px] lg:pt-[11px] font-semibold">Page</a>
                        <a href="" className="w-full max-w-[49px] h-[30px] pt-[11px] lg:pt-[11px] font-semibold">Page</a>
                        <a href="" className="w-full max-w-[49px] h-[30px] pt-[11px] lg:pt-[11px] font-semibold">Page</a>
                        <a href="" className="bg-black text-white pt-[11px] rounded-lg w-[99px] h-[52px] text-center font-semibold">Button</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav;
