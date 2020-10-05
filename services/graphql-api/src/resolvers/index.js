import { merge } from 'Utils/ObjectUtils';
import { characterResolvers } from './character';
import { locationResolvers } from './location';

export const resolvers = merge(locationResolvers, characterResolvers);
