import { FC } from "react";
import { Link } from "react-router-dom";

import "./sitenotfound.scss";

export const SiteNotFound: FC = () => {
  return (
    <div>
      <h3 className="error">
        I apologize for any confusion. It appears that I may have lost my way in
        the vast expanse of the internet. Allow me to return you to the world of
        movies, where we can continue our journey together. Please click the
        button below to return to the planet of movies.
      </h3>
      <Link to={`/home`}>
        <button>Go Back</button>
      </Link>
    </div>
  );
};
