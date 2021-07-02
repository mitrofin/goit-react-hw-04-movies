import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.scss';
import BlankImageLoader from '../BlankImageLoader/BlankImageLoader';
import BASE_IMG_URL from '../../utils/baseUrlforFetching';

const MoviesList = ({ movies, location, pageTitle }) => {
  return (
    <>
      <div className={s.listWrapper}>
        {pageTitle && <h1 className={s.pageTitle}> {pageTitle}</h1>}
        <ul className={s.moviesList}>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id} className={s.movieListItem}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
              >
                {poster_path ? (
                  <img src={`${BASE_IMG_URL}${poster_path}`} alt="poster" />
                ) : (
                  <BlankImageLoader />
                )}

                <span className={s.movieTitle}>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default withRouter(MoviesList);

MoviesList.propTypes = PropTypes.shape({
  movies: PropTypes.array,
  location: PropTypes.object,
  pageTitle: PropTypes.string,
}).isRequired;
