import "./NoContent.css"

export default function NoContent({message}) {
    return(
        <div className = "no-content-container">
            <p>{message}</p>
        </div>
    )
}