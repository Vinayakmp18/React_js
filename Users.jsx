import React from 'react'

const Users = (props) => {
    console.log(props);
    let data = props.data
  return (
    <div>
        <table border="2px" style={{textAlign:"center",color:"Highlight"}}>
            <tr>
                <th>Username</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Age</th>
                <th>Qualification</th>
                <th>Phone</th>
                <th>Photo</th>
            </tr>
        {data.map((x)=>{
            return <tr>
                <td>{x.username}</td>
                <td>{x.gender}</td>
                <td>{x.dob}</td>
                <td>{x.age}</td>
                <td>{x.qualification}</td>
                <td><ul>
                {x.phone.map((x)=>{
                    return <li>{x}</li>
                })}
                </ul>
                </td>
                <td><img src={x.photo} alt="" height="50px" width="50px"/></td>
            </tr>
        })}
        </table>
    </div>
  )
}

export default Users