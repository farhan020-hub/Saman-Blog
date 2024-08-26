import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./landingpage.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import images from "../../assests/myactivityimg1.jpeg";

function Landingpage() {
  const [posts, setPosts] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://djsonserved.glitch.me/blog")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={`landingpage-container ${isScrolled ? "scrolled" : ""}`}>
      <Header />
      <Sidebar />
      <br />
      <br />
      <br />
      <h2>Interview on Integration of Madrassa</h2>
      <div className="video-player">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=hTyvFP3J58I"
          playing
          controls
          width="100%"
          height="100%"
        />
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* Myactivity section */}
      <h1>My activity</h1>
      <div className="my-activity-section">
      
        <div className="activity-image">
          {/* Add your image here */}
          <img src={images} alt="My activity" />
        </div>
        <div className="activity-content">
          
          <p>
            With my esteemed colleagues Dr Abebe, Dr Hailegariel and Samatar
            from Frontier, we facilitated a pivotal 2-day Baseline Assessment
            Workshop in Djibouti on 10th and 11th March 2024 for GIZ-IGAD. The
            assessment will be instrumental in strengthening Member States' Free
            Movement of Persons across member states. More importantly, it will
            serve as the foundation for a system that will validate the skills
            and qualifications of migrants, refugees, and returnees in the IGAD
            zone, thereby enhancing global and continental strategies for
            improved migration and refugee affairs management. The examination
            of the existing skill sets, the recognition of foreign
            qualifications, and the labour market requirements and other
            insights gained from this analysis will guide the establishment of a
            unified qualification recognition framework, the creation of
            platforms for aligning skills with labour demands, and the
            formulation of policy advisories to facilitate the seamless
            integration of migrant, refugee, and returnee populations into the
            labour market. The ultimate goal of the study is to pinpoint the
            skills in demand and address discrepancies between skill
            qualifications and employer needs.
          </p>
        </div>
      </div>

      <div className="containers bg-wheat">
        <hr />
        <h2>Blog List</h2>
        <hr />
        <br />
        <div className="card-containers bg-wheat">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4 mb-3">
              <div className="card bg-black">
                <img src={post.image} alt={post.title} className="card-img" />
                <div className="card-body">
                  <h5 className="card-title text-primary">{post.title}</h5>
                  <p className="card-text">{post.briefDescription}</p>
                  <Link to={`/blog/${post.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
