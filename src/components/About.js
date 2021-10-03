import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="inst-container">
            <h4>Version 1.0.0</h4>
            <h4>Instruction:</h4>
            <p className="text">To create task click "Add"</p>
            <p className="text">To delete task click on red cross</p>
            <p className="text">To add/remove a reminder make double click on a task</p>
            <Link className="link" to="/">Go back</Link>   
        </div>
    )
}

export default About
