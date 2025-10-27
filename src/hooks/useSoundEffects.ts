import { useCallback, useRef } from 'react';

export const useSoundEffects = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playSound = useCallback((type: 'click' | 'match' | 'pop' | 'fall' | 'invalid' | 'gameOver' | 'success') => {
    try {
      const audioContext = getAudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch (type) {
      case 'click':
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        break;
        
      case 'match':
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.15);
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
        break;
        
      case 'pop':
        // Layered sine waves for richer sound
        [600, 800, 1000].forEach((freq, i) => {
          const osc = getAudioContext().createOscillator();
          const gain = getAudioContext().createGain();
          osc.connect(gain);
          gain.connect(getAudioContext().destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, getAudioContext().currentTime);
          gain.gain.setValueAtTime(0.08, getAudioContext().currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, getAudioContext().currentTime + 0.2);
          osc.start(getAudioContext().currentTime + i * 0.02);
          osc.stop(getAudioContext().currentTime + 0.2 + i * 0.02);
        });
        break;
        
      case 'fall':
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
        break;
        
      case 'invalid':
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
        break;
        
      case 'gameOver':
        [800, 700, 600, 500, 400].forEach((freq, i) => {
          const osc = getAudioContext().createOscillator();
          const gain = getAudioContext().createGain();
          osc.connect(gain);
          gain.connect(getAudioContext().destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, getAudioContext().currentTime);
          gain.gain.setValueAtTime(0.1, getAudioContext().currentTime + i * 0.15);
          gain.gain.exponentialRampToValueAtTime(0.01, getAudioContext().currentTime + i * 0.15 + 0.3);
          osc.start(getAudioContext().currentTime + i * 0.15);
          osc.stop(getAudioContext().currentTime + i * 0.15 + 0.3);
        });
        break;
        
      case 'success':
        // Major chord
        [523.25, 659.25, 783.99].forEach((freq, i) => {
          const osc = getAudioContext().createOscillator();
          const gain = getAudioContext().createGain();
          osc.connect(gain);
          gain.connect(getAudioContext().destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, getAudioContext().currentTime);
          gain.gain.setValueAtTime(0.1, getAudioContext().currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, getAudioContext().currentTime + 0.5);
          osc.start(getAudioContext().currentTime);
          osc.stop(getAudioContext().currentTime + 0.5);
        });
        break;
    }
    } catch (error) {
      console.warn('Audio playback failed:', error);
    }
  }, [getAudioContext]);
  
  return { playSound };
};
