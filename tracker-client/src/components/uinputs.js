
// User input fields 


// Component for taking username
export function UInput({updateUser}) {

    const update = (e) => { updateUser(e.target.value) }

    return (
        <div>
            <label>Username: </label>
            <input type="text" minLength={1} maxLength={40} placeholder="Username" size={40} onChange={update} required/>
        </div>
        
    );
}

// Password input field
export function PInput({text=""}) {

    return (
        <div>
            <label>{text}</label>
            <input type="password" minLength={1} placeholder="Password" size={40} required/>
        </div>
    );
}