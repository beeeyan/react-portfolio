import React, {ReactNode} from 'react';
import {Options} from '@contentful/rich-text-react-renderer';

export const richTextViewOptions: Options = {
  renderText: (text : string) => {
    return text.split('\n')
        .reduce((children: ReactNode[], textSegment: string,
            index: number): ReactNode[] => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
  },
};

