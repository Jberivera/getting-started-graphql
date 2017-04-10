const videoA = {
  id: '1',
  title: 'Foo Redux',
  duration: 180,
  watched: true
};

const videoB = {
  id: '2',
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

module.exports = {
  getVideoById
};