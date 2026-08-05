import { AuthBanner } from "../components/authbanner";
import { AuthCredentials } from "../components/authcredentials";

export function Auth() { 
    return <div style={{display:"flex"}}>
        
        <AuthBanner />
        <AuthCredentials />
    </div>
}