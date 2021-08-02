import React from 'react';
/** @jsxImportSource theme-ui */
import {Avatar, Flex, Card} from 'theme-ui';
import {documentToReactComponents, Options}
  from '@contentful/rich-text-react-renderer';
import {IChronologyFields} from '../utils/@types/generated/contentful';

interface ChronologyProps {
    chronologies: IChronologyFields[]
}

const options: Options = {
  renderText: (text) => {
    return text.split('\n')
        .reduce((children: any[], textSegment: string,
            index: number): any[] => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
  },
};

/**
 *
 * @param {ChronologyProps} props
 * @return {jsx}
 */
const Histories: React.FC<ChronologyProps> = (props: ChronologyProps) => {
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
            <div sx={{ml: 3, mb: 3, width: '100%'}}>
              <div sx={{'borderLeft': 'thick solid #778899',
                'float': 'left', 'height': '100%', 'ml': '-43px'}}></div>
              {chronology.year}年{chronology.month}月
              <Card>
                <h4>{chronology.title}</h4>
                {chronology.image &&
                  <img sx={{width: '30%'}}
                    src={chronology.image.fields.file.url}
                    alt={chronology.image.fields.title}/>
                }
                {chronology.content &&
                  documentToReactComponents(chronology.content, options)
                }
              </Card>
            </div>
          </Flex>

        ))
      }
    </div>
  );
};

export default Histories;
