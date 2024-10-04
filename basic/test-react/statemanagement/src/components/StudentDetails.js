import { Component } from "react";
import Data from "./Data";
class StudentDetails extends Component{
   constructor(){
    super();
    this.state = {
        studentList: Data
    }
   }
   removeStudent = (studentId)=>{
    if(window.confirm("Do you want delete it ? ")){
      let index =  this.state.studentList.findIndex((student)=>{return student.id == studentId});
      this.state.studentList.splice(index,1);
      this.setState({studentList: [...this.state.studentList]});
    } 
   }
   render(){
    return <>
       <div className="bg-danger p-2 text-center text-white">
          <label>Student Details</label>
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
                {this.state.studentList.map((student,index)=><tr key={index}>
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