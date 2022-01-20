import { SwapyObject } from '../../core/model/swapy.object';

export interface Planet extends SwapyObject {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
}

export interface ExpandedFilm extends SwapyObject {
  title: string;
}

export interface ExpandedResident extends SwapyObject {
  name: string;
}

export type ExpandedPlanet = Omit<Planet, 'films' | 'residents'> & { films: ExpandedFilm[] } & {
  residents: ExpandedResident[];
};
