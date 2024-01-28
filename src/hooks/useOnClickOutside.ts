import { useEffect } from 'react';
import { CallbackDefault } from '../types/HelperTypes';

export const useOnClickOutside = ({ targetId, onClick }: { targetId: string; onClick: CallbackDefault }) => {
  useEffect(() => {
    const element = document.getElementById(targetId);

    const handleClickOutside = (event: MouseEvent) => {
      if (element && !element.contains(event.target as Node)) {
        onClick();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [targetId, onClick]);
};
