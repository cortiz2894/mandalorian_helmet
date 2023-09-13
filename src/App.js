import {useRef, useState} from 'react'
import './App.css';
import { Model } from './components/hemelt';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Logo from './components/icons/logo'
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Header from './components/Header/Index';
import Overlay from './components/Overlay/Index';


function App() {
  const [value, setValue] = useState(-2.2)
  return (
    <div className="App">
      <Header />
      <div className={'canvasRoot'}>
        <Canvas camera={{
          fov:64,
          position: [1.3, 1.5, 5.3]
        }}>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false}/>
            <ScrollControls damping={0.25} pages={3}>
              <Overlay />
              <Model rotation={value}/>
              <Environment preset="sunset" />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
export default App;
