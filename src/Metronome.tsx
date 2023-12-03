import React, { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import { fourthBeatSynth, regularSynth } from "./synth.tsx";

const circleOfFifths = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "F#",
  "C#",
  "Ab",
  "Eb",
  "Bb",
  "F",
];
const Metronome: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const beatRef = useRef(0);
  const barCountRef = useRef(0);
  const [currentNote, setCurrentNote] = useState(circleOfFifths[0]);
  const [currentBeat, setCurrentBeat] = useState(1);

  useEffect(() => {
    // Create a Tone.js Transport to handle timing
    Tone.Transport.scheduleRepeat((time) => {
      // This function is called on every beat
      beatRef.current = (beatRef.current % 4) + 1;
      const currentBeatRef = beatRef.current;
      setCurrentBeat(currentBeatRef);

      if (beatRef.current === 1) {
        barCountRef.current += 1;

        console.log("bar count", barCountRef.current);
        if (barCountRef.current >= 5 && (barCountRef.current - 5) % 4 === 0) {
          const nextNoteIndex =
            (Math.floor((barCountRef.current - 5) / 4) + 1) %
            circleOfFifths.length;
          setCurrentNote(circleOfFifths[nextNoteIndex]);
          console.log("next note", circleOfFifths[nextNoteIndex]);
        }
      }

      if (currentBeatRef === 1) {
        // Play a different sound on the 1st beat
        fourthBeatSynth.triggerAttackRelease("C4", "8n", time);
      } else {
        // Play the regular sound
        regularSynth.triggerAttackRelease("C5", "8n", time);
      }
    }, calculateInterval(bpm)); // "1n" means once every quarter note

    return () => {
      Tone.Transport.cancel(); // Clean up on unmount
    };
  }, [bpm]);

  const toggleMetronome = async () => {
    // Start the Tone.js context
    await Tone.start();

    if (isPlaying) {
      Tone.Transport.stop();
    } else {
      Tone.Transport.start();
    }
    setIsPlaying(!isPlaying);
  };

  const handleBpmChange = (event) => {
    const newBpm = Number(event.target.value);
    setBpm(newBpm);
  };

  return (
    <div className="space-y-8">
      <div
        className="tooltip tooltip-right z-100"
        data-tip="every 4 bars, we'll move to the next note in the circle of fifths"
      >
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">BPM</div>
            <div className="stat-value">{bpm}</div>
            <div className="stat-desc">
              every {calculateInterval(bpm).toFixed(2)}s
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Current</div>
            <div className="stat-value">{currentNote}</div>
            <div className="stat-desc">
              next up:{" "}
              {
                circleOfFifths[
                  (circleOfFifths.indexOf(currentNote) + 1) %
                    circleOfFifths.length
                ]
              }
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Current Beat</div>
            <div className="stat-value">
              <span className="countdown">{currentBeat}</span>
            </div>
            <div className="stat-desc">out of 4</div>
          </div>
        </div>
      </div>

      <input
        type="range"
        min={40}
        max={200}
        value={bpm}
        className="range"
        onChange={handleBpmChange}
      />

      <button
        className={`btn btn-active btn-${isPlaying ? "secondary" : "primary"}`}
        onClick={toggleMetronome}
      >
        {isPlaying ? "Stop Metronome" : "Start Metronome"}
      </button>
    </div>
  );
};

export default Metronome;

function calculateInterval(bpm: number): number {
  return 60 / bpm;
}