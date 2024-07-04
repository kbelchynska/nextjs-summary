import MeetupDetail from "../../components/meetups/MeetupDetail";

import { DUMMY_MEETUPS } from "..";

function MeetupDetails() {
  return <MeetupDetail />;
}

export async function getStaticProps(context) {
  meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: DUMMY_MEETUPS[0],
    },
    revalidate: 1,
  };
}

export default MeetupDetails;
