import './components.styles.css'

export interface IChordOptionsProps {
  handleAnswer: Function
  data: string[]
}

export function AnswerOptions ({handleAnswer, data}: IChordOptionsProps) {

  const elements = data.map(el => {
    let name:string;

    if (data[0].length > 2) {
      const correctedName = el.split('_');
      const corrected = correctedName[0][0].toUpperCase() + correctedName[0].substring(1) + " " + (correctedName.length === 2 ? correctedName[1][0].toUpperCase() + correctedName[1].substring(1) : "")
      name = corrected
    } 
    else {
      name = el
    }
    
    return <button className='ansOption' disabled={false} key={el} onClick={(e) => handleAnswer(e, el)}>{name}</button>
  })

  return (
    <>
      {elements}
    </>
  )
}
