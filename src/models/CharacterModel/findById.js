import { findById as repoFindById } from 'Repos/CharacterRepo';
import CharacterModel from './CharacterModel';

export const findById = async (id) => {
  const character = await repoFindById(id);
  return new CharacterModel(character);
};
