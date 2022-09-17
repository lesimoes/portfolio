import { useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayout =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export { useIsomorphicLayout };
