import { UserInputError, ApolloError } from 'apollo-server-lambda';
import { invoke } from 'Utils/LambdaUtils';

export const locations = async (parent, args, context) => {
  const { code, message, statusCode } = await invoke({
    serviceName: 'location-api',
    functionName: 'getLocations',
    payload: { args },
    context,
  });

  if (statusCode === 400) {
    throw new UserInputError(message);
  } else if (statusCode > 400) {
    throw new ApolloError(message, code);
  }

  return message;
};
