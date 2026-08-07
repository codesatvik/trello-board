export function Button(props:any) { 
    return <div className="button" style={{ cursor: "pointer", padding: "10px 40px", border: "1px solid black", borderRadius: 5,transition:"linear", transitionDelay:"79ms", transitionBehavior:"" }} onClick={props.onClick}>
        {props.children}
    </div>
}