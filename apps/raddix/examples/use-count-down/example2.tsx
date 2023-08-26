import { useCountDown } from '@raddix/use-count-down';

export function Modal() {
  const initialTime = 10 * 1000; // ten seconds expressed in miliseconds

  const exitPage = () => {
    /* ... */
  };

  const closeModal = () => {
    /* ... */
  };

  const [count] = useCountDown(initialTime, { onFinished: exitPage });

  return (
    <div>
      <p>Are you sure you want to exit?</p>
      <div>
        <button onClick={exitPage}>Yes, exit</button>
        <button onClick={closeModal}>No, stay here</button>
      </div>
      <sub>Exiting in {count}...</sub>
    </div>
  );
}
