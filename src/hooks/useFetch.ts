import { useEffect, useState } from 'react';
import { options } from '../atom/options';
import { useRecoilValue } from 'recoil';
import { NickName } from '../types/nickname';

interface FetchRes<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
}

const shuffle = <T>(arr: Array<T>) => {
  return arr.sort(() => Math.random() - 0.5);
};

export const useFetch = <T>(url: string): FetchRes<T> => {
  const option = useRecoilValue(options);
  const [data, setData] = useState<T | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const body = await response.json();

        const filteredNicknames = body.filter((item: NickName) => {
          return (
            item.keyword === option.keyword &&
            item.lang === option.lang &&
            item.length === +option.length
          );
        });

        shuffle(filteredNicknames);

        setData(
          filteredNicknames.slice(0, 8).map((item: NickName) => item.name)
        );
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, isError };
};
