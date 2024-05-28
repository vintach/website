import { configSite } from 'content/site/_config';

interface OGProps {
  preTitle?: string;
  title?: string;
  description?: string;
}

export const OG = ({ title, preTitle, description }: OGProps) => {
  const site = configSite.meta;

  return (
    <div
      style={{
        background: '#0a0a10',
        width: 1200,
        height: 630,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '80px',
          width: '55%',
          boxSizing: 'border-box'
        }}
      >
        {preTitle && (
          <span
            style={{
              display: 'block',
              fontFamily: 'InterBold',
              fontWeight: 700,
              fontSize: 78,
              letterSpacing: '-.04em',
              lineHeight: '78px',
              color: '#00000000',
              backgroundClip: 'text',
              backgroundImage:
                'linear-gradient(to bottom right, #4341f5, #9153fe)',
              marginBottom: '10px'
            }}
          >
            {preTitle}
          </span>
        )}
        <h1
          style={{
            fontFamily: 'InterBold',
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: '-.04em',
            lineHeight: '80px',
            color: '#f0f0f0',
            marginBottom: '17px'
          }}
        >
          {title ?? site?.title}
        </h1>
        {description && (
          <p
            style={{
              fontFamily: 'InterRegular',
              fontSize: 32,
              color: '#cececf',
              letterSpacing: '-.01em',
              lineHeight: '40px'
            }}
          >
            {description}
          </p>
        )}
      </div>
      <div style={{ width: '45%' }}></div>
    </div>
  );
};
