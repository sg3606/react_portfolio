import React from 'react'; 
import Coursework from '../components/coursework'
import work from '../components/work.json'

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Work () {  

    return (
        <section className="container">
          <div className="project">
            <h2 className="top-title">Bootcamp Work</h2>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {work.map((project) => (
              <Coursework key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Work;