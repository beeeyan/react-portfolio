import React, {useEffect, useState} from 'react';
/** @jsxImportSource theme-ui */
import {ThemeProvider, Flex, Theme, Container, Card} from 'theme-ui';
import {IChronologyFields, IProfileFields}
  from '../utils/@types/generated/contentful';
import {fetchChronologies, fetchProfile} from '../utils/contentFetchData';
import Navbar from './NavBar';
import Histories from './Histories';
import Profile from './Profile';
import Blog from './Blog';
import Story from './Story';
import Footer from './Footer';
import {themePlus} from '../theme';
// import logo from './logo.svg';
// import './App.css';
import {useInteractJS, puzzlePositon} from '../PuzzleHooks';
import PazzleA from '../img/sakasakuma-a.png';
import PazzleB from '../img/sakasakuma-b.png';
import PazzleC from '../img/sakasakuma-c.png';
import PazzleD from '../img/sakasakuma-d.png';
import PazzleE from '../img/sakasakuma-e.png';
import PazzleF from '../img/sakasakuma-f.png';
import PazzleG from '../img/sakasakuma-g.png';
import PazzleH from '../img/sakasakuma-h.png';
import PazzleI from '../img/sakasakuma-i.png';

/**
 * Home function
 * @return {React.FC}
 */
const Home: React.FC = () => {
  const [chronologies, setChrologies] = useState<IChronologyFields[]>([]);
  const [profile, setProfile] = useState<IProfileFields>();

  // 適切値がsetされるように書き換える。
  const fetchData = async () => {
    try {
      const chronologiesArray = await fetchChronologies();
      setChrologies(chronologiesArray as IChronologyFields[]);
      const profileDate = await fetchProfile();
      setProfile(profileDate as IProfileFields);
    } catch (error) {
      console.log(error);
    }
  };

  const placement = {
    a: {piece: useInteractJS(), image: PazzleC, ans: 'C'},
    b: {piece: useInteractJS(puzzlePositon.b), image: PazzleH, ans: 'H'},
    c: {piece: useInteractJS(puzzlePositon.c), image: PazzleE, ans: 'E'},
    d: {piece: useInteractJS(puzzlePositon.d), image: PazzleD, ans: 'D'},
    e: {piece: useInteractJS(puzzlePositon.e), image: PazzleA, ans: 'A'},
    f: {piece: useInteractJS(puzzlePositon.f), image: PazzleF, ans: 'F'},
    g: {piece: useInteractJS(puzzlePositon.g), image: PazzleB, ans: 'B'},
    h: {piece: useInteractJS(puzzlePositon.h), image: PazzleG, ans: 'G'},
    j: {piece: useInteractJS(puzzlePositon.j), image: PazzleI, ans: 'I'},
  };

  // 答えの判定フラグ
  const ansFlg = placement.a.piece.positionName === placement.a.ans &&
  placement.b.piece.positionName === placement.b.ans &&
  placement.c.piece.positionName === placement.c.ans &&
  placement.d.piece.positionName === placement.d.ans &&
  placement.e.piece.positionName === placement.e.ans &&
  placement.f.piece.positionName === placement.f.ans &&
  placement.g.piece.positionName === placement.g.ans &&
  placement.h.piece.positionName === placement.h.ans &&
  placement.j.piece.positionName === placement.j.ans;

  useEffect(() => {
    if (placement.a.piece.positionName === 'midway') {
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.b.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.c.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.d.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.e.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.f.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.g.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.h.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.j.piece.disable();
    } else if (placement.j.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
    } else {
      placement.a.piece.enable();
      placement.b.piece.enable();
      placement.c.piece.enable();
      placement.d.piece.enable();
      placement.e.piece.enable();
      placement.f.piece.enable();
      placement.g.piece.enable();
      placement.h.piece.enable();
      placement.j.piece.enable();
    }
  }, [
    placement.a.piece.positionName,
    placement.b.piece.positionName,
    placement.c.piece.positionName,
    placement.d.piece.positionName,
    placement.e.piece.positionName,
    placement.f.piece.positionName,
    placement.g.piece.positionName,
    placement.h.piece.positionName,
    placement.j.piece.positionName,
  ]);

  // 初回のみ。
  useEffect(() => {
    placement.a.piece.disable();
    placement.b.piece.disable();
    placement.c.piece.disable();
    placement.d.piece.disable();
    placement.e.piece.disable();
    placement.g.piece.disable();
    fetchData();
  }, [setChrologies, setProfile]);

  // 追加の背景色
  const backGroundColorPlus = 'background';

  return (
    <ThemeProvider theme={themePlus(false) as Theme}>
      <div>
        <Container>
          {/* ナブバー */}
          <Navbar></Navbar>
          <div id='garally'>
            <Flex sx={{py: 4, justifyContent: 'center',
              backgroundColor: backGroundColorPlus}}>
              <Card sx={{width: '400px', height: '400px'}}>
                <h3>作ったもの：パズル</h3>
                <h5 sx={{mb: 0}}>暇なときにでも遊んでみてください!!</h5>
                <h5 sx={{my: 0}}>※動かして中途半端な位置だと他のパズルを動かせません。</h5>
                <h5 sx={{my: 1, height: '1rem', color: '#FF0000'}}>
                  {ansFlg && '完成!! Congratulations!!'}
                </h5>
                <div sx={{'touchAction': 'none'}}>
                  {/* A */}
                  <div
                    ref={placement.a.piece.ref}
                    style={{
                      ...placement.a.piece.style,
                      backgroundImage: 'url(' + placement.a.image + ')',
                      backgroundSize: 'cover',
                    }}
                  >
                  </div>
                  {/* B */}
                  <div
                    ref={placement.b.piece.ref}
                    style={{
                      ...placement.b.piece.style,
                      backgroundImage: 'url(' + placement.b.image + ')',
                      backgroundSize: 'cover',
                    }}
                  >
                  </div>
                  {/* C */}
                  <div
                    ref={placement.c.piece.ref}
                    style={{
                      ...placement.c.piece.style,
                      backgroundImage: 'url(' + placement.c.image + ')',
                      backgroundSize: 'cover',
                    }}
                  >
                  </div>
                  {/* D */}
                  <div
                    ref={placement.d.piece.ref}
                    style={{
                      ...placement.d.piece.style,
                      backgroundImage: 'url(' + placement.d.image + ')',
                      backgroundSize: 'cover',
                    }}
                  >
                  </div>
                  {/* E */}
                  <div
                    ref={placement.e.piece.ref}
                    style={{
                      ...placement.e.piece.style,
                      backgroundImage: 'url(' + placement.e.image + ')',
                      backgroundSize: 'cover',
                    }}
                  >
                  </div>
                  {/* F */}
                  <div
                    ref={placement.f.piece.ref}
                    style={{
                      ...placement.f.piece.style,
                      backgroundImage: 'url(' + placement.f.image + ')',
                      backgroundSize: 'cover',
                    }}
                  >
                  </div>
                  {/* G */}
                  <div
                    ref={placement.g.piece.ref}
                    style={{
                      ...placement.g.piece.style,
                      backgroundImage: 'url(' + placement.g.image + ')',
                      backgroundSize: 'cover',
                    }}
                  >
                  </div>
                  {/* H */}
                  <div
                    ref={placement.h.piece.ref}
                    style={{
                      ...placement.h.piece.style,
                      backgroundImage: 'url(' + placement.h.image + ')',
                      backgroundSize: 'cover',
                    }}
                  >
                  </div>
                  {/* I */}
                  <div
                    ref={placement.j.piece.ref}
                    style={{
                      ...placement.j.piece.style,
                      backgroundImage: 'url(' + placement.j.image + ')',
                      backgroundSize: 'cover',
                    }}
                  >
                  </div>
                </div>
              </Card>
            </Flex>
          </div>
          {/* プロフィール */}
          <Flex id="Profile" sx={{pb: 4, justifyContent: 'center',
            backgroundColor: 'muted'}}>
            {profile &&
              <Profile {...profile} />
            }
          </Flex>
          {/* 経歴 */}
          <Flex id="History" sx={{pb: 4, justifyContent: 'center',
            backgroundColor: 'highlight'}}>
            <Histories chronologies={chronologies}/>
          </Flex>
          {/* ブログ */}
          <Flex id="Blog" sx={{pb: 4, justifyContent: 'center',
            backgroundColor: backGroundColorPlus}}>
            <Blog />
          </Flex>
          {/* ストーリー */}
          <Flex id="Story" sx={{pb: '4', justifyContent: 'center',
            backgroundColor: 'muted'}}>
            <Story />
          </Flex>
          {/* Footer */}
          <Footer></Footer>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;
