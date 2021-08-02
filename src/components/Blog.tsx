import React from 'react';
/** @jsxImportSource theme-ui */
import {Card, Image, Divider} from 'theme-ui';
import ZennImage from '../img/zenn.png';

/**
 *
 * @return {jsx}
 */
const Blog: React.FC = () => {
  return (
    <div>
      <h2>Blog</h2>
      <Card sx={{'width': '500px'}}>
        <Image src={ZennImage} alt='zennのmypageの記事'/>
        <Divider />
        技術ブログ。はてなやQiita・Zennなど。<br />
        今後の投稿としては比較的Zennの記事が増えていく想定。<br />
        リンクは以下<br />
        <a href='https://zenn.dev/beeeyan' target='_blank' rel='noreferrer'>Zennのマイページ</a><br />
        <a href='https://qiita.com/beeeyan' target='_blank' rel='noreferrer'>Qiitaのマイページ</a><br />
        <a href='https://ashanoguzyutu.hatenablog.com' target='_blank' rel='noreferrer'>はてなブログ「ITと創作でねこを飼いたい」</a><br /><br />
        ※ 今のところZennとQiitaには明確な使い分けはない<br />
        はてなブログには軽いメモや技術以外のことも書く可能性がある<br />
      </Card>
    </div>
  );
};

export default Blog;
