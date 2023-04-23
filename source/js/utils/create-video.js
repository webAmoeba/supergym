const container = document.querySelector('.preview__video-wrapper');
const preview = container.querySelector('picture');
const button = container.querySelector('#youtube');

const createVideo = () => {
  const video = document.createElement('iframe');

  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  video.setAttribute('allowfullscreen', '');
  video.classList.add('preview__youtube-iframe');
  container.append(video);
};


if (container && preview && button) {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    preview.style.display = 'none';
    button.style.display = 'none';
    createVideo();
  });
}
