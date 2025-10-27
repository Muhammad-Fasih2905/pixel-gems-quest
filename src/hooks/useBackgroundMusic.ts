import { useState, useCallback, useRef, useEffect } from 'react';

export const useBackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const playNote = useCallback((frequency: number, duration: number, startTime: number) => {
    if (!audioContextRef.current) return;
    
    const audioContext = audioContextRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, startTime);
    
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  }, []);

  const playMelody = useCallback(() => {
    if (!audioContextRef.current) return;
    
    const audioContext = audioContextRef.current;
    const notes = [
      { freq: 659.25, duration: 0.2 }, // E5
      { freq: 783.99, duration: 0.2 }, // G5
      { freq: 880.00, duration: 0.2 }, // A5
      { freq: 1046.50, duration: 0.2 }, // C6
      { freq: 880.00, duration: 0.2 }, // A5
      { freq: 783.99, duration: 0.2 }, // G5
      { freq: 659.25, duration: 0.2 }, // E5
      { freq: 587.33, duration: 0.2 }, // D5
      { freq: 659.25, duration: 0.2 }, // E5
      { freq: 523.25, duration: 0.4 }, // C5
    ];
    
    let currentTime = audioContext.currentTime;
    notes.forEach((note) => {
      playNote(note.freq, note.duration, currentTime);
      currentTime += note.duration + 0.05;
    });
  }, [playNote]);

  const toggleMusic = useCallback(() => {
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      setIsPlaying(false);
    } else {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      playMelody();
      intervalRef.current = setInterval(() => {
        playMelody();
      }, 2500);
      setIsPlaying(true);
    }
  }, [isPlaying, playMelody]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return { isPlaying, toggleMusic };
};
