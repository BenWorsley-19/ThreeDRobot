import {StarsCanvas, Hero } from './components';

const App = () => {

  return (
    <div className="h-screen w-screen bg-black">
       <div className="relative z-0 h-screen w-screen">
          <Hero />
          <StarsCanvas />
       </div>
     </div>
  )
}

export default App