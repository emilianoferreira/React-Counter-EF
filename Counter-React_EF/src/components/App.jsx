import React, { useEffect, useState } from "react";
import "/Users/user/React-Counter-EF/Counter-React_EF/src/styles/App.css"

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="seconds-counter">
      <div className="counter-display">
      <i className="fa-solid fa-stopwatch"></i>
        <span className="time ms-3">{seconds} segundos</span>
      </div>
    </div>
  );
};

const App = () => {
  // Obtenemos el tiempo desde que se cargó la página
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Calculamos cuántos segundos han pasado desde que se cargó la página
    const startTime = window.performance.timing.navigationStart;
    const updateSeconds = () => {
      const currentTime = Math.floor((Date.now() - startTime) / 1000);
      setSeconds(currentTime);
    };

    // Establecemos un intervalo para actualizar cada segundo
    const intervalId = setInterval(updateSeconds, 1000);

    // Limpiamos el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return <SecondsCounter seconds={seconds} />;
};

export default App;
