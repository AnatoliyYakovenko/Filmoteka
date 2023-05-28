import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Suspense } from "react";
import Loader from "components/Loader/Loader";
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Favorite = lazy(() => import('pages/Favorite'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Comments = lazy(() => import('./Comments/Comments'));

export const App = () => {
  return (
    <>
     <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="reviews" element={<Comments />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer
          position="top-right"
          reverseOrder={false}
          autoClose={2000}
        />
      </Suspense>
    </>
  );
};
