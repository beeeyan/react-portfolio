import React, {useEffect, useState} from 'react';
/** @jsxImportSource theme-ui */
import {ThemeProvider, Flex, Theme, Container, Card} from 'theme-ui';
import {swiss} from '@theme-ui/preset-swiss';
import Navbar from './NavBar';
import Histories from './Histories';
import {IChronologyFields} from '../utils/@types/generated/contentful';
import {fetchChronologies} from '../utils/contentFetchData';
// import logo from './logo.svg';
// import './App.css';
import {useInteractJS} from '../hooks';
import PazzleA from '../img/sakasakuma-a.png';
import PazzleB from '../img/sakasakuma-b.png';
import PazzleC from '../img/sakasakuma-c.png';
import PazzleD from '../img/sakasakuma-d.png';
import PazzleE from '../img/sakasakuma-e.png';
import PazzleF from '../img/sakasakuma-f.png';
import PazzleG from '../img/sakasakuma-g.png';
import PazzleH from '../img/sakasakuma-h.png';
import PazzleJ from '../img/sakasakuma-j.png';


/**
 * Home function
 * @return {jsx}
 */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const theme: Theme = {
//   colors: {background: '#cccccc', primary: '#0077ff'},
// };

/**
 * home function
 * @return {React.FC}
 */
const Home: React.FC = () => {
  const [chronologies, setChrologies] = useState<IChronologyFields[]>([]);

  // 適切値がsetされるように書き換える。
  const fetchData = async () => {
    try {
      const chronologiesArray = await fetchChronologies();
      setChrologies(chronologiesArray as IChronologyFields[]);
      console.log(chronologiesArray);
      console.log(chronologies);
    } catch (error) {
      console.log(error);
    }
  };

  const initPositionB = {
    width: 80,
    height: 80,
    x: 80,
    y: 0,
  };
  const initPositionC = {
    width: 80,
    height: 80,
    x: 160,
    y: 0,
  };
  const initPositionD = {
    width: 80,
    height: 80,
    x: 0,
    y: 80,
  };
  const initPositionE = {
    width: 80,
    height: 80,
    x: 80,
    y: 80,
  };
  const initPositionF = {
    width: 80,
    height: 80,
    x: 160,
    y: 80,
  };
  const initPositionG = {
    width: 80,
    height: 80,
    x: 0,
    y: 160,
  };
  const initPositionH = {
    width: 80,
    height: 80,
    x: 80,
    y: 160,
  };
  const initPositionJ = {
    width: 80,
    height: 80,
    x: 240,
    y: 160,
  };
  const interactA = useInteractJS();
  const interactB = useInteractJS(initPositionB);
  const interactC = useInteractJS(initPositionC);
  const interactD = useInteractJS(initPositionD);
  const interactE = useInteractJS(initPositionE);
  const interactF = useInteractJS(initPositionF);
  const interactG = useInteractJS(initPositionG);
  const interactH = useInteractJS(initPositionH);
  const interactJ = useInteractJS(initPositionJ);

  useEffect(() => {
    console.log('useEffect');
    if (interactA.positionName === 'midway') {
      interactB.disable();
      interactC.disable();
      interactD.disable();
      interactE.disable();
      interactF.disable();
      interactG.disable();
      interactH.disable();
      interactJ.disable();
    } else if (interactB.positionName === 'midway') {
      interactA.disable();
      interactC.disable();
      interactD.disable();
      interactE.disable();
      interactF.disable();
      interactG.disable();
      interactH.disable();
      interactJ.disable();
    } else if (interactC.positionName === 'midway') {
      interactA.disable();
      interactB.disable();
      interactD.disable();
      interactE.disable();
      interactF.disable();
      interactG.disable();
      interactH.disable();
      interactJ.disable();
    } else if (interactD.positionName === 'midway') {
      interactA.disable();
      interactB.disable();
      interactC.disable();
      interactE.disable();
      interactF.disable();
      interactG.disable();
      interactH.disable();
      interactJ.disable();
    } else if (interactE.positionName === 'midway') {
      interactA.disable();
      interactB.disable();
      interactC.disable();
      interactD.disable();
      interactF.disable();
      interactG.disable();
      interactH.disable();
      interactJ.disable();
    } else if (interactF.positionName === 'midway') {
      interactA.disable();
      interactB.disable();
      interactC.disable();
      interactD.disable();
      interactE.disable();
      interactG.disable();
      interactH.disable();
      interactJ.disable();
    } else if (interactG.positionName === 'midway') {
      interactA.disable();
      interactB.disable();
      interactC.disable();
      interactD.disable();
      interactE.disable();
      interactF.disable();
      interactH.disable();
      interactJ.disable();
    } else if (interactH.positionName === 'midway') {
      interactA.disable();
      interactB.disable();
      interactC.disable();
      interactD.disable();
      interactE.disable();
      interactF.disable();
      interactG.disable();
      interactJ.disable();
    } else if (interactJ.positionName === 'midway') {
      interactA.disable();
      interactB.disable();
      interactC.disable();
      interactD.disable();
      interactE.disable();
      interactF.disable();
      interactG.disable();
      interactH.disable();
    } else {
      interactA.enable();
      interactB.enable();
      interactC.enable();
      interactD.enable();
      interactE.enable();
      interactF.enable();
      interactG.enable();
      interactH.enable();
      interactJ.enable();
    }
  }, [
    interactA.positionName,
    interactB.positionName,
    interactC.positionName,
    interactD.positionName,
    interactE.positionName,
    interactF.positionName,
    interactG.positionName,
    interactH.positionName,
    interactJ.positionName,
  ]);

  // 初回のみ。
  useEffect(() => {
    console.log('first set');
    interactA.disable();
    interactB.disable();
    interactC.disable();
    interactD.disable();
    interactE.disable();
    interactG.disable();
    fetchData();
  }, [setChrologies]);

  const swissplus = {
    ...swiss,
    cards: {
      primary: {
        padding: 2,
        borderRadius: 4,
        background: 'hsl(10, 20%, 94%)',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      },
      compact: {
        padding: 1,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'muted',
      },
    },
    images: {
      avatar: {
        width: 48,
        height: 48,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
        borderRadius: 99999,
      },
    },
  };


  return (
    <ThemeProvider theme={swissplus as Theme}>
      <div>
        <Container>
          {/* ナブバー */}
          <Navbar></Navbar>
          <div>
            <Flex sx={{'mt': 4, 'justify-content': 'center'}}>
              <Card sx={{'width': '400px', 'height': '400px',
                'background-color': 'hsl(10, 20%, 94%)'}}>
                <h3>作ったもの：パズル</h3>
                <h5 sx={{mb: 0}}>暇なときにでも遊んでみてください!!</h5>
                <h5 sx={{mt: 0}}>※中途半端な位置だと他のパズルは動きません</h5>
                {/* A (0,0) */}
                <div
                  ref={interactA.ref}
                  style={{
                    ...interactA.style,
                    backgroundImage: 'url(' + PazzleC + ')',
                    backgroundSize: 'cover',
                  }}
                >
                </div>
                {/* B (100,0) */}
                <div
                  ref={interactB.ref}
                  style={{
                    ...interactB.style,
                    backgroundImage: 'url(' + PazzleH + ')',
                    backgroundSize: 'cover',
                  }}
                >
                </div>
                {/* C (200,0) */}
                <div
                  ref={interactC.ref}
                  style={{
                    ...interactC.style,
                    backgroundImage: 'url(' + PazzleE + ')',
                    backgroundSize: 'cover',
                  }}
                >
                </div>
                {/* D (0,100) */}
                <div
                  ref={interactD.ref}
                  style={{
                    ...interactD.style,
                    backgroundImage: 'url(' + PazzleD + ')',
                    backgroundSize: 'cover',
                  }}
                >
                </div>
                {/* E (100,100) */}
                <div
                  ref={interactE.ref}
                  style={{
                    ...interactE.style,
                    backgroundImage: 'url(' + PazzleA + ')',
                    backgroundSize: 'cover',
                  }}
                >
                </div>
                {/* F (200,100) */}
                <div
                  ref={interactF.ref}
                  style={{
                    ...interactF.style,
                    backgroundImage: 'url(' + PazzleF + ')',
                    backgroundSize: 'cover',
                  }}
                >
                </div>
                {/* G (0,200) */}
                <div
                  ref={interactG.ref}
                  style={{
                    ...interactG.style,
                    backgroundImage: 'url(' + PazzleB + ')',
                    backgroundSize: 'cover',
                  }}
                >
                </div>
                {/* H (100,200) */}
                <div
                  ref={interactH.ref}
                  style={{
                    ...interactH.style,
                    backgroundImage: 'url(' + PazzleG + ')',
                    backgroundSize: 'cover',
                  }}
                >
                </div>
                {/* I (200,200) */}
                <div
                  ref={interactJ.ref}
                  style={{
                    ...interactJ.style,
                    backgroundImage: 'url(' + PazzleJ + ')',
                    backgroundSize: 'cover',
                  }}
                >
                </div>
              </Card>
            </Flex>
          </div>
          {/* 経歴 */}
          <Flex id="History" sx={{'mt': '30', 'justify-content': 'center'}}>
            <Histories chronologies={chronologies}/>
          </Flex>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;
