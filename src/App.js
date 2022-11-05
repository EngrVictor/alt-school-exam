import React from "react";
import Header from "./components/Header";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Home from "./components/Home";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import NotFound from "./components/NotFound";
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert" className="error">
      <h3>Something went wrong:</h3>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function App() {
  
  return (
    <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <BrowserRouter>
      <div className="App">
      <Helmet 
        title= "Okpara Victor's Github Portfolio"
        meta={[
          {"name": "description", "content": "Github repositoriy viewing app created using create-react-app"},
          {property: "og:type", content: "Simple app"},
          {property: "og:title", content: "Example title"},
          {property: "og:image", content: "http://example.com/logo.jpg"},
          {property: "og:url", content: "http://example.com/example"}
        ]}
        />
        <Header />

        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile/:id' element={<Profile/>} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </ErrorBoundary>
  );
}

export default App;
