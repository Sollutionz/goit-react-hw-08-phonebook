import React, { createContext } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ContactPage } from 'pages/contactsPage';
import { LoginPage } from 'pages/loginPage';
import { RegisterPage } from 'pages/registerPage';
import { HomePage } from 'pages/homePage';
import { SharedLayout } from './layout/SharedLayout';
import { Toaster } from 'react-hot-toast';
import { NavigationPrivate } from './navigation/NavigationPrivate';
import { NavigationPublic } from './navigation/NavigationPublic';
export const Context = createContext();

export const App = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <NavigationPrivate>
                <ContactPage />
              </NavigationPrivate>
            }
          />
          <Route
            path="login"
            element={
              <NavigationPublic>
                <LoginPage />
              </NavigationPublic>
            }
          />
          <Route
            path="register"
            element={
              <NavigationPublic>
                <RegisterPage />
              </NavigationPublic>
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
