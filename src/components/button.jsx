export function Button({onclick, disabled, children}) {
    return (
        <button type="button" onClick={onclick} disabled={disabled}>{children} </button>
    )
}

