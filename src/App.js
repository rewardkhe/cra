import React, { useState } from "react";
import {Link, Route, Routes} from "react-router-dom"
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Work } from "./Pages/Work";


function App() { 
  return(
    <> 
    <nav>
        <ul>
          <Link to = "/">Home </Link> 
          <Link to = "/work">Work</Link>
           <Link to = "/about">About </Link>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/work" element = {<Work />} />
      <Route path="/about" element = {<About />} />
      <Route path="*" element ={<NotFound />} />

    </Routes>
    </>
  )
}

export default App;
