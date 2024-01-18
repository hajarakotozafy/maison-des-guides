import { Routes, Route } from 'react-router-dom';

import Theme from './Core/theme/index';
import Styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Core/theme/GlobalStyles';

import Navbar from './Components/Navbar';

import HeroSection from './Components/HeroSection'

function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HeroSection/>}/>
        </Routes>
        <Placeholder>
          <h3>Placeholder</h3>
        </Placeholder>
      </ThemeProvider> 
    </>
  )
}

export default App


const Placeholder = Styled.div`
position: relative;
  width: 100%;
  height: 320px;
  color: ${(props) => props.theme.colors.brandColor};
  opacity: 0.2;
  background: #ffffff;
  h3{
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: 800;
    transform: translate(-50%, -50%);
  }
`