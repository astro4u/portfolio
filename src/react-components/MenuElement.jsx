
export function MenuElement({ text }) {

    return (
        <div className={`lg:text-2xl sm:text-sm font-semibold text-white rounded-md mt-2 p-1`}>
            <p>{text}</p>
        </div>
    )
}