import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Whitepaper } from './components/sections/Whitepaper';
import { FAQ } from './components/sections/FAQ';
import { JoinRevolution } from './components/sections/JoinRevolution';
import { Footer } from './components/layout/Footer';
// import { CDN_LIBRARIES } from './utils/constants';
import './index.css';

// Add window.ethereum type declarations
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on: (event: string, callback: (...args: unknown[]) => void) => void;
      removeListener: (event: string, callback: (...args: unknown[]) => void) => void;
    };
  }
}

function App() {
  return (
    <div className="min-h-screen bg-brand-bg overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Whitepaper />
        <FAQ />
        <JoinRevolution />
      </main>
      <Footer />
      
      {/* CDN Library Placeholders - uncomment when needed */}
      {/* {CDN_LIBRARIES.ETHERS} */}
      {/* {CDN_LIBRARIES.VIEM} */}
      {/* {CDN_LIBRARIES.WEB3MODAL} */}
      {/* {CDN_LIBRARIES.CHART_JS} */}
      {/* {CDN_LIBRARIES.WEB3} */}
    </div>
  );
}

export default App;
