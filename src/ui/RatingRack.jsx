import PropTypes from "prop-types";
import Icon from "./Icon";
import "./RatingRack.css";


function RatingRack({ rate ,onStarClick,maxRate=5}) {
  const stars = getRatingStars(rate,maxRate)
  
  return (
  
      <div className="rack">
          {stars.map(star=> <Icon iconName={"star"} extra={star.type} key={star.number} onIconClick={onStarClick} />)}
      </div>
  );
}


function getRatingStars (rating,totalNumberOfStars){
          let stars = []
          for (let i = 1; i <= totalNumberOfStars; i++) {
                if(i<=rating)stars.push({type:"star-full",number:i})
                else stars.push({type:"star",number:i})
          }
        return stars;
          
}


RatingRack.propTypes = {
 rate: PropTypes.number.isRequired,
 maxRate:PropTypes.number,
 onStarClick:PropTypes.func
};

export default RatingRack;