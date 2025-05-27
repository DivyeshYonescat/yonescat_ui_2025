import { useState } from 'react';

const useError = () => {
  const [error, setError] = useState(null);

  // Function to show an error
  const showError = (message) => {
    setError(message);
  };

  // Function to clear the error
  const clearError = () => {
    setError(null);
  };

  return {
    error,
    showError,
    clearError,
  };
};

export default useError;
