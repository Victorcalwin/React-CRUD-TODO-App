import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createData } from '../App';


function Create() {

    let context = useContext(createData);

    let navigate = useNavigate()

    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [phone, SetPhone] = useState('');



    const handleClick = () => {
        const data = {
            name,
            email,
            phone
        }
        let newData = [...context.data]
        newData.push(data)
        context.setData(newData)
        console.log(context.data)
        navigate('/dashboard')



    }


    return (
        <div>
            <h1>My to do App</h1>
            <input type="text" required onChange={(e) => SetName(e.target.value)} placeholder='Name' />
            <input type="text" required onChange={(e) => SetEmail(e.target.value)} placeholder='Email' />
            <input type="text" required onChange={(e) => SetPhone(e.target.value)} placeholder='Phone' />
            <button onClick={handleClick}>Click me</button>




        </div>
    )
}

export default Create