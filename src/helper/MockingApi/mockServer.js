import { createServer } from 'miragejs';

let server;

export function startMockServer(url, data) {
  if (server) {
    server.shutdown(); // Eski sunucuyu kapat
  }

  server = createServer({
    routes() {
      this.get(url, () => {
        return data;
      });
    }
  });
}
