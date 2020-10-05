import { findAll } from 'Models/CharacterModel';

export const main = async (event) => {
  const body = event && event.body ? JSON.parse(event.body) : { limit: 10, page: 1 };
  const args = { body };

  const limit = args.limit ? args.limit : 10;
  const offset = args.page ? args.page * limit : 0;
  const characters = await findAll({ offset, limit });
  return {
    code: 'OK',
    message: characters,
    statusCode: 200,
  };
};
