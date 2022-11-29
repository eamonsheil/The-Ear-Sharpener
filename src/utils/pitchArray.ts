// this is a self-repopulating array with varying lengths
// to be used to recieve an array containing a random ordering of notes,
// with each note repeated between 1 and 3 times

// use PitchArray.nextNote() to pop off the last value of the array
// when the length is equal to zero, a new set of notes is added to the array
export class PitchArray {
  // private notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
  // private chords = ["major", "minor", "augmented", "diminished_triad", "major_7th", "dominant_7th", "minor_7th", "diminished", "half_diminished"]
  private notes: string[];
  public data: string[];
  public length: number;
  public curr: string;

  // this.data is populated with chromatic scale
  constructor(initData: string[]) {
    this.data = [...initData];
    this.notes = [...initData];
    this.length = this.data.length;
    this.curr = '';
    this.randomize()
  }

  public randomize(): string[] {
    // notes = [...this.data];

    // creating a new array such that each note appears between 1 and 3 times in the array
    const newNotes = this.notes
      .map((note) => {
        return new Array(Math.floor(Math.random() * 3) + 1).fill(note);
      })
      .flat();

    let curr = newNotes.length;
    let randIdx: number;

    // randomize the order of the array
    while (curr !== 0) {
      randIdx = Math.floor(Math.random() * curr);
      curr--;

      const tmp = newNotes[curr];
      newNotes[curr] = newNotes[randIdx];
      newNotes[randIdx] = tmp;
    }

    this.data = newNotes;
    this.length = this.data.length;
    return this.data;
  }

  // pops off the last value in our notes array.
  // if there are no more values, this.data is repopulated via the randomize methed
  public nextNote(): string | undefined {
    if (this.length === 0) {
      this.randomize();
    }

    const curr = this.data.pop();
    this.curr = curr as string;
    this.length--;
    return curr;
  }
}
