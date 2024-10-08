import { useRef, useState } from "react";
import Data from "./components/Data";
import StudentDetail from "./components/StudentDetail";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
function App(){
  const [studentList,setStudentList] = useState(Data);
  const [branchList,setBranchList] = useState(["CS","IT","EC","MECH"]);
  const [defaultBranch, setDefaultBranch] = useState("All");
  const removeStudent = (studetId)=>{
    if(window.confirm("Do you want to delete it?")){ 
      const index = studentList.findIndex((student)=>{return student.id== studetId});
      studentList.splice(index,1);
      setStudentList([...studentList]);
    }
  }
  const addStudent = (id,name,contact,branch)=>{
    setStudentList([...studentList,{id,name,contact,branch}]);
  }
  return <>
      <Header/>

      <StudentForm defaultBranch={defaultBranch} setDefaultBranch={setDefaultBranch} studentList={studentList} setStudentList={setStudentList} addStudent={addStudent} branchList={branchList} setBranchList={setBranchList}/>
      
      <StudentDetail studentList={studentList} defaultBranch={defaultBranch} removeStudent={removeStudent}/>
  </>
}
export default App;