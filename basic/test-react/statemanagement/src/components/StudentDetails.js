import { Component } from "react";
import Data from "./Data";
class StudentDetails extends Component{
   constructor(){
    super();
    this.state = {
        studentList: Data,
        branchList: ["CS","IT","EC","MECH"],
        defaultBranch: "All"
    }
   }
   removeStudent = (studentId)=>{
    if(window.confirm("Do you want delete it ? ")){
      let index =  this.state.studentList.findIndex((student)=>{return student.id == studentId});
      this.state.studentList.splice(index,1);
      this.setState({studentList: [...this.state.studentList]});
    } 
   }
   addStudent = ()=>{
     /*
     let id = document.getElementById("studentId").value;
     let name = document.getElementById("studentName").value;
     let branch = document.getElementById("studentBranch").value;
     let contact = document.getElementById("studentContact").value;
     let newStudent =  {id,name,branch,contact};
     this.state.studentList.push(newStudent);
     this.setState({studentList:[...this.state.studentList]});
     */
    let id = this.id.value;
    let name = this.name.value;
    let branch = this.branch.value;
    let contact = this.contact.value;
    this.setState({studentList:[...this.state.studentList,{id,name,branch,contact}]});
   }
   render(){
    return <>
       <div className="bg-danger p-2 text-center text-white">
          <label>Student Details</label>
       </div>
       <div className="container mt-3">
         <div className="row">
            <div className="col-md-6">
               <input ref={(idInput)=>{this.id=idInput}} id="studentId" type="text" placeholder="Enter Id" className="form-control"/>
            </div>
            <div className="col-md-6">
               <input ref={(nameRef)=>{this.name = nameRef}} id="studentName" type="text" placeholder="Enter student name" className="form-control"/>
            </div>
         </div>
         <div className="row mt-2">
            <div className="col-md-6">
              <select ref={(branchRef)=>{this.branch=branchRef}} id="studentBranch" className="form-control">
                 <option>select branch</option>
                 {this.state.branchList.map((branch,index)=><option value={branch}>{branch}</option>)}
              </select>
            </div>
            <div className="col-md-6">
               <input ref={(contactRef)=>{this.contact=contactRef}} id="studentContact" type="text" placeholder="Enter contact number" className="form-control"/>
            </div>
         </div>
         <div className="row mt-2">
            <div className="col-md-6">
               <button onClick={this.addStudent} className="btn btn-success">ADD</button>
            </div>
            <div className="col-md-6">
               <button onClick={()=>this.setState({defaultBranch: "CS"})} className="btn btn-primary ml-2">CS ({this.state.studentList.filter((student)=>{ return student.branch=="CS"}).length})</button>
               <button onClick={()=>this.setState({defaultBranch: "IT"})} className="btn btn-warning ml-2">IT ({this.state.studentList.filter((student)=>{ return student.branch=="IT"}).length})</button>
               <button onClick={()=>this.setState({defaultBranch: "EC"})} className="btn btn-danger ml-2">EC ({this.state.studentList.filter((student)=>{ return student.branch=="EC"}).length})</button>
               <button onClick={()=>this.setState({defaultBranch: "MECH"})} className="btn btn-info ml-2">MECH ({this.state.studentList.filter((student)=>{ return student.branch=="MECH"}).length})</button>
               <button onClick={()=>this.setState({defaultBranch: "All"})} className="btn btn-secondary ml-2">Total ({this.state.studentList.length})</button>
            </div>
         </div>
       </div>
       <div className="container mt-3">
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
                {this.state.studentList.filter((student)=>{return this.state.defaultBranch == "All" || student.branch==this.state.defaultBranch}).map((student,index)=><tr key={index}>
                   <td>{index+1}</td>
                   <td>{student.id}</td>
                   <td>{student.name}</td>
                   <td>{student.branch}</td>
                   <td>{student.contact}</td>
                   <td>
                    <button onClick={()=>{this.removeStudent(student.id)}} className="btn btn-outline-danger">Remove</button>
                   </td>
                </tr>)}
            </tbody>
          </table>
       </div>
    </>
   }
}

export default StudentDetails;