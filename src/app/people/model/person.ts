import { SwapyObject } from '../../model/swapy.object';

export interface Person extends SwapyObject {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: 'male' | 'female' | 'n/a';
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
}

export interface ExpandedFilm extends SwapyObject {
  title: string;
}

export interface ExpandedHomeworld extends SwapyObject {
  name: string;
}

export type ExpandedPerson = Omit<Person, 'films' | 'homeworld'> & { films: ExpandedFilm[] } & {
  homeworld: ExpandedHomeworld;
};
