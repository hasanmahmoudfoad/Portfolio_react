import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Intro from './Intro/Intro';
import About from './About/About';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Work from './Work/Work';
import Technology from './Technology/Technology';
import Layout from './Layout/Layout';


export default class App extends Component {

  render() {

    let ratty = createBrowserRouter([
      {
        path: '', element: <Layout />, children: [
          { path: 'intro', element: <Intro /> },
          { path: 'about', element: <About /> },
          { path: 'education', element: <Education /> },
          { path: 'projects', element: <Projects /> },
          { path: 'work', element: <Work /> },
          { path: 'technology', element: <Technology /> }
        ]
      }
    ])

    return (
      <div>
        <RouterProvider router={ratty} />
      </div>
    )
  }
}








