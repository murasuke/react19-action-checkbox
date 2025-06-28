import { useState } from 'react';

type ActionHandler = (formData: FormData) => void | Promise<void>;
const Form = ({ actionHandler }: { actionHandler: ActionHandler }) => {
  const [checked, setChecked] = useState(false);
  return (
    <form
      action={(formData) => {
        actionHandler(formData);
      }}
    >
      <p>
        <input type="checkbox" id="checkbox5" name="checkbox5" />
        <label htmlFor="checkbox5">非制御コンポーネント(checkbox)</label>
      </p>
      <p>
        <input
          type="checkbox"
          id="checkbox6"
          name="checkbox6"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="checkbox6">制御コンポーネント(checkbox)</label>
      </p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
