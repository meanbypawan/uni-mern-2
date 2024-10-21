import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/dashboard/Dashboard";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Api from "./apis/Api";
import ViewMore from "./components/view-more/ViewMore";
import SignIn from "./components/signin/SignIn";
import Signup from "./components/signup/Signup";

export const CategoryContext = createContext();
function App(){
  const [categoryList,setCategoryList] = useState([]);
  useEffect(()=>{
    loadCategories();
  },[]);
  const loadCategories = async()=>{
    try{
      let response = await axios.get(Api.category_list);
      setCategoryList(response.data.categories);
    }
    catch(err){
      console.log(err);
    }
  }
  return <>
   <CategoryContext.Provider value={{categoryList}}>
    <Routes>
      <Route path="/" element={<DashBoard/>}/>
      <Route path="/view-more/:id" element={<ViewMore/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
    </Routes>
   </CategoryContext.Provider> 
  </>
}

export default App;