import {nanoid} from "nanoid";
import dayjs from "dayjs";

const DESCRIPTION = [
  `Contrary to popular belief, Lorem Ipsum is not simply random text.`,
  `It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old`,
  `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.`,
  `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
  `Various versions have evolved over the years, sometimes by accident.`,
  `The standard chunk of Lorem Ipsum used since the 1500s.`,
];
const GENRES_NAME = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
const POSTERS_IMG = [
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/aviator.jpg`, `img/bohemian-rhapsody.jpg`, `img/dardjeeling-limited.jpg`,
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`, `img/johnny-english.jpg`,
  `img/macbeth.jpg`, `img/midnight-special.jpg`, `img/mindhunter.jpg`, `img/orlando.jpg`];
const FILMS_NAME = [
  `The Grand Budapest Hotel`, `Bohemian Rhapsody`,
  `Macbeth`, `Aviator`, `We need to talk about Kevin`,
  `What We Do in the Shadows`, `Revenant`,
  `Johnny English`, `Shutter Island`, `No Country for Old Men`];
const NAMES = [`Anthony Mann`, `Anne Wigton`, `Heinz Herald`, `Richard Weil`, `Erich von Stroheim`, `Mary Beth`, `Dan Duryea`];
const VIDEOS = [
  `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
];
const STATES = [true, false];

const MAX_RATING = 10;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateRandomArray = (array) => {
  const randomArray = [];
  const randomNumber = getRandomNumber(1, array.length);
  for (let i = 0; i < randomNumber; i++) {
    const good = array[i];
    randomArray.push(good);
  }
  return randomArray;

};

const getRandomValue = (array) => array[getRandomNumber(0, array.length)];

const getRandomRating = () => (Math.random() * MAX_RATING).toFixed(1);

const generateFilm = () => {
  return {
    "id": nanoid(),
    "name": getRandomValue(FILMS_NAME),
    "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
    "preview_image": getRandomValue(POSTERS_IMG),
    "background_image": "img/bg-the-grand-budapest-hotel.jpg",
    "background_color": `#ffffff`,
    "video_link": getRandomValue(VIDEOS),
    "preview_video_link": getRandomValue(VIDEOS),
    "description": getRandomValue(DESCRIPTION),
    "rating": getRandomRating(),
    "scores_count": getRandomNumber(100, 300),
    "director": getRandomValue(NAMES),
    "starring": generateRandomArray(NAMES),
    "run_time": getRandomNumber(50, 200),
    "genre": getRandomValue(GENRES_NAME),
    "released": getRandomNumber(1950, 2022),
    "is_favorite": getRandomValue(STATES),
  };
};

const generateReviews = () => {
  return {
    "id": nanoid(),
    "user": {
      "id": nanoid(),
      "name": getRandomValue(NAMES),
    },
    "rating": getRandomRating(),
    "comment": getRandomValue(DESCRIPTION),
    "date": dayjs().toDate(),
  };
};

const films = new Array(8).fill(null).map(generateFilm);

export {films, generateReviews, generateFilm, getRandomNumber};
