import { useState } from 'react';

type ActionHandler = (formData: FormData) => void | Promise<void>;
const Form = ({ actionHandler }: { actionHandler: ActionHandler }) => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState('');
  // const [formVersion, forceUpdate] = useState(0); // submit時にフォームの再描画を強制するためのstate

  return (
    <form
      // key={formVersion}
      action={(formData) => {
        actionHandler(formData);
        /*forceUpdate((prev) => prev + 1);*/
      }}
    >
      <p>
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">非制御コンポーネント(checkbox)</label>
      </p>
      <p>
        <input
          type="checkbox"
          id="checkbox2"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="checkbox2">制御コンポーネント(checkbox)</label>
      </p>
      <p>
        <input type="text" id="text1" />
        <label htmlFor="text1">非制御コンポーネント(text)</label>
      </p>
      <p>
        <input
          type="text"
          id="text2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="text2">制御コンポーネント(text)</label>
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const actionHandler = async (formData: FormData) => {
    console.log('checkbox1', formData.get('checkbox1'));
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
        <Form actionHandler={actionHandler} />
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
