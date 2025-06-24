// Additional polyfills for better Hermes compatibility
if (typeof globalThis.process === 'undefined') {
  globalThis.process = {
    env: {},
    version: '',
    versions: {},
  } as any;
} 