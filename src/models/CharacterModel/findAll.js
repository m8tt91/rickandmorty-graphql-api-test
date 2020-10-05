import { findAll as repoFindAll } from 'Repos/CharacterRepo';
import CharacterModel from './CharacterModel';

/**
 *
 * @param {int} limit
 * @param {int} offset
 */
export const findAll = async (args) => {
  const characters = await repoFindAll(args);
  return characters.map((character) => new CharacterModel(character));
};
