import { findById as repoFindById } from 'Repos/LocationRepo';
import LocationModel from './LocationModel';

export const findById = async (id) => {
  const location = await repoFindById(id);
  return new LocationModel(location);
};
