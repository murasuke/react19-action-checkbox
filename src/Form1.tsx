import { useState } from 'react';

type ActionHandler = (formData: FormData) => void | Promise<void>;
const Form = ({ actionHandler }: { actionHandler: ActionHandler }) => {
  const [checked, setChecked] = useState(false);

  return (
    <form action={(formData) => actionHandler(formData)}>
      <p>
        <input type="checkbox" id="checkbox1" name="checkbox1" />
        <label htmlFor="checkbox1">非制御コンポーネント(checkbox)</label>
      </p>
      <p>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox2"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="checkbox2">制御コンポーネント(checkbox)</label>
      </p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
