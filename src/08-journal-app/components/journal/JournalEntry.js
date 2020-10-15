import React from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { activeNote } from '../../actions/notesAction'

const JournalEntry = ({ id, date, title, body, url }) => {

  const dispatch = useDispatch()
  const noteDate = moment(date)

  const handleActiveNote = (id) => {
    dispatch(activeNote(id, { date, title, body, url }))
  }

  return (
    <div 
      className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
      onClick={() => handleActiveNote(id)}
    >
      {
        url &&
        <div className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`
          }}
        >
        </div>
      }

      <div className="journal__entry-body">
        <p className="journal__entry-title">
          {title}
        </p>
        <p className="journal__entry-content">
          {body}
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <h4>28</h4>
      </div>
    </div>
  )
}

export default JournalEntry
