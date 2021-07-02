import PropTypes from 'prop-types';
import s from './CastList.module.scss';
import BlankImageLoader from '../BlankImageLoader/BlankImageLoader';
import BASE_IMG_URL from '../../utils/baseUrlforFetching';

const CastList = ({ cast }) => {
  return (
    <>
      {cast.length > 0 ? (
        <ul className={s.castList}>
          {cast.map(({ profile_path, name, character }, index) => (
            <li key={index} className={s.castListItem}>
              {profile_path ? (
                <div className={s.actorPhotoWrapper}>
                  <img
                    src={`${BASE_IMG_URL}${profile_path}`}
                    alt="profilePhoto"
                  />
                </div>
              ) : (
                <BlankImageLoader />
              )}
              <div className={s.descrWrapper}>
                <span className={s.info}>{name}</span>
                <span className={s.info}>Character: {character}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.content}>
          We don't have any info about cast for this movie.
        </p>
      )}
    </>
  );
};

export default CastList;

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
}.isRequired;
