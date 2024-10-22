import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/dashboard/Dashboard";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Api from "./apis/Api";
import ViewMore from "./components/view-more/ViewMore";
import SignIn from "./components/signin/SignIn";
import Signup from "./components/signup/Signup";
import PlaceOrder from "./components/place-order/PlaceOrder";
import Auth from "./components/auth/Auth";

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
      <Route path="/place-order/:id" element={<Auth><PlaceOrder/></Auth>}/>
    </Routes>
   </CategoryContext.Provider> 
  </>
}

export default App;