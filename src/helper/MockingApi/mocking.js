import { useEffect, useState } from 'react';
import { createServer } from 'miragejs';

export function fetchDataAndSetupMockServer(url, data) {
  createServer({
    routes() {
      this.get(url, () => {
        return data;
      });
    }
  });

  return fetch(url)
    .then((r) => r.json())
    .catch((error) => {
      console.error('Veri çekme hatası:', error);
    });
}

// Kullanıcı veriyi çekmek istediğinde bu işlevi çağırabilir
export function useMocking(url, data) {
  const [mockingData, setMockingData] = useState([]);

  useEffect(() => {
    fetchDataAndSetupMockServer(url,data)
      .then((data) => setMockingData(data));
  }, [url, data]);

  return mockingData;
}
