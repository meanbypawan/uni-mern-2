// props : {studentList:[], defaultBranch: "All", removeStudent:fun()}
export default function StudentDetail({studentList,defaultBranch,removeStudent}){
    return <>
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
            {studentList.filter((student)=>{return student.branch == defaultBranch || defaultBranch == "All"}).map((student,index)=><tr key={index}>
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