import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll, afterAll, vi } from 'vitest';

beforeAll(() => {
  // FIX: Explicitly mock localStorage to prevent "clear is not a function" errors
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    },
    writable: true,
  });
});

afterEach(() => {
  cleanup();

  window.localStorage.clear(); // This will now call the mock above
});

afterAll(() => close());
