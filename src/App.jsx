import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Experience />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </>
  );
}

export default App;
