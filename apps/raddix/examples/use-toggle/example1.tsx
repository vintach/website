import { useToggle } from '@raddix/use-toggle';

export const Example = () => {
  const [show, setShow, toggle] = useToggle();

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        animi pariatur quod harum impedit beatae dicta, tempore, explicabo
        laborum ducimus eligendi porro? Odit vero perferendis facere eius totam
        saepe dolores?
      </p>

      {show && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum earum
          dolore, nostrum esse sint nobis facere consequuntur placeat harum
          molestiae unde ad laudantium reiciendis, a tempore eos, sunt quasi
          quo.
        </p>
      )}

      <span onClick={toggle}>{!show ? 'Read more...' : 'Read less'}</span>
    </div>
  );
};
