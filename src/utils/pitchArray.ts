// this is a self-repopulating array with varying lengths
// to be used to recieve an array containing a random ordering of notes,
// with each note repeated between 1 and 3 times

// use PitchArray.nextNote() to pop off the last value of the array
// when the length is equal to zero, a new set of notes is added to the array
export class PitchArray {
  readonly data: string[];
  public arr: string[];
  public length: number;
  public curr: string;

  // this.arr is populated with chromatic scale
  constructor(initData: string[]) {
    this.arr = [...initData];
    this.data = [...initData];
    this.length = this.arr.length;
    this.curr = '';
    this.randomize();
  }

  public randomize(): string[] {
    // notes = [...this.arr];

    // creating a new array such that each note appears between 1 and 3 times in the array
    const newNotes = this.data
      .map((val) => {
        return new Array(Math.floor(Math.random() * 3) + 1).fill(val);
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

    this.arr = newNotes;
    this.length = this.arr.length;
    return this.arr;
  }

  // pops off the last value in our notes array.
  // if there are no more values, this.arr is repopulated via the randomize methed
  public nextNote(): string | undefined {
    if (this.length === 0) {
      this.randomize();
    }

    const curr = this.arr.pop();
    this.curr = curr as string;
    this.length--;
    return curr;
  }
}
