import { useCountDown } from '@raddix/use-count-down';

export function Timer() {
  const initialTime = 30 * 1000; // thirty seconds expressed in miliseconds
  const [count, actions] = useCountDown(initialTime, { autoStart: false });

  return (
    <section>
      <h1>Pomodoro Timer</h1>
      <div>
        <sub>Time left</sub>
        <p>{count}</p>
      </div>
      {count > 0 ? (
        <div>
          <button onClick={() => actions.start}>Start</button>
          <button onClick={actions.stop}>Pause</button>
        </div>
      ) : (
        <div>
          <p>Time is over!</p>
          <button onClick={actions.reset}>Reset timer</button>
        </div>
      )}
    </section>
  );
}
