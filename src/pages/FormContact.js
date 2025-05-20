import React, { useState } from "react";


const FormContent = () => {

    const [name, setname] = useState("");
    const [show, setshow] = useState(true);

    const changename = (event) => {
        setname(event.target.value)
    }

    const FormHandler = (event) => {
        event.preventDefault();
        if (name.length == ""){
            setshow(false);
            return
        }
        console.log(name);
        setshow(true);
        
    }


    return (
        <>
            <form onSubmit={FormHandler}>
                <div class="form-control">
                    <input placeholder="Your Name" onChange={changename}/>
                    {!show && <p>not empty</p>}
                </div>
                <div class="form-control">
                    <input placeholder="Email" />
                </div>
                <div class="form-control">
                    <input placeholder="Phone Number"/>
                </div>
                <select>
                    <option>Choose Examination</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                </select>
                <div class="form-control">
                    <textarea placeholder="Message"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">Submit</button>
            </form>
        </>
    )
}

export default FormContent;