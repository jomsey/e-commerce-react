
function withToolTip(Component) {
    
    return (props)=> {
        return(
    <div className="tool" onMouseOver={()=>console.log(props)}>
        <Component {...props} name="james"/>
    </div>)}
}

export default withToolTip