import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { add } from '../features/addTask'
import { message } from 'antd';

const AddTask = () => {

    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [description, setDescription] = useState('')
    const [reminder, setReminder] = useState(false)

    const warning = () => {
        message.warning('Please, add task!');
      };

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            warning()
            return
        }

        let id = Math.floor(Math.random() * 10000) + 1

        dispatch(add({
            id: id,
            text: text,
            day: day,
            description: description,
            reminder: reminder
        }))

        // switch (sessionStorage.getItem('user')) {
        //     default:
        //         console.log('nothing')
        //     break
        //     case 'John':
        //         sessionStorage.user1Data = JSON.stringify({
        //             id: id,
        //             text: text,
        //             day: day,
        //             description: description,
        //             reminder: reminder
        //         });
        //     break
        //     case 'Liza':
        //         sessionStorage.user2Data = JSON.stringify({
        //             id: id,
        //             text: text,
        //             day: day,
        //             description: description,
        //             reminder: reminder
        //         });
        //     break
        //     case 'Wo':
        //         sessionStorage.user3Data = JSON.stringify({
        //             id: id,
        //             text: text,
        //             day: day,
        //             description: description,
        //             reminder: reminder
        //         });
        //     break
        // }


        setText('')
        setDay('')
        setDescription('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                    <label>Task</label>
                    <input
                        type="text"
                        placeholder="Add task"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
            </div>
            <div className="form-control">
                    <label>Day & Time</label>
                    <input
                        type="text"
                        placeholder="Add day & time"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
            </div>
            <div className="form-control">
                    <label>Day & Time</label>
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
            </div>
            <div className="form-control form-control-check">
                    <label>Set reminder</label>
                    <input
                        type="checkbox"
                        checked={reminder}
                        value={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                    />
            </div> 
            <input type="submit" value='Save task' className="btn btn-block" />
        </form>
    )
}

export default AddTask
