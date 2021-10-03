import { Form, Input, Button} from 'antd'
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { message } from 'antd';
import { useDispatch } from 'react-redux'
import { logIn } from '../features/Log'

const Login = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    let users = [];
    let temp = Object.keys(localStorage);
    for(let key of temp) {
        users.push( JSON.parse(localStorage.getItem(key)))
    }

    const onFinish = (values) => {
        if (users.find( item => item.user === username) && users.find(item => item.password === password)) {
            dispatch(logIn(true))
            // sessionStorage.setItem('user', username)
            history.push("/tracker");
        } else {
            setUsername('')
            setPassword('')
            error()
        }
    };
            
    const onFinishFailed = () => {
        console.log('Failed');
    };

    const error = () => {
        message.error('Incorrect name or password');
    };
    
      

    return (
        <div className="login">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{username: '', password: '' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                onChange={(e) => setUsername(e.target.value)}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                onChange={(e) => setPassword(e.target.value)}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
            </Form.Item>
            </Form>
        </div>
    )
}

export default Login
