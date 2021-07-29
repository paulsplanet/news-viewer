import React, { useCallback, useState } from "react";
import NewsPage from "./pages/NewsPage";
import { Route } from "react-router-dom";

const App = () => {
  
  return(
    <div>
      <Route path="/:category?" component={NewsPage} />
    </div>
  )
};

export default App;
