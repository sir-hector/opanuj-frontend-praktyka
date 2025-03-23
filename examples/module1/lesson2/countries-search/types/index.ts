export type Country = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  cca3: string;
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  capital?: string[];
};

export type FilterOptions = 'name' | 'currency' | 'language' | 'capital';
export type SortOptions = 'alphabetical' | 'population';
