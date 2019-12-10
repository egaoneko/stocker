export const IS_SERVER: boolean = typeof window === 'undefined';

const TOKEN_NAME: string = process.env.TOKEN_NAME || '';
const API_SEVER: string = process.env.API_SEVER || '';

export {
  TOKEN_NAME,
  API_SEVER,
};