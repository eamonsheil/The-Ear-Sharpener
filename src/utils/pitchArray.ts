// this is a self-repopulating array with varying lengths
// to be used to recieve an array containing a random ordering of notes,
// with each note repeated between 1 and 3 times

// use PitchArray.nextNote() to pop off the last value of the array
// when the length is equal to zero, a new set of notes is added to the array
export class PitchArray {
  // private notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
  private notes: string[];
  public data: string[];
  public length: number;
  public currNote: string;

  // this.data is populated with chromatic scale
  constructor(initData: string[]) {
    this.data = [...initData];
    this.notes = [...initData];
    this.length = this.data.length;
    this.currNote = '';
  }

  public randomize(notes: string[] = this.notes): string[] {
    // notes = [...this.data];

    // creating a new array such that each note appears between 1 and 3 times in the array
    const newNotes = notes
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
    this.length--;
    return curr;
  }
}
