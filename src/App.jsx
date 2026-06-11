import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBento from './components/FeaturesBento';
import NodeEditor from './components/NodeEditor';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Docs from './components/Docs';

function App() {
  var [page, setPage] = useState('home');

  return (
    <div className="selection:bg-primary selection:text-on-primary">
      <Navbar page={page} onNavigate={setPage} />
      {page === 'docs' ? <Docs onNavigate={setPage} /> : (
        <>
          <Hero />
          <FeaturesBento />
          <NodeEditor />
          <Pricing />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
