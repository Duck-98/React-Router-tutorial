import { useState, useEffect } from 'react';
//  Promise의 대기중 상태를 관리하기 위한 커스텀 Hook
// loading -> 준비중 resolved -> 완료 error -> 에러
export default function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [loading, resolved, error];
}
