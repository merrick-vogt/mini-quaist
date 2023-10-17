
import React, { useContext, useState } from "react";
import Nav from "components/Nav";
import Overworld from "./Overworld";
import Dialogue from "./Dialogue";
import Create_Char from "./Create_Char";
import GameContext from "./GameContext";
import { CharProvider } from "./CharContext";

const Game = () => {
  const [scene, setScene] = useState('overworld'); // Initial scene
  const [currentNPC, setCurrentNPC] = useState(null); // No NPC initially
  const [charStats, setCharStats] = useState({
    name: "",
    health: null,
    strength: null,
    str_mod: null,
    wisdom: null,
    wis_mod: null,
    dexterity: null,
    dex_mod: null,
  });

  const [currentMap, setCurrentMap] = useState('trollMap');
  const [showDialogue, setShowDialogue] = useState(false);

  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  return (
    <>
      <Nav />
      <GameContext.Provider
        value={{
          scene,
          setScene,
          currentNPC,
          setCurrentNPC,
          charStats,
          setCharStats,
        }}
      >
        <div className="content">
          <div
            className="game-container"
            style={{
              height: gameWindow.height,
              width: gameWindow.width,
            }}
          >
            {scene === "overworld" && (
              <Overworld
                currentMap={currentMap}
                setCurrentMap={setCurrentMap}
                setShowDialogue={setShowDialogue}
                setCurrentNPC={setCurrentNPC}
              />
            )}
            {scene === "characterCreation" && (
              <Create_Char charStats={charStats} setCharStats={setCharStats} />
            )}
            {scene === "dialogue" && <Dialogue npc={currentNPC} />}
          </div>
        </div>
      </GameContext.Provider>
    </>
  );
};
export default Game;
