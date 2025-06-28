import { useState } from 'react';

type ActionHandler = (formData: FormData) => void | Promise<void>;
const Form = ({ actionHandler }: { actionHandler: ActionHandler }) => {
  const [checked, setChecked] = useState(false);
  return (
    <form action={(formData) => actionHandler(formData)}>
      <p>
        <input type="checkbox" id="checkbox3" name="checkbox3" />
        <label htmlFor="checkbox3">非制御コンポーネント(checkbox)</label>
      </p>
      <p>
        <input
          type="checkbox"
          id="checkbox4"
          name="checkbox4"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="checkbox4">制御コンポーネント(checkbox)</label>
      </p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
