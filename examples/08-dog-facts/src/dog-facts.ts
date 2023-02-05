import { shuffle } from 'lodash';
import { data } from './data';

export type DogFactType = {
  id: number,
  fact: string
}

export const fetchDogFacts = (n:number) => {
  return Promise.resolve(data).then((facts) => shuffle(facts).slice(0, n))
}
