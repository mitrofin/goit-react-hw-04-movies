import { NavLink, Route, withRouter } from 'react-router-dom';
import Cast from '../../views/Cast';
import Reviews from '../../views/Reviews';
import s from './AdditionalInfo.module.scss';
import PropTypes from 'prop-types';

const AdditionalInfo = ({ url, path, locationState }) => {
  return (
    <>
      <ul className={s.additionalInfo}>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { ...locationState },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { ...locationState },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Route path={`${path}/cast`} component={Cast} />
      <Route path={`${path}/reviews`} component={Reviews} />
    </>
  );
};
export default withRouter(AdditionalInfo);

AdditionalInfo.propTypes = {
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  locationFrom: PropTypes.string.isRequired,
}.isRequired;
