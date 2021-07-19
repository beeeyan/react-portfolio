import React, {useEffect, useState} from 'react';
/** @jsxImportSource theme-ui */
import {ThemeProvider, Theme, Flex, Box, Container, NavLink} from 'theme-ui';
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

const theme: Theme = {
  colors: {background: '#cccccc', primary: '#0077ff'},
};

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
    width: 100,
    height: 100,
    x: 100,
    y: 0,
  };
  const initPositionC = {
    width: 100,
    height: 100,
    x: 200,
    y: 0,
  };
  const initPositionD = {
    width: 100,
    height: 100,
    x: 0,
    y: 100,
  };
  const initPositionE = {
    width: 100,
    height: 100,
    x: 100,
    y: 100,
  };
  const initPositionF = {
    width: 100,
    height: 100,
    x: 200,
    y: 100,
  };
  const initPositionG = {
    width: 100,
    height: 100,
    x: 0,
    y: 200,
  };
  const initPositionH = {
    width: 100,
    height: 100,
    x: 100,
    y: 200,
  };
  const initPositionJ = {
    width: 100,
    height: 100,
    x: 300,
    y: 200,
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

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container>
          <Box as="nav" p={3} color="white" bg="primary">
            <div sx={{'display': 'inline-block'}}>
              <NavLink href="#!" p={2}>
                Home
              </NavLink>
            </div>
            <div sx={{'display': 'inline-block', 'float': 'right'}}>
              <NavLink href="#!" p={2}>
                Blog
              </NavLink>
              <NavLink href="#!" p={2}>
                About
              </NavLink>
            </div>
          </Box>
          {/* {
            chronologies.map((chronology, index) => (
              <div key={index}>{chronology.year}</div>
            ))
          } */}
          <div sx={{ml: '-200px'}}>
            <Flex sx={{'mt': 4, 'justify-content': 'center'}}>
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
            </Flex>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;