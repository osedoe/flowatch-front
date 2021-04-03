import React, { useEffect } from 'react';

// Wrap handler in useCallback to avoid unnecessary re-renders
export function useOnClickOutside(ref: React.RefObject<any>, handler: (event) => void) {
  useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]
  );
}
