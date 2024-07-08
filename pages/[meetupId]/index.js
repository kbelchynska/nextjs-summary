import MeetupDetail from "../../components/meetups/MeetupDetail";

import { DUMMY_MEETUPS } from "..";

function MeetupDetails() {
  return <MeetupDetail />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  // meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: DUMMY_MEETUPS[0],
    },
    revalidate: 1,
  };
}

export default MeetupDetails;
