import { useRef, useState } from "react";
import Data from "./components/Data";
function App(){
  const [studentList,setStudentList] = useState(Data);
  const [branchList,setBranchList] = useState(["CS","IT","EC","MECH"]);
  let idRef = useRef(); // idRef = {current: {value:10}}
  let nameRef = useRef();
  let contactRef = useRef();
  let branchRef = useRef();
  const removeStudent = (studetId)=>{
    if(window.confirm("Do you want to delete it?")){ 
      const index = studentList.findIndex((student)=>{return student.id== studetId});
      studentList.splice(index,1);
      setStudentList([...studentList]);
    }
  }
  const addStudent = ()=>{
    let id = idRef.current.value;
    let name = nameRef.current.value;
    let contact = contactRef.current.value;
    let branch = branchRef.current.value;
    setStudentList([...studentList,{id,name,contact,branch}]);
  }
  return <>
     <div className="bg-danger p-3 text-white d-flex justify-content-center align-items-center" style={{height:"30px"}}>
       <span>Student Details</span>
      </div> 
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-6">
            <input ref={idRef} type="text" className="form-control" placeholder="Enter student id"/>
          </div>
          <div className="col-md-6">
            <input ref={nameRef} type="text" className="form-control" placeholder="Enter student name"/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <select ref={branchRef} className="form-control">
              <option>Select branch</option>
              {branchList.map((branch,index)=><option value={branch}>{branch}</option>)}
            </select>
          </div>
          <div className="col-md-6">
            <input ref={contactRef} type="text" className="form-control" placeholder="Enter student contact"/>
          </div>
        </div>
        <div className="row m-2">
          <div className="col-md-6">
            <button onClick={addStudent} className="btn btn-success">ADD</button>
          </div>
        </div>
      </div>
      <div className="container mt-4">
         <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Id</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Contact</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student,index)=><tr key={index}>
              <td>{index+1}</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.contact}</td>
              <td>
                <button onClick={()=>removeStudent(student.id)} className="btn btn-outline-danger">Remove</button>
              </td>
            </tr>)}
          </tbody>
         </table>
      </div>
  </>
}
export default App;