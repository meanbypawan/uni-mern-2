import { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

function Category(){
    //const [categoryList,setCategoryList] = useState([]);
    const [state,dispatch] = useReducer((state,action)=>{
        if(action.type == "set-category"){
           state.categoryList = action.payload;
        }
        return {...state};
    },{categoryList: []});
    useEffect(()=>{
       loadCategories();
    },[]);
    const loadCategories = ()=>{
        axios.get("https://dummyjson.com/products/categories")
        .then(response=>{
           //setCategoryList(response.data);
           dispatch({type:"set-category",payload: response.data});
        }).catch(err=>{
            console.log(err);
        });
    }
    return <>
       <Header/>
       {(state.categoryList.length == 0)? <div className="move-to-center">
        <div class="spinner-border"></div>
       </div>: ""}

       <div className="container mt-3">
        <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Slug</th>
                    <th>Name</th>
                    <th>Url</th>
                </tr>
            </thead>
            <tbody>
                {state.categoryList.map((category,index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td>{category.slug}</td>
                    <td>{category.name}</td>
                    <td>{category.url}</td>
                    <td>
                        <button className="btn btn-outline-danger">Remove</button>
                    </td>
                </tr>)}
            </tbody>

        </table>
       </div>
    </>
}
export default Category;