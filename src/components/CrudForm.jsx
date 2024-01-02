import { useState } from "react"

function CrudForm(props) {
    let [formData, setFormData] = useState({
        name: "",
        code: ""
    })

function getFormData(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
        ...formData, [name]: value
    });

}


    return (
        <>
            <div className="mx-56 pb-20 flex flex-col rounded-2xl">
                <h1 className="text-center font-bold text-2xl">Form</h1>
                <input name="name" onChange={ getFormData } className="border mx-2 my-3 rounded-md h-10 px-3" placeholder="Name" type="text" /> 
                <input name="code" onChange={ getFormData } className="border mx-2 my-3 rounded-md h-10 px-3" placeholder="Code" type="text" /> 
                <button onClick={ ()=> props.sendChildFormData(formData) } className="bg-blue-600 text-white py-3 px-3 rounded-xl">Add</button>
            </div>
        </>
    )
}

export default CrudForm