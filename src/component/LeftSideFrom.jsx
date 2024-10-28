export function LeftSide(props) {
  return (
    <>
      <div>
        <label>{props.EnterFirstname}</label>
        <input type="text" placeholder={props.firstname} />
        <label>{props.EnterLastName}</label>
        <input type="text" placeholder={props.lastname} />
        <label>{props.EnterUserName}</label>        
        <input type="text" placeholder={props.username} />
        <label>{props.EnterYourGmail}</label>        
        <input type="email" placeholder={props.email} />
      </div>
      
    </>
  )
}