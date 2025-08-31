import { useState } from "react";
import { SocialButton } from "./SocialButton";

export function SocialMenu() {
    const [pressed, setPressed] = useState(false);

    const handleSocialMenuPress = () => {
        setPressed(!pressed);
    }

    return (

        <div className="mt-[25px] ml-[25px]">
            <button onClick={handleSocialMenuPress}
             className={`h-[85px] w-[85px]  font-semibold rounded-full items-center justify-contents-center flex text-center width-auto ${pressed ? "bg-accent" : "bg-secondary"}`}>
            </button>
                <div className="grid grid-cols-1 grid-rows-3 gap-[.5rem] items-center justify-items-center w-[5.3125rem]">
                    <div className={`col-start-1 row-start-1 items-center ${pressed? "animate-slide-down-1" : "opacity-0 animate-slide-up-1 pointer-events-none"}`}>
                        <SocialButton socialLogo=".\github-logo.png" link="https://github.com/astro4u" alt="github-icon"/>
                    </div>
                    <div className={`col-start-1 row-start-2 items-center ${pressed? "animate-slide-down-2" : "opacity-0 animate-slide-up-2 pointer-events-none"}`}>
                        <SocialButton socialLogo=".\linkedin.png" link="https://www.linkedin.com/in/cameron-tangco/" alt="linkedin-icon"/>
                    </div>
                    <div className={`col-start-1 row-start-3 items-center ${pressed? "animate-slide-down-3" : "opacity-0 animate-slide-up-3 pointer-events-none"}`}>
                        <SocialButton socialLogo=".\twitter-icon.png" link="https://x.com/camtangco" alt="twitter-icon"/>
                    </div>
                </div>
            
            

        </div>
    )
}