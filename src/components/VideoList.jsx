import PropTypes from 'prop-types';
import Video from './Video';
import { nanoid } from 'nanoid'

function VideoList(props) {
    return props.list.map(item => <Video key={nanoid()} url={item.url} date={item.date} />);
}


VideoList.propTypes = {
    list: PropTypes.array.isRequired
}


export default VideoList;