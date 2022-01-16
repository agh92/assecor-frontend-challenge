import { Injectable } from '@angular/core';

const filmsRoot = 'assets/images/films';
const peopleRoot = 'assets/images/people';
const planetsRoot = 'assets/images/planets';
const baseName = 'Unbenannt';

@Injectable({
  providedIn: 'root',
})
export class RandomImageService {
  private static randomImage(path: string) {
    const index = RandomImageService.getRandomIndex();
    return `${path}-${index}.png`;
  }

  private static getRandomIndex() {
    return Math.floor(Math.random() * 6);
  }

  getRandomFilmImage() {
    return RandomImageService.randomImage(`${filmsRoot}/${baseName}`);
  }

  getRandomPersonImage() {
    return RandomImageService.randomImage(`${peopleRoot}/${baseName}`);
  }

  getRandomPlanetImage() {
    return RandomImageService.randomImage(`${planetsRoot}/${baseName}`);
  }
}
