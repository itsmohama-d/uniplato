import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import DownBar from './components/DownBar';
import HomePage from './Pages/HomePage';
import PostsPage from './Pages/PostsPage';
import ProfilePage from './Pages/ProfilePage';
import SearchPage from './Pages/SearchPage';
import { QueryClient, QueryClientProvider } from "react-query"

const App: FC = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
        <DownBar />
      </div>
    </QueryClientProvider>
  );
}

export default App;
