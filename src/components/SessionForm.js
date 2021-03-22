import React, { useState, useEffect, useRef } from 'react';

function SessionForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.Seconds : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      'name': props.edit.name,
      'Seconds': input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
          <input
            placeholder='Update your time'
            value={input}
            onChange={handleChange}
            name='text'
            type="number"
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit' aria-pressed="false">
            Update Session
          </button>
    </form>
  );
}

export default SessionForm;