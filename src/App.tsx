import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  ChannelDetail,
  Feed,
  VideoDetail,
  SearchFeed,
  Navbar,
} from "./components";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
