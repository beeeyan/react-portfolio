import React from 'react';
/** @jsxImportSource theme-ui */
import {Avatar, Flex} from 'theme-ui';
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
          <Flex key={`History${index}`}>
            <Avatar src={chronology.icon.fields.file.url}/>
            {chronology.year}年{chronology.month}月
          </Flex>
        ))
      }
    </div>
  );
};

export default Histories;
