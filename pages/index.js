import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rome_skyline_panorama.jpg/1920px-Rome_skyline_panorama.jpg",
    address: "@@@",
    description: "!!!",
  },
  {
    id: "m2",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rome_skyline_panorama.jpg/1920px-Rome_skyline_panorama.jpg",
    address: "@@@",
    description: "!!!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
