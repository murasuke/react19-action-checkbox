import { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

function App() {
  const [count, setCount] = useState(0);
  const actionHandler = async (formData: FormData) => {
    await fetch('https://httpstat.us/200', {
      method: 'POST',
      body: JSON.stringify({ count: count + 1 }),
    });
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>
        React19のアクションで、状態管理をしているcheckboxのチェックが消える
      </h1>
      <div className="card">
        <Form1 actionHandler={actionHandler} />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
      <div className="card">
        <Form2 actionHandler={actionHandler} />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
      <div className="card">
        <Form3 actionHandler={actionHandler} />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
