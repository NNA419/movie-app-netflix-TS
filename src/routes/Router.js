import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import DetailMoviePage from '../pages/DetailMoviePage';
import ExploreMoviesPage from '../pages/ExploreMoviePage';
import LoginPage from '../pages/LoginPage';

function Router() {


    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/moviekind/:moviekindId" element={<ExploreMoviesPage />}/>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:movieId" element={<DetailMoviePage />} />
        </Route>
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    );
}

export default Router