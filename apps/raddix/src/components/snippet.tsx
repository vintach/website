interface SnippetProps {
  text: string;
}

const getTokenProps = (str: string) => {
  if (
    str === 'install' ||
    str === 'i' ||
    str === 'add' ||
    str === 'dlx' ||
    str === 'init' ||
    str === 'npx' ||
    str === 'run'
  ) {
    return { className: 'text-[#56b6c2]' };
  }

  return { className: 'text-[#D3D7CF]' };
};

const getValues = (str: string) => {
  const tokens = str.split(' ');
  const command = tokens.shift();

  return { command, tokens };
};

export const Snippet = ({ text }: SnippetProps) => {
  const { command, tokens } = getValues(text);

  return (
    <div className='my-sm rounded-xl border border-gray-100 bg-gray-120 p-sm md:px-6 md:py-[21px]'>
      <pre className='text-xs md:text-[15px]'>
        <div className='w-full'>
          <span className='text-[#56b6c2]'>{command}</span>
          {tokens.map((value, i) => (
            <span key={i} {...getTokenProps(value)}>
              &nbsp;{value}
            </span>
          ))}
        </div>
      </pre>
    </div>
  );
};
