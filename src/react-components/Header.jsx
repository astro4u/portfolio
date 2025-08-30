import { SocialMenu } from "./SocialMenu";

export function Header() {
  return (
    <div className="bg-primary h-full w-full justify-evenly grid grid-cols-3 grid-rows-3">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 align-start justify-items-start">
            <SocialMenu />
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-4
        bg-primary h-full w-full flex flex-col items-center">
            <div className="text-white text-4xl mt-[61px]">
                <h1 className="font-bold">Hello!</h1>
                <h1 className="font-semibold">Welcome to my portfolio.</h1>
            </div>
            <div className="w-[450px] h-[450px] rounded-full bg-white mb-[61px] mt-[61px] overflow-clip">
                <img src="images/graduation-photo.jpeg"></img>
            </div>
            <div className="text-white font-semibold text-4xl">I'm Cameron Tangco</div>
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-2 align-end justify-items-end">
            <Menu />
        </div>
    </div>
  );
}