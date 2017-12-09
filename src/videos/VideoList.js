import React from 'react';
import Video from './Video';
import VideoData from './VideoData.json';
import _ from 'lodash';

class VideoList extends React.Component {
    render() {
        let videos = _.map(VideoData.videos, (video) => {
            return <Video video={ video } key={ video.name } />;
        });
        return (
            <div>
                <row>
                    { videos }
                </row>
            </div>
        );
    }
}

export default VideoList;
