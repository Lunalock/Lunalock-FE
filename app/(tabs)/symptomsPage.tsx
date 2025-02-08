import React, { useState } from 'react';
import { Modal } from 'react-native';
import { GsBox, GsText, GsButton, Gsinput } from '@/components/gs-components';
import { GsSlider } from '@/components/gs-components';

interface SliderSymptom {
  icon: string;
  label: string;
  value: number;
}

interface Mood {
  icon: string;
  label: string;
  color: string;
}

const TrackSymptomsScreen: React.FC = () => {
  // date state
  const [inputDate, setInputDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  // mood state
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  // notes state
  const [notes, setNotes] = useState('');
  // slider symptoms (adjust or load dynamically as needed)
  const [sliders, setSliders] = useState<SliderSymptom[]>([
    { icon: 'heart', label: 'Pain', value: 3 },
    { icon: 'wind', label: 'Stress', value: 3 },
    // add more slider items as desired
  ]);

  const moods: Mood[] = [
    { icon: 'emoticon-happy-outline', label: 'Happy', color: '#FFEB3B' },
    { icon: 'emoticon-sad-outline', label: 'Sad', color: '#2196F3' },
    // add additional moods here
  ];

  // quick log example list
  const quickLog: string[] = ['Headache', 'Fatigue', 'Nausea'];

  const goBack = () => {
    // implement your navigation logic (e.g. using React Navigation)
    console.log('Back pressed');
  };

  const selectMood = (index: number) => {
    setSelectedMood(index);
  };

  const updateSliderValue = (index: number, value: number) => {
    const newSliders = [...sliders];
    newSliders[index].value = value;
    setSliders(newSliders);
  };

  return (
      <GsBox>
        <GsText>test</GsText>
      </GsBox>
  );
};

export default TrackSymptomsScreen;
