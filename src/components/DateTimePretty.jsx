import DateTime from "./DateTime";
import moment from "moment/moment";
import PropTypes from 'prop-types';


const DateTimePretty = WithDateTimePretty(DateTime)

function WithDateTimePretty(Component) {

    return function DateChanger(props) {

        DateChanger.propTypes = {
            date: PropTypes.string.isRequired,
        }

        const newProps = { date: moment(props.date, "YYYY-MM-DD HH:mm:ss").fromNow() };

        return <Component {...props} {...newProps} />;

    }
}

export default DateTimePretty;