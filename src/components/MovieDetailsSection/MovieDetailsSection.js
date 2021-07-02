import PropTypes from 'prop-types';
import s from './MovieDetailsSection.module.scss';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import BlankImageLoader from '../BlankImageLoader/BlankImageLoader';
import BASE_IMG_URL from '../../utils/baseUrlforFetching';

const MovieDetailsSection = ({
  movie,
  url,
  path,
  handleGoBack,
  locationState,
}) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  return (
    <>
      <section className={s.movieDetailsSection}>
        <div className={s.infoWrapper}>
          <div className={s.imgWrapper}>
            <button
              type="button"
              className={s.backButton}
              onClick={handleGoBack}
            >
              Go back
            </button>
            {poster_path ? (
              <img src={`${BASE_IMG_URL}${poster_path}`} alt="poster" />
            ) : (
              <BlankImageLoader />
            )}
          </div>

          <div className={s.mainInfoContainer}>
            <h1 className={s.sectionTitle}>{`${title}(${release_date.slice(
              0,
              4,
            )})`}</h1>
            <p className={s.description}>{`User score: ${
              vote_average * 10
            }%`}</p>
            <h2 className={s.sectionTitle}>Overview:</h2>
            <p className={s.description}>{overview}</p>
            <h3 className={s.sectionTitle}>Genres:</h3>

            <ul className={s.genresList}>
              {genres.map(({ id, name }) => (
                <li key={id} className={s.genresListItem}>
                  <span className={s.genre}>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AdditionalInfo url={url} path={path} locationState={locationState} />
      </section>
    </>
  );
};

export default MovieDetailsSection;

MovieDetailsSection.propTypes = PropTypes.shape({
  movie: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleGoBack: PropTypes.func.isRequired,
  locationState: PropTypes.object.isRequired,
}).isRequired;
