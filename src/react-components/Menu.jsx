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
            <button onClick={handleMenuPress}
                className="h-[85px] w-[85px] bg-secondary border-2 border-white font-semibold rounded-[15px] items-center justify-items-center grid grid-cols-1 grid-rows-1">
                <div className="justify-self-center col-start-1 row-start-1">
                    <MenuButton color="#BDC667" size={50} />
                </div>
            </button>
            <div className="grid grid-cols-1 grid-rows-5 items-center justify-items-start w-[5.3125rem]">
                <Transition show={pressed}>
                    <div className="transition duration-300 data-closed:-translate-y-2 data-closed:opacity-0 data-opened:opacity-100 col-start-1 row-start-1 items-center">
                        <MenuElement text={"About Me"}/>
                    </div>
                </Transition>
                <Transition show={pressed}>
                    <div className="transition duration-300 data-closed:-translate-y-12 data-closed:opacity-0 data-opened:opacity-100 col-start-1 row-start-2 items-center">
                        <MenuElement text={"Skills"}/>
                    </div>
                </Transition>
                <Transition show={pressed}>
                    <div className="transition duration-500 data-closed:-translate-y-22 data-closed:opacity-0 data-opened:opacity-100 col-start-1 row-start-3 items-center">
                        <MenuElement text={"Interests"}/>
                    </div>
                </Transition>
                <Transition show={pressed}>
                    <div className="transition duration-700 data-closed:-translate-y-32 data-closed:opacity-0 data-opened:opacity-100 col-start-1 row-start-4 items-center">
                        <MenuElement text={"Projects"}/>
                    </div>
                </Transition>
                <Transition show={pressed}>
                    <div className="transition duration-900 data-closed:-translate-y-42 data-closed:opacity-0 data-opened:opacity-100 col-start-1 row-start-5 items-center">
                        <MenuElement text={"Contact Me"}/>
                    </div>
                </Transition>
            </div>
        
        </div>
    )
}