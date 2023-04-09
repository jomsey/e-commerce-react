import "./NoContent.css"

export default function NoContent({message,children}) {
    return(
        <div className = "no-content-container">
            <span>{message}</span>
            {children}
        </div>
    )
}