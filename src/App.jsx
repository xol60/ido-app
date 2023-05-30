import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import { main } from '../src/assets'
const App = () => {
  return (
    <div>
      <Helmet>
        <title>IDO | NHOM 6</title>
      </Helmet>
      <div className="relative sm:-8 p-4  min-h-screen flex flex-row" style={{ backgroundImage: `url(${main})` }}>


        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App