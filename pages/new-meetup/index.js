import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm />;
}

export default NewMeetupPage;
