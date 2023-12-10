import { useState, useEffect, useRef, ChangeEvent } from "react";
import * as Tone from "tone";
import { fourthBeatSynth, regularSynth } from "../synth";
import { circleOfFifths } from "../circleOfFifths";
import { calculateInterval } from "../utils";

const BEATS_PER_BAR = 4;
const FIRST_CHANGE_BAR = 5;
const BARS_BETWEEN_CHANGES = 4;

const useMetronome = (
  initialBpm: number,
  updateNoteEveryFourBars: boolean = false,
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(initialBpm);
  const beatRef = useRef(0);
  const barCountRef = useRef(0);
  const currentNoteRef = useRef(circleOfFifths[0]);
  const [currentBeat, setCurrentBeat] = useState(1);
  const [currentBar, setCurrentBar] = useState(1);

  useEffect(() => {
    // Debug: Log the BPM and the state of Tone.Transport
    console.log(`Initializing metronome with BPM: ${bpm}`);
    console.log(`Tone.Transport state: ${Tone.Transport.state}`);

    const scheduleId = Tone.Transport.scheduleRepeat((time) => {
      console.log("Scheduled repeat triggered."); // Debug statement
      updateBeat();
      updateBarAndNote(updateNoteEveryFourBars);
      triggerSynth(time);
    }, calculateInterval(bpm));

    return () => {
      Tone.Transport.clear(scheduleId);
      console.log("Transport cleared."); // Debug statement
    };
  }, [bpm, updateNoteEveryFourBars]);

  const updateBeat = () => {
    beatRef.current = (beatRef.current % BEATS_PER_BAR) + 1;
    setCurrentBeat(beatRef.current);
  };

  const updateBarAndNote = (updateNoteEveryFourBars: boolean) => {
    if (isFirstBeat()) {
      barCountRef.current += 1;
      updateCurrentBar();
      maybeUpdateCurrentNote(updateNoteEveryFourBars);
    }
  };

  const isFirstBeat = () => beatRef.current === 1;

  const updateCurrentBar = () => {
    setCurrentBar(getBarDisplayValue(barCountRef.current));
  };

  const getBarDisplayValue = (barCount: number) => {
    return barCount % BEATS_PER_BAR === 0
      ? BEATS_PER_BAR
      : barCount % BEATS_PER_BAR;
  };

  const maybeUpdateCurrentNote = (updateNoteEveryFourBars: boolean) => {
    if (updateNoteEveryFourBars && shouldChangeNote()) {
      currentNoteRef.current = getNextNote(currentNoteRef.current);
    }
  };

  const shouldChangeNote = () => {
    return (
      barCountRef.current >= FIRST_CHANGE_BAR &&
      (barCountRef.current - FIRST_CHANGE_BAR) % BARS_BETWEEN_CHANGES === 0
    );
  };

  const triggerSynth = (time: number) => {
    console.log("Triggering synth."); // Debug statement
    console.log(`AudioContext State before playing: ${Tone.context.state}`);
    console.log(`Synth volume: ${regularSynth.volume.value}`);

    if (isFirstBeat()) {
      console.log(`First beat: Playing ${currentNoteRef.current}6`); // Debug statement

      try {
        fourthBeatSynth.triggerAttackRelease(
          currentNoteRef.current + "6",
          "8n",
          time,
        );
      } catch (error) {
        console.error("Error triggering fourthBeatSynth:", error);
      }
    } else {
      console.log(`Regular beat: Playing ${currentNoteRef.current}5`); // Debug statement
      try {
        regularSynth.triggerAttackRelease(
          currentNoteRef.current + "5",
          "8n",
          time,
        );
      } catch (error) {
        console.error("Error triggering regularSynth:", error);
      }
    }
  };

  const toggleMetronome = async () => {
    console.log(`Metronome toggled. Current state isPlaying: ${isPlaying}`); // Debug statement

    // Ensure this function is directly triggered by a user interaction
    try {
      // Resume the audio context in response to user interaction
      await Tone.context.resume();

      // Only call Tone.start() if the context is not already running
      if (Tone.context.state !== "running") {
        await Tone.start(); // This starts the audio context
        console.log("Playback resumed successfully");
      }
      // Then start or stop the metronome
      if (isPlaying) {
        Tone.Transport.stop();
      } else {
        Tone.Transport.start();
      }
      setIsPlaying(!isPlaying); // Update the state to reflect the new playing status
    } catch (e) {
      console.error("Could not start audio context:", e);
    }
  };

  const handleBpmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newBpm = Number(event.target.value);
    setBpm(newBpm);
  };

  return {
    isPlaying,
    bpm,
    currentBeat,
    currentBar,
    currentNote: currentNoteRef.current,
    nextNote: getNextNote(currentNoteRef.current),
    toggleMetronome,
    handleBpmChange,
  };
};

const getNextNote = (currentNote: string): string => {
  const currentNoteIndex = circleOfFifths.indexOf(currentNote);
  const nextNoteIndex = (currentNoteIndex + 1) % circleOfFifths.length;
  return circleOfFifths[nextNoteIndex];
};

export { useMetronome };
