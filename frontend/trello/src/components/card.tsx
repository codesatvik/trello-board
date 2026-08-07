export function Card(props:any) { 
    return <div style={{ border: "1px solid #b2bec3", borderRadius: 10, padding: 20, margin: 20, cursor:"pointer" }}>
        <div style={{ margin: 10 }}> 
        { props.title } </div>
        <div style={{ height: 1, width: "100%", background: "black" }}></div>
        <div style={{ margin: 10 }}>
        { props.description}</div>
    </div>
}