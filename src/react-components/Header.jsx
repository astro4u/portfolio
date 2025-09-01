import { SocialMenu } from "./SocialMenu";
import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="bg-primary h-full w-full justify-evenly grid grid-cols-3 grid-rows-3">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 align-end p-[2.0625rem]">
            <SocialMenu />
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-4 bg-primary h-full w-full flex flex-col items-center">
            <div className="text-white text-4xl mt-[3.8rem]">
                <h1 className="font-bold">Hello!</h1>
                <h1 className="font-semibold">I'm Cameron Tangco</h1>
            </div>
            <div className="w-[50vh] h-[50vh] rounded-full bg-white mb-[3.8rem] mt-[3.8rem] overflow-clip">
                <img src="./graduation-photo.jpeg"></img>
            </div>
            <div className="text-white font-semibold text-4xl">Welcome to my portfolio.</div>
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-2 align-end justify-items-end p-[2.0625rem]">
            <Menu />
        </div>
    </div>
  );
}