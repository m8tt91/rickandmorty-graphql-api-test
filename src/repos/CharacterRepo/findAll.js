import { GenericError } from 'Errors';
import { collection } from './collection';

/**
 *
 * @param {int} limit
 * @param {int} offset
 */
export const findAll = async (limit = 10, offset = 0) => {
  try {
    const records = await collection.findAll({ limit, offset });
    return records.map((record) => record.dataValues);
  } catch (e) {
    throw new GenericError();
  }
};
