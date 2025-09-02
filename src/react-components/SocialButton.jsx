export function SocialButton({ socialLogo, link, altText }) {
    return (
        <div className="rounded-full items-center flex">
            <img
                onClick={() => window.open(link)}
                src={socialLogo}
                className="h-[2.75rem] w-[2.75rem] mt-[0.75rem] hover:drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)] hover:drop-shadow-white"
                alt={altText} /> 
        </div>
    )
}