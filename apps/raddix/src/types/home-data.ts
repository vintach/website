interface Content {
  antisubtitle: string;
  subtitle: string;
  description: string;
}

export interface HeroProps {
  title: string;
  description: string;
  button: string;
}

export interface AccessibleProps extends Content {
  main: {
    dataCard: {
      title: string;
      icon: string;
      description: string;
    }[];
  };
}

export interface StylingProps extends Content {}

export interface HomeData {
  hero: HeroProps;
  accessible: AccessibleProps;
  styling: StylingProps;
}
