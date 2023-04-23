import NavBar from "../../component/NavBar/NavBar";
import React from "react";
import {Button} from "react-bootstrap";
import HuddleClient from "../../client/HuddleClient";
import loadingGif from '../../assets/loading.gif';
import './MeetingManagement.css';

const MeetingManagement = (props: any) => {

  const [meetingTranscriptText, setMeetingTranscriptText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState('');


  const handleSubmit = () => {
    setLoading(true)
    HuddleClient.generateMeetingNotes(meetingTranscriptText)
      .then((data: any) => {
        setData(data?.choices[0]?.message?.content as string);
        console.log(data);
        setLoading(false);
      })
  }

  return (
      <div className="meeting-management">
        <NavBar/>
        <div className="container meeting-management__container">
          <div className="mt-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Meeting Transcript</label>
            <textarea className="form-control" value={meetingTranscriptText} id="exampleFormControlTextarea1" onChange={(evt) => setMeetingTranscriptText(evt.target.value)} rows={18} placeholder="Enter meeting transctipt here..."></textarea>
          </div>
          <Button disabled={loading} className="mt-3 meeting-button" onClick={handleSubmit} variant="outline-secondary">{loading ? <img className="button__loading-gif" src={loadingGif}/> : 'Generate Meeting Notes'}</Button>
          {
            data !== '' && <div className="mt-4 border border-primary rounded p-4 mb-5">
              {(data.split('\n').map((text: string) => {
                return text.startsWith('- ') ? <p className="mt-0 ms-3 mb-0">{text}</p> : <p className="mt-0 mb-0 fw-bold">{text}</p>
              })) || null}
            </div>
          }
        </div>
      </div>
  )
}

export default MeetingManagement
