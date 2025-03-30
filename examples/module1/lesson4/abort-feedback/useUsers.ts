import { useState, useEffect, useCallback } from 'react';

const API_URL = '/api/data/users?timeout=10000';

const useUsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isTimeout, setIsTimeout] = useState<boolean>(false);
  const [retry, setRetry] = useState<number>(0);

  const fetchUsers = useCallback(() => {
    setIsTimeout(false); // Reset timeout flag before new request

    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
      setIsTimeout(true);
      controller.abort(); // Anuluj zapytanie, jeśli przekroczono czas
    }, 5000);

    fetch(API_URL, { signal })
      .then((res) => res.json())
      .then(({ users }) => {
        setUsers(users);
        setIsTimeout(false); // Ukryj komunikat timeout, jeśli udało się pobrać dane
      })
      .catch((error) => {
        if (error.name === 'AbortError') return; // Ignoruj przerwane żądania
        setIsTimeout(true);
      })
      .finally(() => clearTimeout(timeoutId));
  }, [retry]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, isTimeout, retryFetch: () => setRetry((r) => r + 1) };
};

export default useUsersClient;
