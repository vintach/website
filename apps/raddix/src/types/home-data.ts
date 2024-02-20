export interface HeroProps {
  title: string;
  description: string;
  button: {
    text: string;
    to: string;
  };
}

export interface Feature {
  title: string;
  description: string;
}

export interface HomeData {
  hero: HeroProps;
  features: Feature[];
}
