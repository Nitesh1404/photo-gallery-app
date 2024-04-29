import React from "react";
import GridItem from "./GridItem";

const Grid = ({ photos }) => {
  return (
    <>
      <div className="container">
        <h1 className="text-center my-4">Our Gallery</h1>
        <p className="text-center mb-4">
          Welcome to our photo gallery! Here, you can view, download, and add photos to our collection. We encourage everyone to share their memorable moments so that others can see and interact with them.
        </p>
        <div className="row">
          {photos.map(({ photo, _id }) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={_id}>
              <GridItem photo={photo} id={_id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;
 