export function SocialButton({ socialLogo, link, altText }) {
    return (
        <div className="h-[60px] w-[60px] rounded-full items-center justify-items-center flex">
            <img
                onClick={() => window.open(link)}
                src={socialLogo}
                className="h-full w-full mt-[15px]"
                alt={altText} /> 
        </div>
    )
}