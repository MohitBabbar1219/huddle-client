import axios from 'axios';

const BASE_URL = 'http://localhost:4000'

const generateMeetingNotes = async (meetingTranscript: string) => {
  try {
  return (await axios.post(`${BASE_URL}/essence`, {
      text: meetingTranscript
    })).data;
  } catch (e) {
    console.log("Error occurred while fetching meeting essence", e)
    return null
  }
}

export default {generateMeetingNotes}