import React, { useEffect, useState } from 'react';
import { getMovieVideos } from '../api/moviesAPI';

const MovieTrailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      const videos = await getMovieVideos(movieId);
      // Pick the first official YouTube Trailer
      const trailerVideo = videos.find(
        (v) => (v.type === 'Trailer' || 'Teaser') && v.site === 'YouTube'
      );
      setTrailer(trailerVideo);
    };
    fetchTrailer();
  }, [movieId]);

  return (
    <div>
      {trailer ? (
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default MovieTrailer;
