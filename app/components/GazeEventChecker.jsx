// components/GazeEventChecker.jsx
import React from 'react';
import useGazeEvent from '../components/useGazeEvent'; // Actualiza la ruta según tu estructura de carpetas

const gazeevents = [
  { docX: 100, docY: 100 },
  { docX: 1124, docY: 715 },
  { docX: 380, docY: 156 },
  // Más puntos simulados según necesites
];

const GazeEventChecker = ({ gazeEvents }) => {

  const transformedGazeEvents = gazeEvents.map(point => ({
    docX: point.x,
    docY: point.y
  }));
  const { clickPositions, matchingEventsArray, message } = useGazeEvent(transformedGazeEvents);

  return (
    <div>
      <div>{message}</div>
      <div>Clics registrados:</div>
      {clickPositions.map((pos, index) => (
        <div key={index}>Clic {index + 1}: X={pos.x}, Y={pos.y}</div>
      ))}
      <div>Eventos de mirada coincidentes:</div>
      {matchingEventsArray.map((event, index) => (
        <div key={index}>Evento {index + 1}: X={event.docX}, Y={event.docY}</div>
      ))}
    </div>
  );
};

export default GazeEventChecker;
