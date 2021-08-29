/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Aside current component
 */

import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

const AsideCurrent = ({ data, loading }) => {
  return (
    <div className="__current full column justify-center align-center">
      <div className="__image responsive-img">
        {loading ? (
          <Skeleton circle={true} height={50} width={50} />
        ) : (
          <img
            src={data?.current?.weather_icons[0]}
            alt="Icono del clima actual"
          />
        )}
      </div>
      <div className="__temperature">
        <h2 className="font-large text-center">
          {loading && <Skeleton height="2rem" width="120px" />}
          {data?.current?.temperature} <span className="weight-medium">°C</span>
        </h2>
      </div>
      <div className="__location">
        {loading && <Skeleton height="2rem" width="120px" />}
        <h3 className="text-center">{data?.location?.name}</h3>
      </div>
      <div className="__description">
        <p className="weight-medium text-center">
          {loading && <Skeleton height="2rem" width="120px" />}
          {data?.current?.weather_descriptions[0]}
        </p>
      </div>
    </div>
  );
};

AsideCurrent.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default AsideCurrent;
