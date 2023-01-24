import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createData } from '../App';


function Create() {

    let context = useContext(createData);
    let params = useParams()

    let navigate = useNavigate()

    const [name, SetName] = useState(context.data[params.id].name);
    const [email, SetEmail] = useState(context.data[params.id].email);
    const [phone, SetPhone] = useState(context.data[params.id].phone);



    const handleClick = () => {
        const data = {
            name,
            email,
            phone
        }
        let newData = [...context.data]
        newData.splice(params.id, 1, data)
        context.setData(newData)
        console.log(context.data)
        navigate('/dashboard')

    }


    return (
        <div>
            <h1>My to do App</h1>
            <input type="text" placeholder={context.data[params.id].name} onChange={(e) => SetName(e.target.value)} />
            <input type="text" placeholder={context.data[params.id].email} onChange={(e) => SetEmail(e.target.value)} />
            <input type="text" placeholder={context.data[params.id].phone} onChange={(e) => SetPhone(e.target.value)} />
            <button onClick={() => handleClick()}>Update</button>




        </div>
    )
}

export default Create