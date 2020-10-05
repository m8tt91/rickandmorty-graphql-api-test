import { GenericError } from 'Errors';
import { collection } from './collection';

/**
 * Finds a Rick and Morty Character by their ID.
 * @param {Int} id The ID of the character to return.
 */
export const findById = async (id) => {
  try {
    const record = await collection.findOne({ where: { id } });
    if (record) {
      return record.dataValues;
    }

    return {};
  } catch (e) {
    console.log(e);
    throw new GenericError();
  }
};
