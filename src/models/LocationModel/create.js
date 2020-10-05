import { create as repoCreate } from 'Repos/LocationRepo';
import LocationModel from './LocationModel';

export const create = async ({ name, dimention, type }) => {
  const record = await repoCreate({
    name,
    dimention,
    type,
  });
  return new LocationModel(record);
};
