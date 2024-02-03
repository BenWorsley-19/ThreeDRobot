import {RobotCanvas, StarsCanvas, EarthCanvas } from './components';

const App = () => {

  return (
    <div className="h-screen w-screen bg-black">
       <div className="relative z-0 h-screen w-screen">
          <div className='h-screen'>
            <div className='h-[35%]'>
              <RobotCanvas />
            </div>
            <div className='h-[65%] mt-0'>
              <EarthCanvas />
            </div>
          </div>
          <StarsCanvas />
       </div>
     </div>
  )
}

export default App