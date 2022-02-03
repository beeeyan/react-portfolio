import React from 'react';
/** @jsxImportSource theme-ui */
import {Card, Grid, Image, Divider} from 'theme-ui';
import scbShosetuImage from '../img/scb-sinkiyuto-world.png';

/**
 *
 * @return {jsx}
 */
const Story: React.FC = () => {
  return (
    <div sx={{'width': '80%'}}>
      <h2>Story</h2>
      <Grid gap={4} columns={[1, null, 2]}>
        <Card>
          <Image src={scbShosetuImage} alt='小説用のScrapboxの画像'/>
          <Divider />
          <div sx={{pr: 20, pl: 20, pb: 20}}>
            <h4>Scrapboxへのリンク</h4>
            現在公開中の小説についてScrapboxというサイトにまとめており、<br />
            そちらのリンクが以下になります。<br />
            <a href='https://scrapbox.io/sinkiyuto-world/作品紹介' target='_blank' rel='noreferrer'>Scrapbox作品紹介ページ</a><br />
            モノ書きさんにもScrapboxというサービスはとてもおすすめなので、<br />
            この機会によかったら触ってみてください！
          </div>
        </Card>
        <Card sx={{px: 20}}>
          <h4>小説サイト</h4>
          現在利用させてもらっている小説投稿サイトへの直リンクです。<br />
          (Scrapboxにあらすじ等まとめてあるので、Scrapbox経由を推奨中です)<br />
          <br />
          [小説家になろう掲載作品]<br />
          ユウ<br />
          黒い鳥<br />
          白い部屋<br />
          誕生日は一ヶ月後<br />
          リハーサルは存在しない<br />
          月曜日の同居<br />
          <br />
          [monogatary掲載作品]<br />
          人語翻訳機<br />
          <Divider />
          <a href='https://mypage.syosetu.com/377342/' target='_blank' rel='noreferrer'>小説家になろう</a><br />
          <a href='https://monogatary.com/user_page/story/5e2d9ea0-ee1a-11e8-8041-0242ac120002' target='_blank' rel='noreferrer'>monogatary</a><br />
        </Card>
      </Grid>
    </div>
  );
};

export default Story;
