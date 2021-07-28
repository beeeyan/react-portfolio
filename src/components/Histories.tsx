import React from 'react';
/** @jsxImportSource theme-ui */
import {Avatar, Flex, Card} from 'theme-ui';
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
      <h2>History (経歴)</h2>
      {
        props.chronologies.map((chronology, index) => (
          <Flex key={`History${index}`}>
            <div>
              <Avatar src={chronology.icon.fields.file.url}
                sx={{'position': 'relative', 'backgroundColor': '#FFFFFF'}}/>
            </div>
            <div sx={{ml: 3, width: '100%'}}>
              <div sx={{'border-left': 'thick solid #778899',
                'float': 'left', 'height': '95%', 'ml': '-43px'}}></div>
              {chronology.year}年{chronology.month}月
              <Card>
                <h4>{chronology.title}</h4>
                {chronology.content}
              </Card>
            </div>
          </Flex>

        ))
      }
    </div>
  );
};

export default Histories;
