import { Menu as MenuButton } from "lucide-react";
import { useState } from "react";
import { MenuElement } from "./MenuElement.jsx";
import { SocialButton } from "./SocialButton.jsx";
import { Transition } from "@headlessui/react";

export function Menu() {
    const [pressed, setPressed] = useState(false);

    const handleMenuPress = () => {
        setPressed(!pressed);
    }


    return (
        <div className="">
            <div className="grid grid-cols-1 grid-rows-1">
                <button onClick={handleMenuPress}
                    className="lg:col-start-2 lg:row-start-1
                            sm:col-start-2 sm:row-start-1
                            h-[85px] w-[85px] bg-secondary border-2 border-white font-semibold rounded-full items-center justify-items-center grid grid-cols-1 grid-rows-1
                            hover:bg-secondary-light">
                    <div className="justify-self-center col-start-1 row-start-1">
                        <MenuButton color="#BDC667" size={50} />
                    </div>
                </button>
            </div>
            <div className="grid
                            grid-cols-1 grid-rows-5
                            lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-7
                            sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-7
                            items-center justify-items-end w-[5.3125rem] text-nowrap">
                <Transition show={pressed}>
                    <a href="#about-me" className="lg:col-span-2 lg:row-start-1 
                                    sm:col-start-1 sm:row-start-1
                                    items-center
                                    transition duration-100 data-closed:opacity-0 data-opened:opacity-100">
                        <MenuElement text={"About Me"}/>
                    </a>
                </Transition>
                <Transition show={pressed}>
                    <a href="#skills" className="lg:col-span-2 lg:row-start-2 data-closed:-translate-y-[2rem]
                                    sm:col-start-1 sm:row-start-2
                                    items-center
                                    transition duration-300 data-closed:opacity-0 data-opened:opacity-100">
                        <MenuElement text={"Skills"}/>
                    </a>
                </Transition>
                <Transition show={pressed}>
                    <a href="#interests" className="lg:col-span-2 lg:row-start-3 data-closed:-translate-y-[4rem]
                                    sm:col-start-1 sm:row-start-3
                                    items-center
                                    transition duration-500 data-closed:opacity-0 data-opened:opacity-100">
                        <MenuElement text={"Interests"}/>
                    </a>
                </Transition>
                <Transition show={pressed}>
                    <a href="#projects" className="lg:col-span-2 lg:row-start-4 data-closed:-translate-y-[8rem]
                                    sm:col-start-1 sm:row-start-4
                                    items-center
                                    transition duration-700 data-closed:opacity-0 data-opened:opacity-100">
                        <MenuElement text={"Projects"}/>
                    </a>
                </Transition>
                <Transition show={pressed}>
                    <a href="#contact-me" className="lg:col-span-2 lg:row-start-5 data-closed:-translate-y-[12rem]
                                    sm:col-start-1 sm:row-start-5 
                                    items-center
                                    transition duration-900 data-closed:opacity-0 data-opened:opacity-100">
                        <MenuElement text={"Contact Me"}/>
                    </a>
                </Transition>
            </div>
        
        </div>
    )
}