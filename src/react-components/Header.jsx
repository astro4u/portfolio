import { SocialMenu } from "./SocialMenu";
import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="bg-primary h-[100vh] w-full justify-evenly grid grid-cols-3 grid-rows-3 overflow-x-hidden">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 align-end p-[2.0625rem]">
            <SocialMenu />
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-4 bg-primary w-full flex flex-col items-center">
            <div className="text-white text-[4vh] mt-[3.8rem]">
                <h1 className="font-bold">Hello!</h1>
                <h1 className="font-semibold">Welcome to my portfolio.</h1>
            </div>    
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3
                        flex flex-col self-center justify-self-center
                        w-[40vh] h-[40vh] rounded-full bg-white overflow-clip">
                <img src="./graduation-photo.jpeg"></img>
        </div>
        <div className="text-white font-semibold text-4xl self-center col-start-2 col-end-3 row-start-3 row-end-4">
            I'm Cameron Tangco.
            </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-2 align-end justify-items-end p-[2.0625rem]">
            <Menu />
        </div>
    </div>
  );
}