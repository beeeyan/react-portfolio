// import {swiss} from '@theme-ui/preset-swiss';
import {roboto} from '@theme-ui/preset-roboto';

export const themePlus = (isDark: boolean) => {
  const theme = isDark? roboto : roboto;
  return (
    {
      ...theme,
      cards: {
        primary: {
          padding: 2,
          borderRadius: 4,
          backgroundColor: 'background',
          borderColor: 'muted',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
        },
        compact: {
          padding: 1,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'muted',
        },
      },
      images: {
        avatar: {
          width: 48,
          height: 48,
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
          borderRadius: 99999,
        },
      },
    }
  );
};
