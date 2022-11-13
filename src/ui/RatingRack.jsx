import PropTypes from "prop-types";
import Icon from "./Icon";
import "./RatingRack.css";

function RatingRack({ rate }) {
  return (
    <div className="rack">
      {rate === 5 && (
        <>
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} extra={"star-full"} />
        </>
      )}
      {rate === 4 && (
        <>
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} />
        </>
      )}

      {rate === 3 && (
        <>
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} />
          <Icon iconName={"star"} />
        </>
      )}
      {rate === 2 && (
        <>
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} />
          <Icon iconName={"star"} />
          <Icon iconName={"star"} />
        </>
      )}

      {rate === 2 && (
        <>
          <Icon iconName={"star"} extra={"star-full"} />
          <Icon iconName={"star"} />
          <Icon iconName={"star"} />
          <Icon iconName={"star"} />
          <Icon iconName={"star"} />
        </>
      )}
    </div>
  );
}

RatingRack.propTypes = {
  rate: PropTypes.number,
};

export default RatingRack;
