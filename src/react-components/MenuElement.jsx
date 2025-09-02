
export function MenuElement({ text }) {

    return (
        <div className={`lg:text-2xl sm:text-sm font-semibold text-white rounded-md mt-2 p-1 hover:drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)] hover:drop-shadow-white`}>
            <p>{text}</p>
        </div>
    )
}