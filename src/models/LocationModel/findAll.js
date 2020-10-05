import { findAll as repoFindAll } from 'Repos/LocationRepo';
import LocationModel from './LocationModel';

/**
 *
 * @param {int} limit
 * @param {int} offset
 */
export const findAll = async (args) => {
  const locations = await repoFindAll(args);
  return locations.map((location) => new LocationModel(location));
};
