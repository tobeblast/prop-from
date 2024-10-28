export function RightSide(props) {
  return (
    <>
      <div>
        <label>{props.gender}</label>
        <input type="text" placeholder={props.sex} />
        <label>{props.enterage}</label>
        <input type="text" placeholder={props.age} />
        <label>{props.educationcertificate}</label>        
        <input type="text" placeholder={props.education} />
        <label>{props.phonenumber}</label>        
        <input type="number" placeholder={props.phone}/>
      </div>
    </>
  )
}