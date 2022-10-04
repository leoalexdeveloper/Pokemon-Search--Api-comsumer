export type PokemonResults = {
  name: string;
  url: string;
};

export type Pokemons = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResults[];
};

export type PokemonInfo = {
  species: { name: string; url: string };
  abilities: [{ ability: { name: string; url: string } }];
  stats: [
    { base_stat: number; effort: number; stat: { name: string; url: string } }
  ];
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  weight: string;
};
