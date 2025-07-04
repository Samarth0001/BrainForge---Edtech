import "./App.css";
import React from "react";
import { Route,Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyEmailSignup from "./pages/VerifyEmailSignup";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import Settings from "./components/core/Dashboard/settings/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart/Cart";
import AddCourse from "./components/core/Dashboard/addCourse/AddCourse";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetails } from "./services/operations/profileAPI";
import { ACCOUNT_TYPE } from "./utils/constants";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import ViewCourse from "./pages/ViewCourse";
import InstructorDashboard from "./components/core/Dashboard/InstructorDashboard/InstructorDashboard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { setToken } from "./reducers/Slices/authSlice";
import { setUser } from "./reducers/Slices/profileSlice";
import { jwtDecode } from "jwt-decode";
import { resetCart } from "./reducers/Slices/cartSlice";
function App() {

  
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {  // Convert `exp` to milliseconds
            // localStorage.removeItem("token");
            // localStorage.removeItem('user');
            localStorage.clear();
            dispatch(setToken(null));
            dispatch(setUser(null));
            resetCart()
        }
    }
  }, [dispatch]);

  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
  }, [])
  return (
    <div className=" w-screen min-h-screen flex flex-col font-inter bg-richblack-900">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="catalog/:catalogName" element={<Catalog/>} />
        <Route path="courses/:courseId" element={<CourseDetails/>}/>
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword/>
            </OpenRoute>
          }
        />
        <Route
          path="verify-reset-email"
          element={
            <OpenRoute>
              <VerifyEmail/>
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmailSignup/>
            </OpenRoute>
          }
        />
         <Route 
             element={
               <PrivateRoute>
               <Dashboard />
               </PrivateRoute>
              }
         >
              <Route path="dashboard/my-profile" element={<MyProfile />} />
              <Route path="dashboard/settings" element={<Settings />} />
              {user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route
                    path="dashboard/enrolled-courses"
                    element={<EnrolledCourses />}
                  />
                  <Route path="/dashboard/cart" element={<Cart />} />
                </>
          )}
             {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/instructor" element={<InstructorDashboard />} />
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
          
          </>
        )
      }



         </Route>

         <Route element={
    <PrivateRoute>
    <ViewCourse />
    </PrivateRoute>
    }>
      {user?.accountType === ACCOUNT_TYPE.STUDENT && (
        <>
      <Route
      path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
      element={<VideoDetails />}
      />    
      </>
      )}
      </Route>
      </Routes>

  
    </div>
  );
}

export default App;
