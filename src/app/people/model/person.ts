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
