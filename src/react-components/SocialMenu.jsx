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
             className={`h-[85px] w-[85px] bg-secondary font-semibold rounded-full items-center justify-items-center flex text-center`}>
            </button>
            {pressed && 
                <div className="dropdownContent">
                    <SocialButton socialLogo=".\github-logo.png" link="https://github.com/astro4u" alt="github-icon"/>
                    <SocialButton socialLogo=".\linkedin.png" link="https://www.linkedin.com/in/cameron-tangco/" alt="linkedin-icon"/>
                    <SocialButton socialLogo=".\twitter-icon.png" link="https://x.com/camtangco" alt="twitter-icon"/>
                </div>
                }
        </div>
    )
}