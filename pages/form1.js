import GenericForm from "../components/genericform"
import { useState } from 'react'
export default function form1(props) {

    const [f1State, setF1State] = useState();
    const handleSubmit = () => {
        console.log('submit was clicked');
    }
    return (<GenericForm config={config} handleSubmit={handleSubmit}></GenericForm>)
}


const config = {
    title: 'Form 1',
    fields: [
        {
            formControl: 'input', id: 'f1email', name: 'email', type: 'email', label: 'E-mail address', helperText: 'Enter your e-mail address', placeHolder: 'Enter email',
            validate(val) {
                    if (!val) return 'Email is required'
                    else return true
            }

        },
        { formControl: 'input', id: 'f1password', name: 'password', type: 'password', label: 'Password', placeHolder: 'my password'      ,       validate(val) {
          
            if (!val) return 'Password is required'   
            else return true
        
    }},
        { formControl: 'button', id: 'f1submit', name: 'Submit', type: 'submit', label: 'Submit' },

    ]
}



//  { formControl: 'button', id:'f1submit', name: 'submit', type: 'submit', label: 'Submit' },