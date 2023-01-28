import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import CreatorDashboard from "../pages/creatorDashboard/CreatorDashboard";
import CreatorUpload from "../pages/CreatorUpload/CreatorUpload";
import Home from "../pages/Home/Home";

import Login from "../pages/login/Login";
import Quiz from "../pages/quiz/Quiz";
import UserProfile from "../pages/userProifle/UserProfile";
import BaseLayout from "./layout/BaseLayout";
import PrivateRoute from "./routerModel/PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <BaseLayout />
          </PrivateRoute>
        }
      >
        <Route path="about" element={<About />} />
        <Route path="create" element={<CreatorUpload />} />
        <Route path="creator/dashboard" element={<CreatorDashboard />} />
        <Route path="user/profile" element={<UserProfile />} />
        <Route path="quiz/:id" element={<Quiz />} />
      </Route>

      {/* <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreatorUpload />} />
      <Route path="/creator/dashboard" element={<CreatorDashboard />} />
      <Route path="/user/profile" element={<UserProfile />} /> */}
    </Routes>
  );
};

export default Router;
