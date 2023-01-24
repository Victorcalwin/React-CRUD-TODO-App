import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { createData } from '../App';
import '../dashboard.css'


function Dashboard() {

    const context = useContext(createData);

    let navigate = useNavigate()

    let deleteFunc = (i) => {
        let data = [...context.data];
        data.splice(i, 1);
        context.setData(data)
    }


    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={() => navigate('/')}>Create</button>
            <table >
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update or Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        context.data.map((e, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>

                                <td>
                                    <button onClick={() => navigate(`/edit/${i}`)}>Edit</button>
                                    &nbsp;&nbsp;
                                    <button onClick={() => deleteFunc(i)}>Delete</button>
                                </td>
                            </tr>
                        })}
                </tbody>

            </table>
        </div>
    )
}

export default Dashboard