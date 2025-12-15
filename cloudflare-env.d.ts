// Cloudflare Email Workers types
declare module 'cloudflare:email' {
  export class EmailMessage {
    constructor(from: string, to: string, raw: string);
  }
}

// Extend the global CloudflareEnv interface from @opennextjs/cloudflare
import '@opennextjs/cloudflare';

declare global {
  interface CloudflareEnv {
    EMAIL: {
      send: (message: any) => Promise<void>;
    };
  }
}
