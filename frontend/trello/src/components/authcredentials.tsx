import { Button } from "./button";
import { Center } from "./center";
import { Input } from "./input";

export function AuthCredentials() { 
    return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ width: "100%" }}>
            <Center>
                <div style={{fontSize:30}}> Log in to trello </div>
            </Center>
            <Center>
                Connect to trello with:
            </Center>
            
            <Center>
                <Input type='text' placeholder='Email' />
            </Center>
            <Center>
             <Input type='password' placeholder='Password' />
            </Center>
            <Center>
                <Button>Signup</Button>
            </Center>
        </div>
   </div>
}