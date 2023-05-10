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

interface DataCard {
  title: string;
  icon: string;
  description: string;
}

export interface AccessibleProps extends Content {
  main: {
    dataCard: DataCard[];
  };
}

export interface StylingProps extends Content {}

export interface HomeData {
  hero: HeroProps;
  accessible: AccessibleProps;
  styling: StylingProps;
}
