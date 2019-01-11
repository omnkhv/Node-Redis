const text = {
  FAILED_CONNECT_REDIS: 'FAILED_CONNECT_REDIS',
  FAILED_GET_ERR: 'FAILED_GER_ERR',
  OK_CONNECT_REDIS: 'OK_CONNECT_REDIS',
  FAILED_RESET: 'FAILED_RESET_IN_PROCESSING',
  SUBSCRIBED_TO_CHANNEL: 'SUBSCRIBED_TO_CHANNEL:',
  RECIEVED_MESSAGE_FROM_CHANNEL: 'RECIEVED_MESSAGE_FROM_CHANNEL:',
  RECIEVED_ERR_MESSAGE_FROM_CHANNEL: 'RECIEVED_ERR_MESSAGE_FROM_CHANNEL:',
  MESSAGE_PROCESSED: 'MESSAGE_PROCESSED',
  MESSAGE_GENERATED: 'MESSAGE_GENERATED',
  SET_MESSAGE_TO_REDIS: 'SET_MESSAGE_TO_REDIS',
  DELETE_MESSAGE_FROM_REDIS: 'DELETE_MESSAGE_FROM_REDIS',
  OPEN_CHANNEL: 'OPEN_CHANNEL',
  CLOSE_CHANNEL: 'CLOSE_CHANNEL'
};

const REDIS_EXPIRE_SEC = 1000;

const MESSAGE_INTERVAL = 500;

const MAX_RANDOM_STRING_LENGTH = 10; // 100

const CHANNEL_NAME = 'MessageChannel';

const MESSAGE_LIST = 'MessageList';

const MESSAGE_TYPE = 'msg';

module.exports = {
  text,
  CHANNEL_NAME,
  MESSAGE_LIST,
  MESSAGE_TYPE,
  MESSAGE_INTERVAL,
  REDIS_EXPIRE_SEC,
  MAX_RANDOM_STRING_LENGTH
};
