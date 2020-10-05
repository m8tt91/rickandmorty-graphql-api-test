import { GenericError } from 'Errors';
import { collection } from './collection';

/**
 *
 * @param {int} limit
 * @param {int} offset
 */
export const findAll = async (args) => {
  try {
    const limit = args && args.limit ? args.limit : 10;
    const offset = args && args.offset ? args.offset : 0;

    const records = await collection.findAll({ limit, offset });
    return records.map((record) => record.dataValues);
  } catch (e) {
    throw new GenericError();
  }
};
