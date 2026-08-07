import { Center } from "./center";

export function AuthBanner() { 
    return <div style={{ minHeight: "100vh", backgroundColor: "black", alignItems: "center", display:"flex" }}>
        <div style={{ width: "100%" }}>
            <Center>
                <svg width="30px" height="30px" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M58 0.0162365V58L35.3688 38.5587V58H0V0L58 0.0162365ZM7.10962 50.9603H28.2591V23.1112L50.8907 42.937V7.05391L7.10962 7.04147V50.9603Z" fill="#34D59A"></path></svg>
            </Center>
            <Center>
                <div style={{ color: "white", fontWeight: 400, fontFamily: "sans-serif", fontSize: 30, padding: 29, textAlign: "center" }}>
                    Build a board, get the job done before anyone else
                </div>
            </Center>
            <div>
            </div>
        </div>
        
    </div>
}