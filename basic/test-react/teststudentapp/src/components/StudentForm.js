import { useRef } from "react";

export default function StudentForm({studentList,setStudentList,defaultBranch,setDefaultBranch, addStudent, branchList, setBranchList}){
    let idRef = useRef(); // idRef = {current: {value:10}}
    let nameRef = useRef();
    let contactRef = useRef();
    let branchRef = useRef();
  
    return <>
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
            <button onClick={()=>addStudent(idRef.current.value,nameRef.current.value,contactRef.current.value,branchRef.current.value)} className="btn btn-success">ADD</button>
          </div>
          <div className="col-md-6">
            <button onClick={()=>setDefaultBranch("CS")} className="btn btn-warning">CS({studentList.filter((student)=>{return student.branch == "CS"}).length})</button>
            <button onClick={()=>setDefaultBranch("IT")} className="btn btn-primary ml-2">IT({studentList.filter((student)=>{return student.branch == "IT"}).length})</button>
            <button onClick={()=>setDefaultBranch("EC")} className="btn btn-danger ml-2">EC({studentList.filter((student)=>{return student.branch == "EC"}).length})</button>
            <button onClick={()=>setDefaultBranch("MECH")} className="btn btn-info ml-2">MECH({studentList.filter((student)=>{return student.branch == "MECH"}).length})</button>
            <button onClick={()=>setDefaultBranch("All")} className="btn btn-secondary ml-2">Total({studentList.length})</button>
          </div>
        </div>
      </div>
    </>
}