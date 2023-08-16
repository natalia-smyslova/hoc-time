import data from './data/data';
import VideoList from './components/VideoList';

export default function App() {

    return (
        <VideoList list={data} />
    );
}