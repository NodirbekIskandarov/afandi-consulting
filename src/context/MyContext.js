// Create a new file: TextContext.js
import { createContext } from 'react';

// Create the context with a default value
const MyContext = createContext({
  text: '',
  setText: () => {}
});

export default MyContext;
