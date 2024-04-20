import { FC } from "react";
import { Link } from "react-router-dom";

import "./sitenotfound.scss";

export const SiteNotFound: FC = () => {
  return (
    <div>
      <h3 className="error">
        Ta ścieżka nie istnieje.
      </h3>
      <Link to={`/home`}>
        <button>Strona główna</button>
      </Link>
    </div>
  );
};
