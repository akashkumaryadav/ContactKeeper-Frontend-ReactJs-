import React from "react";

const About = () => {
  return (
    <div style={{ marginTop: "10%" }} className="grid-2">
      <div style={{ marginTop: "18%" }}>
        <h1>
          About <span className="text-primary">Application</span>
        </h1>
        <p className="my-1">
          This is an Frontend UI for api ContactKeeper build with react also
          this is an pwa i.e Progressive web application that can work on your
          mobile device in similar way as native application work
        </p>
        <p className="bg-dark p">Verson 1.0</p>
      </div>
      <div>
        <h1>
          About <span className="text-primary">Developer</span>
        </h1>
        <div
          className="LI-profile-badge"
          data-version="v1"
          data-size="large"
          data-locale="en_US"
          data-type="horizontal"
          data-theme="dark"
          data-vanity="akash-yadav-a99323183"
        >
          <a
            className="LI-simple-link"
            href="https://in.linkedin.com/in/akash-yadav-a99323183?trk=profile-badge"
          >
            Akash Yadav
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
