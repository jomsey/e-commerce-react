import React from 'react'
import "./About.css"
import TopBar from './../components/TopBar';
export default function About() {
  return (
    <><TopBar showToggler={true}/>
    <div className="about-container">
        <div className="details">
          
            <div className="about-me info">
                <h2>About Me</h2>
                <table>
                    <tbody>
                        <tr>
                          <td>Name</td>
                          <td>Muwanguzi Joseph</td>
                        </tr>
                        <tr>
                          <td>Nationality</td>
                          <td>Ugandan</td>
                        </tr>
                        <tr>
                          <td>Hobbies</td>
                          <td>Coding , Photography , Movies</td>
                        </tr>
                        <tr>
                          <td>Languages</td>
                          <td>Python , JavaScript</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="technologies-used info">
               <h2>Tech used</h2>

                 <ul>
                    <li>React</li>
                    <li>Django</li>
                 </ul>
            </div>
            <div className="code info">
                <h2>Source Code</h2>
                 <ul>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Front End</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Back End</a></li>
                 </ul>
            </div>
          
        </div>
    </div>
    </>
  )
}
