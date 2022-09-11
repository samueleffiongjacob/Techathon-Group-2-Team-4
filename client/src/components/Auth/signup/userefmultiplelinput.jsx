import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

const App = () => {
  const inputRef = useRef({});

  const [data, setData] = useState({ name: '' });
  const handleChange = () => {
    const values = {
      firstname: inputRef.current['first_name'].value,
      lastname: inputRef.current['last_name'].value,
      email: inputRef.current['email'].value
    }
    setData(values);
  }
  console.log({ data });
  console.log({});
  useEffect(() => {
    inputRef.current['first_name'].focus()
  }, []);
  console.log("Rendering...");
  console.log(inputRef.current);
  return (
    <form onSubmit={() => {/* inputRef.current.value */ }}>
      <input ref={el => inputRef.current['first_name'] = el} placeholder='First Name'></input>
      <input ref={el => inputRef.current['last_name'] = el} placeholder='Last Name'></input>
      <input
        onBlur={handleChange}
        ref={el => inputRef.current['email'] = el} placeholder='Email'></input>

    </form>
  );
}

export default App
