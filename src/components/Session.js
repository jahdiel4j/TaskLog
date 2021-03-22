import React, {useState} from 'react'
import SessionForm from './SessionForm'
import { TiEdit } from 'react-icons/ti'

const Session = ({data, updateSession}) => {
    const [edit, setEdit] = useState({
        'name': null,
        'Seconds': 0
    });

    const submitUpdate = value => {
        updateSession(edit.name, value);
        setEdit({
            'name': null,
            'Seconds': 0
        })
    }

    if (edit.name) {
        return <SessionForm edit={edit} onSubmit={submitUpdate} />
    }
    return data.map((dat, index) => (
        <div className='todo-row'>
            <div key={dat.name} >
                Name: {dat.name}, Seconds: {dat.Seconds}s
            </div>
            <div className="icons">
                <TiEdit 
                    onClick={() => setEdit({ 'name': dat.name, 'Seconds': dat.Seconds })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
}

export default Session;