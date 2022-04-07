import './App.css';
import CardSection from './components/CardSection';
import Header from './components/Header';
import { OuterLayout } from './styles/Layout';
import styled from 'styled-components';
import ChartSection from './components/ChartSection';
import MessagingSection from './components/MessagingSection';



function App() {
  return (
    <div className="App">
        <Header />
        <OuterLayout>
          <MainStyled>
            <CardSection />
            <ChartSection />
            <MessagingSection />
          </MainStyled>
        </OuterLayout>
    </div>
  );
}

const MainStyled = styled.main`

`;

export default App;
