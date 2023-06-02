import PropTypes from 'prop-types'
import "./CheckMark.css"

function CheckMark ({visible}) {
        return (
         visible?
         <div className="edit-done-check">
             <span className="done-text">DONE</span>
         </div>:
         null
         
  )
}

CheckMark.propTypes = {
    visible:PropTypes.bool.isRequired
}

export default CheckMark