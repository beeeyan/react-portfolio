import React from 'react';
import {IChronologyFields} from '../utils/@types/generated/contentful';

interface chronologyProps {
    chronologies: IChronologyFields[]
}

/**
 *
 * @param {hronologyProps} props
 * @return {jsx}
 */
const Histories: React.FC<chronologyProps> = (props: chronologyProps) => {
  return (
    <div>
      {
        props.chronologies.map((chronology, index) => (
          <div key={index}>{chronology.year}年{chronology.month}月</div>
        ))
      }
    </div>
  );
};

export default Histories;
