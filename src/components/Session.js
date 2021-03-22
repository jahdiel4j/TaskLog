import React, {useState} from 'react'
import SessionForm from './SessionForm'
import { TiEdit } from 'react-icons/ti'
import { RiCloseCircleLine } from 'react-icons/ri'

const Session = ({data, updateSession, removeSession}) => {
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
                <RiCloseCircleLine
                    onClick={() => removeSession(dat.name)}
                    className='delete-icon'
                />
                <TiEdit 
                    onClick={() => setEdit({ 'name': dat.name, 'Seconds': dat.Seconds })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
}

export default Session;