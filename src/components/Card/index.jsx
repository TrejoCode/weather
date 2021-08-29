/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Card component
 */

import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { WEEK_DAYS } from "static/constants/dates";

const Card = ({ data, loading }) => {
  return WEEK_DAYS?.map((day, index) => (
    <div className="__card column justify-center align-center" key={index}>
      <div className="__day">
        <p className="weight-medium text-center">{day}</p>
      </div>
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
        <p className="text-center">
          {loading && <Skeleton height="1.5rem" width="2rem" />}
          <span className="weight-bold">{data?.current?.temperature}</span>
          °C
        </p>
      </div>
    </div>
  ));
};

Card.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
};

export default Card;
