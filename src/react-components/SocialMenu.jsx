import { useState } from "react";
import { SocialButton } from "./SocialButton";
import { Transition } from "@headlessui/react";
import { Globe } from "lucide-react";

export function SocialMenu() {
    const [pressed, setPressed] = useState(false);

    const handleSocialMenuPress = () => {
        setPressed(!pressed);
    }

    return (
        <div className="mt-[25px] ml-[25px]">
                <button onClick={handleSocialMenuPress}
                    className={`h-[85px] w-[85px] bg-secondary font-semibold rounded-full items-center justify-contents-center flex text-center width-auto`}>
                </button>
                <div className="grid grid-cols-1 grid-rows-3 gap-[.5rem] items-center justify-items-center w-[5.3125rem]">
                    <Transition show={pressed}>
                    <div className="transition duration-500 data-closed:-translate-y-5 data-closed:opacity-0 data-opened:opacity-100 col-start-1 row-start-1 items-center`">
                        <SocialButton socialLogo=".\github-logo.png" link="https://github.com/astro4u" alt="github-icon"/>
                    </div>
                    </Transition>
                    <Transition show={pressed}>
                    <div className="transition duration-750 data-closed:-translate-y-30 data-closed:opacity-0 data-opened:opacity-100 col-start-1 row-start-2 items-center">
                        <SocialButton socialLogo=".\linkedin.png" link="https://www.linkedin.com/in/cameron-tangco/" alt="linkedin-icon"/>
                    </div>
                    </Transition>
                    <Transition show={pressed}>
                    <div className="transition duration-1000 data-closed:-translate-y-50 data-closed:opacity-0 data-opened:opacity-100 col-start-1 row-start-3 items-center">
                        <SocialButton socialLogo=".\twitter-icon.png" link="https://x.com/camtangco" alt="twitter-icon"/>
                    </div>
                    </Transition>
                </div>
        </div>
    )
}