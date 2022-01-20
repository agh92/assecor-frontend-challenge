import { SwapyObject } from '../../core/model/swapy.object';

export interface Film extends SwapyObject {
  characters: string[];
  director: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  vehicles: string[];
}

export interface ExpandedObject extends SwapyObject {
  name: string;
}

export type ExpandedFilm = Omit<Film, 'planets' | 'characters'> & {
  characters: ExpandedObject[];
} & {
  planets: ExpandedObject[];
};
