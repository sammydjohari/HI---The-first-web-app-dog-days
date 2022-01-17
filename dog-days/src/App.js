import React, { useState } from 'react';
import Calendar from 'react-calendar'
import styled from 'styled-components';
import moment from 'moment';

export default function App() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <CalendarContainer>
      <Calendar
      value={dateState}
      onChange={changeDate}
      />
      <p>Selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </CalendarContainer>
  )
}

const CalendarContainer = styled.div` 
max-width: 500px;
margin: auto;
margin-top: 300px;
background: rgb(85,142,242);
background: linear-gradient(90deg, rgba(85,142,242,1) 13%, rgba(16,247,188,1) 51%, rgba(85,142,242,1) 87%);
padding: 30px 50px 20px 50px;
border-radius: 10px;

.react-calendar__navigation {
  display: flex;

  .react-calendar__navigation__label {
    font-weight: bold;
  }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
}

.react-calendar__month-view__weekdays {
  text-align: center;
  color: #F9F3F0;
}

button {
  margin: 3px;
  background-color: #6f876f;
  border: 0;
  border-radius: 3px;
  color: white;
  padding: 5px 0;

  &:hover {
    background-color: #556b55;
    cursor: pointer;
  }

  &:active {
    background-color: #a5c1a5;
  }
}

.react-calendar__month-view__days {
  display: grid !important;
  grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 

  .react-calendar__tile {
    max-width: initial !important;
  }
}

.react-calendar__month-view__days__day--neighboringMonth {
  opacity: 0.7;
}
.react-calendar__month-view__days__day--weekend {
  color: #dfdfdf;
}

.react-calendar__tile--range {
  box-shadow: 0 0 6px 2px black;
}

.react-calendar__year-view__months, 
.react-calendar__decade-view__years, 
.react-calendar__century-view__decades {
  display: grid !important;
  grid-template-columns: 20% 20% 20% 20% 20%;

  &.react-calendar__year-view__months {
    grid-template-columns: 33.3% 33.3% 33.3%;
  }

  .react-calendar__tile {
    max-width: initial !important;
  }
  }
`;


