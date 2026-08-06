export function AuthCredentials() { 
    return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{fontSize:30}}> Log in to trello </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                Connect to trello with:
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input type="text" placeholder="Email" />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input type="password" placeholder="password" />
            </div>
        </div>
        
    </div>
}