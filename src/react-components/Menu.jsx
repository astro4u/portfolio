import { Menu as MenuButton } from "lucide-react";

export function Menu() {
    return (
        <div className="">
            <button className="h-[85px] w-[85px] bg-secondary font-semibold rounded-[15px] items-center justify-items-center grid grid-cols-1 grid-rows-1">
                <div className="justify-self-center col-start-1 row-start-1">
                    <MenuButton color="#BDC667" size={50} />
                </div>
            </button>
        </div>
    )
}