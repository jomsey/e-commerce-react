import React from 'react'
import "./About.css"
import TopBar from './../components/TopBar';
export default function About() {
  return (
    <><TopBar showToggler={true}/>
    <div className="about-container">
        <div className="details">
           <div className="project-description info">
            <h2>About Project</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, error ex dolorum hic quibusdam nesciunt quisquam placeat doloribus nemo voluptate ipsum eos nisi! Enim, maxime placeat expedita laboriosam autem ea repudiandae porro repellat illo voluptas voluptatibus, molestiae ab, officia quis!</p>

           </div>
            <div className="about-me info">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum quidem mollitia deleniti? Nobis commodi aspernatur eum laboriosam itaque, quod asperiores, placeat voluptatem unde molestiae est fugit delectus optio, rem error quam harum voluptates. Architecto facere libero animi ratione tempora veritatis accusamus. Minima quaerat explicabo magni ipsa accusantium fuga, accusamus fugiat culpa possimus laborum debitis, rerum distinctio optio, dolor quas?</p>
            </div>
            <div className="credits info">
                <h2>Disclaimer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum quidem mollitia deleniti? Nobis commodi aspernatur eum laboriosam itaque, quod asperiores, placeat voluptatem unde molestiae est fugit delectus optio, rem error quam harum voluptates. Architecto facere libero animi ratione tempora veritatis accusamus. Minima quaerat explicabo magni ipsa accusantium fuga, accusamus fugiat culpa possimus laborum debitis, rerum distinctio optio, dolor quas?</p>
            </div>
            <div className="technologies-used info">
                <h2>Technologies used</h2>
                 <ul>
                    <li>React</li>
                    <li>Django</li>
                 </ul>
            </div>
        </div>
    </div>
    </>
  )
}
