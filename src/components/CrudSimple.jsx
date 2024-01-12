import { useState } from 'react'

const simpleCrud = () => {
     

    let [tableData, setTableData] = useState([])

    let [formData, setFormData] = useState({
        name: "",
        email: ""
    })


    let addformData = () => {
        setTableData([...tableData, formData]);
        setFormData({
            name: "",
            email: ""
        })
    };

    let getFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value })
      

    } 

    return (
        <>
            <div className="mx-56 mt-10 pb-20 flex flex-col rounded-2xl">
                <h1 className="text-center font-bold text-2xl">Simple crud Form</h1>

                <input 
                    name="name"
                    value={formData.name}
                    onChange={getFormData}
                    className="border mx-2 my-3 rounded-md h-10 px-3" 
                    placeholder="Name" 
                    type="text" 
                />
                <input 
                    name="email"
                    value={formData.email}
                    onChange={getFormData}
                    className="border mx-2 my-3 rounded-md h-10 px-3" 
                    placeholder="Email" 
                    type="text" 
                />


                <button 
                    onClick={addformData}
                    className="bg-green-600 text-white py-3 px-3 rounded-xl"
                >
                    Add
                </button>
            </div>

            {/* {JSON.stringify(tableData)} */}

            <div className="mx-56 mt-10 pb-20 flex flex-col rounded-2xl">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="text-left">Name</th>
                            <th className="text-left">Email</th>
                            <th className="text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.name} </td>
                                    <td>{data.email}</td>
                                    <td>{index}</td>
                                </tr>
                            )
                        })}
                       
                  
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default simpleCrud