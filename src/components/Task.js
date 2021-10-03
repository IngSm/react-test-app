import {FaTimes} from 'react-icons/fa'

import { useDispatch } from 'react-redux'
import { del, toggle } from '../features/addTask'

const Task = ({ task }) => {

    const dispatch = useDispatch()

    return (
        <div onDoubleClick={() => dispatch(toggle(task.id))} className={`task ${task.reminder ? "reminder" : ''}`}>
            <h3>{task.text} 
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => dispatch(del(task.id))}
                />
            </h3>
            <p className="task-day">{task.day}</p>
            <p className="text">{task.description}</p>
        </div>
    )
}

export default Task
