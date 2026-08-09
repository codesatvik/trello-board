import { useState } from "react";
import { Appbar } from "../components/appbar";
import { BoardsSection } from "../components/boardssection";
import { Card } from "../components/card";

export function Board() { 
    const [pendingTask, setPendingTasks] = useState([{ id: "1", title: "1also node to bun migration", description: "1move website to node.js" }]);
    const [onGoingTasks, setOnGoingTasks ] = useState([{ id: "2", title: "2also node to bun migration", description: "2move website to node.js" }])
    const [doneTasks, setDoneTasks] = useState([{ id: "3", title: " 3finished node to bun migration", description: "3move website to node.js" }])
    return <div>
        <Appbar />
        <div style={{ display: "flex", padding: 30 }}>
            <BoardsSection onDrop={(item) => { 
                setPendingTasks(p => p.filter(x => x.id != item.id))
                setOnGoingTasks(p => p.filter(x => x.id != item.id))
                setDoneTasks(p => p.filter(x => x.id != item.id))
                setPendingTasks(p => [...p, item])


            }}>
                {pendingTask.map(task => <Card
                    title={task.title}
                    description={task.description}
                    id={task.id}/>
                )}
            </BoardsSection>
            <BoardsSection onDrop={(item) => { 
                setPendingTasks(p => p.filter(x => x.id != item.id))
                setOnGoingTasks(p => p.filter(x => x.id != item.id))
                setDoneTasks(p => p.filter(x => x.id != item.id))
                setOnGoingTasks(p => [...p, item])
            }}>
                {onGoingTasks.map(task => <Card
                    title={task.title}
                    description={task.description}
                    id={task.id} />
                )}
            </BoardsSection>
           <BoardsSection onDrop={(item) => { 
                setPendingTasks(p => p.filter(x => x.id != item.id))
                setOnGoingTasks(p => p.filter(x => x.id != item.id))
                setDoneTasks(p => p.filter(x => x.id != item.id))
                setDoneTasks(p => [...p, item])
            }}>
                    {doneTasks.map(task => <Card
                        title={task.title}
                        description={task.description}
                        id={ task.id} />
                )}
            </BoardsSection>
        </div>

    </div>
}
