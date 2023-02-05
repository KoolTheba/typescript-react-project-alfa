import {shuffle} from 'lodash';
import {charactersData} from './data';

export type CharacterType = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
}

export const fetchCharacter = (): Promise<CharacterType> => {
  const [character] = shuffle(charactersData);
  return Promise.resolve(character)
}
