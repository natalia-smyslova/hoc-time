import PropTypes from 'prop-types';
import DateTimePretty from './DateTimePretty';

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

Video.propTypes = {
    url: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired
}

export default Video;