import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
import ErrorPage from "./pages/ErrorPage";
const AboutUs = lazy(() => import("./pages/client/AboutUs"));
const HomePage = lazy(() => import("./pages/client/HomePage"));
const ForgotPassword = lazy(() => import("./pages/ForgotPasswordPage"));
const Appointment = lazy(() => import("./pages/client/Appointment"));
const Contact = lazy(() => import("./pages/client/Contact"));
const Services = lazy(() => import("./pages/client/Services"));
const Doctors = lazy(() => import("./pages/client/Doctors"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const News = lazy(() => import("./pages/client/News"));
// doctors comes from this.

const Dashboard = lazy(() => import("./pages/doctor/Dashboard"));
const DoctorAppointment = lazy(() => import("./pages/doctor/Appointment"));
const Notifications = lazy(() => import("./pages/doctor/Notifications"));
const Messages = lazy(() => import("./pages/doctor/Messages"));
const Patients = lazy(() => import("./pages/doctor/Patients"));
const Settings = lazy(() => import("./pages/doctor/Settings"));
const Schedules = lazy(() => import("./pages/doctor/Schedules"));

const App = () => {
  return (
    <Router>
      <Routes>
        {/* client Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/news" element={<News />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* doctors routes */}
        <Route path="/doctor/dashboard" element={<Dashboard />} />
        <Route path="/doctor/appointment" element={<DoctorAppointment />} />
        <Route path="/doctor/notifications" element={<Notifications />} />
        <Route path="/doctor/messages" element={<Messages />} />
        <Route path="/doctor/patients" element={<Patients />} />
        <Route path="/doctor/settings" element={<Settings />} />
        <Route path="/doctor/schedules" element={<Schedules />} />

        {/* admin routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/patients" element={<Patients />} />
        {/* <Route path="/admin/add-new-doctor" element={<Appointments />} /> */}
        <Route path="/admin/messages" element={<Messages />} />
        <Route path="/admin/notifications" element={<Notifications />} />
        {/* error handling */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
