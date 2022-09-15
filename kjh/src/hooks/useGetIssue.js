import { useState, useEffect } from 'react';
import axios from 'axios';

const TOKEN = process.env.TOKEN;
const URL = process.env.API_URL;

function useGetIssue() {
  const [issue, setIssue] = useState([]);

  useEffect(() => {
    const getIssue = async () => {
      const response = await axios.get(URL, {
        headers: {
          Authorization: TOKEN,
        },
      });
      setIssue((prevIssue) => {
        return [...prevIssue, ...response.data];
      });
    };

    getIssue();
  }, []);

  return { issue };
}

export default useGetIssue;
