export function SocialButton({ socialLogo, link, altText }) {
    return (
        <div className="rounded-full items-center flex">
            <img
                onClick={() => window.open(link)}
                src={socialLogo}
                className="h-[2.75rem] w-[2.75rem] mt-[0.75rem]"
                alt={altText} /> 
        </div>
    )
}