type ChordArr = {
    major: number[][] | Tone.FrequencyClass<number>[],
    minor: number[][] | Tone.FrequencyClass<number>[],
    augmented: number[][] | Tone.FrequencyClass<number>[],
    diminished_triad: number[][] | Tone.FrequencyClass<number>[],
    major_7th: number[][] | Tone.FrequencyClass<number>[],
    dominant_7th: number[][] | Tone.FrequencyClass<number>[],
    minor_7th: number[][] | Tone.FrequencyClass<number>[],
    diminished: number[][] | Tone.FrequencyClass<number>[],
    half_diminished: number[][] | Tone.FrequencyClass<number>[]
}

type ChordObj = {
    currentChord: Tone.FrequencyClass<number>[];
    chordQuality: string;
    note: string | undefined;
}