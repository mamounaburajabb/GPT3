import './App.css';
import { Navbar, Cta, Brand } from './components';
import { Footer, Blog, Possibility, Features , WhatGPT ,Header} from './containers';
function App() {
  return (
    <div className='App'>
      <div className='gradient-bg'>
        <Navbar />
        <Header/>
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer/>
    </div>
    
    
  );
}

export default App;
