import { useState, useCallback, useContext } from 'react';
import axios from 'axios';
import { Context } from '../store/common';

const TOKEN = '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';

function useInfiniteScroll(url, size) {
  const { setSuccess, setError } = useContext(Context);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchingNext = useCallback(() => {
    const getNext = async () => {
      await axios
        .get(url, {
          params: {
            page,
            size: 30,
            sort: 'comments',
          },
          headers: {
            Authorization: TOKEN,
          },
        })
        .then((res) => {
          setPage((prev) => prev + 1);
          setData((prev) => {
            const newData = [...prev];
            newData.push(res);
            return newData;
          });
          setSuccess();
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    getNext();
  }, [page, size, url]);

  return { page, data, fetchingNext };
}

export default useInfiniteScroll;
