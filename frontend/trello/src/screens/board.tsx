import { Appbar } from "../components/appbar";
import { BoardsSection } from "../components/boardssection";
import { Card } from "../components/card";

export function Board() { 
    const pendingTask = [{ id: "1", title: "node to bun migration", description: "move website to node.js" }]
    const onGoingTasks = [{ id: "1", title: "also node to bun migration", description: "move website to node.js" }]
    const doneTasks = [{id: "1", title: " finished node to bun migration", description: "move website to node.js"}]
    return <div>
        <Appbar />
        <div style={{ display: "flex", padding: 30 }}>
            <BoardsSection>
                {pendingTask.map(task => <Card
                    title={task.title}
                    description={task.description} />
                )}
            </BoardsSection>
            <BoardsSection>
              {onGoingTasks.map(task => <Card
                    title={task.title}
                    description={task.description} />
                )}
            </BoardsSection>
            <BoardsSection>
                    {doneTasks.map(task => <Card
                    title={task.title}
                    description={task.description} />
                )}
            </BoardsSection>
        </div>

    </div>
}
