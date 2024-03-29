import React from 'react';
/** @jsxImportSource theme-ui */
import {Card, Image} from 'theme-ui';
import {documentToReactComponents}
  from '@contentful/rich-text-react-renderer';
import {IProfileFields} from '../utils/@types/generated/contentful';
import {richTextViewOptions} from './RichTextViewOption';

/**
 * Profileコンポーネント
 * @param {IProfileFields} props
 * @return {jsx}
 */
const Profile: React.FC<IProfileFields> = (props: IProfileFields) =>
  (
    <div sx={{width: ['70%', null, '50%']}}>
      <h2>Profile</h2>
      <Card sx={{p: 20}}>
        <div sx={{textAlign: 'center'}}>
          <h2>NAME : {props.name}</h2>
          <Image
            src={'https:' + props.image.fields.file?.url}
            // 過去のソースコードから変更
            alt={`${props.image.fields.title}`}/>
        </div>
        <h4 sx={{mb: -2}}>自己紹介文</h4>
        {documentToReactComponents(props.content, richTextViewOptions)}
        <h4 sx={{mb: 1}}>保有資格</h4>
        <details>
          <summary>確認する</summary>
          {props.qualifications &&
           props.qualifications.items.map((item: string, index: number) => (
             <div key={`Qualification${index}`}>{item}</div>
           ))
          }
        </details>
        <h4 sx={{mb: 1}}>触れたことのある技術</h4>
        <details>
          <summary>確認する</summary>
          {props.skills &&
           props.skills.items.map((item: string, index: number) => (
             <div key={`skill${index}`}>{item}</div>
           ))
          }
        </details>
        <h4 sx={{mb: 1}}>このサイトについて</h4>
        React × TypeScriptで作成。
        ポートフォリオの役割を担っており、あまり細かいことは書きませんでした。<br/>
        より詳しい（雑多な）情報は以下にまとめています。<br/>
        Scrapbox : <a href='https://scrapbox.io/beeeyan-trial-box/' target='_blank' rel='noopener noreferrer'>beeeyan-trial-box</a>
      </Card>
    </div>
  );

export default Profile;
