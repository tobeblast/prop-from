import { RightSide } from "./component/RightSideFrom.jsx"
import { LeftSide } from "./component/LeftSideFrom.jsx"

export default function App() {

  return (
    <>
      <from>
        <LeftSide EnterFirstname="Enter Your First Name" firstname="Tobechukwu" EnterLastName="Enter Your Last Name" lastname="Nwanne" EnterUserName="Enter Your User Name" username="Tobeblast" EnterYourGmail="Enter a working Gmail" email="tobeblast06@gmail.com" />
        <RightSide gender="Enter your sex" sex="Male/Female" enterage="Enter current age" age="18yrs" educationcertificate="Enter your level of education" education="O'LEVEL, MSC, BSC, OND, HND" phonenumber="Enter a working phone no"    phone="08163319115" />
      </from>

    </>
  );
}