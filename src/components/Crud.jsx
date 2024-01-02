import { useState } from "react"
import CrudForm from "./CrudForm"

function Crud() {
    let [formVisibility, setFormVisibility] = useState(false)
    let [tableData, setTableData] = useState([
        {
            name: "blue",
            code: "blu86"
        },
        {
            name: "red",
            code: "red86"
        },
        {
            name: "green",
            code: "grn86"
        }
    ])

    function handleAdd() {
        setFormVisibility(true)
    }

    function getChildFormData(data) {
        // setData(data)
        console.log("parent", data)
      }

    return (
        <>
            <div className="flex justify-between px-5 my-10">
                <h1 className="text-xl my-4 font-black">CRUD </h1>
                <button onClick={ ()=> handleAdd()} className="bg-blue-500 w-24 text-white px-4 py-2 rounded-md">Add</button>
            </div>
                
            { formVisibility ? <CrudForm if={formVisibility} sendChildFormData={getChildFormData} /> : "" }

            {/* { tableData.map((item, index) => (
                    <div key={index}>{item}</div>
                    )
            } */}

            <div className="container mx-auto">
                <table className="min-w-full bg-white shadow-md rounded">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                     
                        <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                Data 1
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                Data 2
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )
}


export default Crud