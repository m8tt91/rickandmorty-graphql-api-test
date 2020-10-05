import { findById } from 'Models/LocationModel';

/**
 *
 * @param {object} event Lambda event object.
 */
export const main = async (event) => {
  const body = JSON.parse(event.body);

  // Todo: Add some error handling to check if id isn't blank.
  const characterId = body.id;
  const character = await findById(characterId);
  if (character.id) {
    return {
      code: 'OK',
      message: character,
      statusCode: 200,
    };
  }

  return {
    code: 'ERROR',
    message: 'CHARACTER NOT FOUND',
    statusCode: 404,
  };
};
