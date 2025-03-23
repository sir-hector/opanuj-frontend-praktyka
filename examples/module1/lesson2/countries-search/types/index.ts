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
};

export type SearchType = 'name' | 'currency';
