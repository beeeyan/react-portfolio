import React, {useState} from 'react';
/** @jsxImportSource theme-ui */
import {Avatar, Flex, Card, Image, Button, Grid} from 'theme-ui';
import {documentToReactComponents}
  from '@contentful/rich-text-react-renderer';
import {IChronologyFields} from '../utils/@types/generated/contentful';
import {richTextViewOptions} from './RichTextViewOption';

interface ChronologyProps {
    chronologies: IChronologyFields[]
}

/**
 *
 * @param {ChronologyProps} props
 * @return {jsx}
 */
const Histories: React.FC<ChronologyProps> = (props: ChronologyProps) => {
  const chronologylen = props.chronologies.length;
  // 直近3つを表示
  const initViewNum = chronologylen - 4;
  const [viewNum, setViewNum] = useState(initViewNum);

  return (
    <div sx={{width: '80%'}}>
      <h2>History (経歴)</h2>
      <Grid gap={2} columns={[1, null, 2]} sx={{mb: 2}}>
        <Button onClick={() => setViewNum(0)}>全て表示</Button>
        <Button onClick={() => setViewNum(initViewNum)}>直近4つのみ(初期値)</Button>
      </Grid>
      {
        props.chronologies.slice(viewNum).map((chronology, index) => (
          <Flex key={`History${index}`}>
            <div>
              <Avatar src={chronology.icon.fields.file.url}
                sx={{position: 'relative', backgroundColor: '#FFFFFF'}}/>
            </div>
            <div sx={{ml: 3, mb: 3, width: '100%'}}>
              <div sx={{borderLeft: 'thick solid #778899',
                float: 'left', height: '100%', ml: '-43px'}}></div>
              <h4>{chronology.year}年{chronology.month}月</h4>
              <Card sx={{px: 20}}>
                <h4>{chronology.title}</h4>
                {chronology.image &&
                  <Image sx={{width: '30%'}}
                    src={chronology.image.fields.file.url}
                    alt={chronology.image.fields.title}/>
                }
                {chronology.content &&
                  documentToReactComponents(chronology.content,
                      richTextViewOptions)
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
