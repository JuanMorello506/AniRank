import React from 'react';
import '../trailer/trailer.css'

const Trailer = ({ trailer }) => {
  return (
    <>
      <h3 className="title">Trailer</h3>
      <div className="trailer-container">
        {trailer?.embed_url ? (
          <iframe
            src={trailer?.embed_url}
            title="Inline Frame Example"
            width="800"
            height="450"
            sandbox="allow-scripts allow-same-origin"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <h3>Trailer not available</h3>
        )}
      </div>
    </>
  );
};

export default Trailer;