import AppContext from './AppContext';

const {
  TOKEN_NAME,
} = process.env as { [key: string]: string };

export {
  TOKEN_NAME,
};

export const CONTEXT: AppContext = new AppContext();