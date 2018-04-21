import GraphQLDate from 'graphql-date';

import TweetResolvers from './tweet-resolvers';
import UserResolvers from './user-resolvers';
import userResolvers from './user-resolvers';

export default {
  Date: GraphQLDate,
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
    me: userResolvers.me,
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserResolvers.signup,
    login: UserResolvers.login,
  },
};
