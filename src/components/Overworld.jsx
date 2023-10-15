import React, { useState, useEffect } from 'react';
import Char from 'components/Char';
import NPC_Map from 'components/NPC_Map';
import Char_Move from 'components/Char_Move';
import Map from 'components/Map';
import Foreground from 'components/Foreground';
import Map_Manager from 'components/Map_Manager';
import Map_Switch from 'components/Map_Switch';

const Overworld = ({ currentMap, setCurrentMap, setCurrentNPC, setShowDialogue }) => {
  const [mapImage, setMapImage] = useState(null);
  const [foreImage, setForeImage] = useState(null);
  const [tileSize, setTileSize] = useState(48);
  const [mapColumns, setMapColumns] = useState(11);
  const [mapRows, setMapRows] = useState(11);
  const [mapPosition, setMapPosition] = useState({
    x: 0,
    y: 0,
  });
  const [mapOffset, setMapOffset] = useState({ x: 9, y: 6 });
  const [hasMapSwitched, setHasMapSwitched] = useState(false);

  const [direction, setDirection] = useState('Down');

  const [isMoving, setIsMoving] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const [isFPressed, setIsFPressed] = useState(false);
  const [charPosition, setCharPosition] = useState({ x: 5, y: 5 });
  const [allowedMovements, setAllowedMovements] = useState({
    up: true,
    down: true,
    left: true,
    right: true,
  });

  const [npcs, setNpcs] = useState([
    {
      id: 1,
      x: 2,
      y: 1,
      steps: 1,
      animationSpeed: 0,
      alive: true,
      triggered: false,
      message: "'F'to open",
    },
    {
      id: 2,
      x: 1,
      y: 8,
      steps: 1,
      animationSpeed: 0,
      alive: true,
      triggered: false,
      message: "'F'to open",
    },
    {
      id: 3,
      x: 7,
      y: 7,
      steps: 2,
      animationSpeed: 800,
      alive: true,
      triggered: false,
      message: 'Greetings',
    },
  ]);
  const [gates, setGates] = useState([
    { id: 1, x: 10, y: 4 },
    { id: 2, x: 10, y: 5 },
    { id: 3, x: 10, y: 6 },
  ]);

  return (
    <>
      <Char_Move
        setPosition={setMapPosition}
        setDirection={setDirection}
        tileSize={tileSize}
        setCharPosition={setCharPosition}
        allowedMovements={allowedMovements}
        isMoving={isMoving}
        setIsMoving={setIsMoving}
        isSpacePressed={isSpacePressed}
        setIsSpacePressed={setIsSpacePressed}
        mapOffset={mapOffset}
        isFPressed={isFPressed}
        setIsFPressed={setIsFPressed}
      />
      <Map_Switch
        currentMap={currentMap}
        mapImage={mapImage}
        setForeImage={setForeImage}
        setMapImage={setMapImage}
        setMapPosition={setMapPosition}
        setCharPosition={setCharPosition}
        setNpcs={setNpcs}
        setMapColumns={setMapColumns}
        setMapRows={setMapRows}
        setGates={setGates}
        setTileSize={setTileSize}
        setMapOffset={setMapOffset}
        setIsFPressed={setIsFPressed}
        hasMapSwitched={hasMapSwitched}
      />
      <Map_Manager
        currentMap={currentMap}
        setCurrentMap={setCurrentMap}
        mapPosition={mapPosition}
        setMapPosition={setMapPosition}
        charPosition={charPosition}
        setCharPosition={setCharPosition}
        allowedMovements={allowedMovements}
        setAllowedMovements={setAllowedMovements}
        tileSize={tileSize}
        npcs={npcs}
        setNpcs={setNpcs}
        mapColumns={mapColumns}
        mapRows={mapRows}
        gates={gates}
        isFPressed={isFPressed}
        setHasMapSwitched={setHasMapSwitched}
        setShowDialogue={setShowDialogue}
        setCurrentNPC={setCurrentNPC}
      />
      <Map
        mapPosition={mapPosition}
        mapImage={mapImage}
        tileSize={tileSize}
        mapColumns={mapColumns}
        mapRows={mapRows}
      />
      <Foreground mapPosition={mapPosition} foreImage={foreImage} />
      <Char
        tileSize={tileSize}
        direction={direction}
        isMoving={isMoving}
        isSpacePressed={isSpacePressed}
      />
      <NPC_Map
        currentMap={currentMap}
        mapPosition={mapPosition}
        npcs={npcs}
        tileSize={tileSize}
        mapColumns={mapColumns}
        mapRows={mapRows}
      />
    </>
  );
};

export default Overworld;
