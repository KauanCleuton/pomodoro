import React, { useState, useEffect } from 'react';
import { Container } from './styles';

export const Details = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputMinutes, setInputMinutes] = useState('');

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            // Quando o tempo acabar, você pode adicionar um som ou uma notificação aqui
            audio.play()
            clearInterval(interval);
            setIsRunning(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);
  const reproduzirAudio = () => {
    const audio = new Audio('pomodoro/src/audio/mclipi.mp3')
    audio.play()
  }
  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    re
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
    audio.pause()
  };

  const handleInputMinutesChange = (e) => {
    setInputMinutes(e.target.value);
  };

  const setCustomMinutes = () => {
    const parsedMinutes = parseInt(inputMinutes, 10);
    if (parsedMinutes > 0) {
      setMinutes(parsedMinutes);
      setSeconds(0);
      setInputMinutes('');
    }
  };

  return (
    <Container>
      <div className='tela'>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>:</span>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className='buttons'>
        <button onClick={startTimer} disabled={isRunning}>
          Play
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div className='defined'>
        <input
          type="number"
          value={inputMinutes}
          onChange={handleInputMinutesChange}
          placeholder="Digite os minutos"
        />
        <button onClick={setCustomMinutes}>Definir minutos</button>
      </div>
    </Container>
  );
};
