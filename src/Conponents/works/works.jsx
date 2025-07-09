import React from 'react';
import './works.css';

function Works() {
  return (
    <section id='works'>
      <div className='container'>
        <h2 className='title'>Portfolio</h2>
        <p>
          I am a dedicated and results-driven Information Systems graduate with a B.Sc.
          degree. I bring practical experience in system and web development, having
          worked on various projects that showcase my expertise in delivering high-quality
          digital solutions. My technical competencies include proficiency in WordPress,
          MERN Stack, PHP, and CodeIgniter4. where I continue to refine my skills in crafting innovative,
          scalable solutions.
        </p>
      </div>
      <div className='webdeve'>
        <h3 className='webtitle'>Full Stack Website Developer</h3>
        <p>
          I bring practical experience in system and web development
        </p>
        <h1 className='project'>Projects</h1>

        {/* Cards Section */}
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">This is a brief description of Project 1. It showcases my skills in web development.</p>
                <a href="#" className="btn btn-primary">See Details</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">This is a brief description of Project 2. It highlights my expertise in full-stack development.</p>
                <a href="#" className="btn btn-primary">See Details</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">This is a brief description of Project 3. It demonstrates my ability to create responsive designs.</p>
                <a href="#" className="btn btn-primary">See Details</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 4" />
              <div className="card-body">
                <h5 className="card-title">Project 4</h5>
                <p className="card-text">This is a brief description of Project 4. It reflects my knowledge of backend systems.</p>
                <a href="#" className="btn btn-primary">See Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;