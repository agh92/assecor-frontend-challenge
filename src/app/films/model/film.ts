import { SwapyObject } from '../../model/swapy.object';

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
