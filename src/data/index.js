const videoA = {
  id: '1',
  type: 'Video',
  title: 'Foo Redux',
  duration: 180,
  watched: true
};

const videoB = {
  id: '2',
  type: 'Video',
  title: 'Boo React',
  duration: 180,
  watched: false
};

const videos = [ videoA, videoB ];

function getVideoById (id) {
  return new Promise((resolve) => {
    const [ video ] = videos.filter((video) => {
      return video.id === id;
    });

    resolve(video);
  });
}

function getVideos (id) {
  return new Promise((resolve) => {
    resolve(videos);
  });
}

function createVideo ({ title, duration, released }) {
  const video = {
    id: (new Buffer(title, 'utf8').toString('base64')),
    title,
    duration,
    released
  };

  videos.push(video);

  return video;
}

module.exports = {
  getVideoById,
  getVideos,
  createVideo
};