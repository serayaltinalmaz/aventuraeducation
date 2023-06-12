import React from 'react';
import YouTube from 'react-youtube';

const Privacy = () => {
    const videoId = 's8n-ksF5zYg'; // YouTube kısa video ID'sini buraya girin

    const opts = {
        height: '360',
        width: '640',
        playerVars: {
        autoplay: 1,
        },
    };

    return (
        <div>
            <h1>Gizlilik Sözleşmesi</h1>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    );
};

export default Privacy;