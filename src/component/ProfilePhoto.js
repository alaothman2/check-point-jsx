import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function ProfilePhoto() {
  return (
    <div>
    <span class="border border-3 ">
      <div class="card" >
        <img src="./profil.jpg" alt="..." class="rounded-pill"/>
        
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            I have 19 years old and i studies in go my code 
          </p>
          <a href="#" className="btn btn-primary">
           more details
          </a>
        </div>
      </div>
      </span>
    </div>
  );
}

export default ProfilePhoto;
