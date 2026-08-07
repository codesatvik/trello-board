import { Appbar } from "../components/appbar";
import { Card } from "../components/card";

export function Board() { 
    return<div>
        <Appbar />
        
      
   
        <div style={{ display: "flex", padding:30 }}>
            <div style={{ flex: 1, borderRight: "1px dotted black", minHeight: "80vh" }}>
                <Card title={"node to bun migration"}
                    description={ "move website to node.js"} />
            </div>
         <div style={{ flex: 1, borderRight: "1px dotted black", minHeight: "80vh" }}>  </div>
         <div style={{ flex:1, minHeight:"80vh"}}>  </div>
        </div>

    </div>
}
