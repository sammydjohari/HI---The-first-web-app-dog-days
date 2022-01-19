import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'
import styled from 'styled-components';
import moment from 'moment';

export default function App() {
  const [dog, setDog] = useState() 
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }

  document.body.style.background = "#DCCAAC";

  function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
      setDog(result.message)
    })
    .catch(err=>console.log(err))
  }

  useEffect(() => {
    fetchDogs();
  }, [dateState]
  ) 

  return (
    <>
    <Img src={dog}></Img>
    <CalendarContainer>
      <Calendar calendarType="US"
      value={dateState}
      onChange={changeDate}
      />
      <p>Selected date is {moment(dateState).format('MMMM Do YYYY')}</p>
    </CalendarContainer>
    </>
  )
}

const Img = styled.img`
width: 30vw;
min-widht: 30vw;
height: 40vh;
min-height: 30vh;
margin: 20px 0 0 35%;
border-radius: 10px;

@media (max-width: 900px) {
      width: 60vw;
      height: 40vh;
      margin: 20px 0 4% 20%;
  }
`;

const CalendarContainer = styled.div` 
max-width: 500px;
margin: auto;
margin-top: 2%;
background-color: #9D5F38;
padding: 30px 50px 20px 50px;
border-radius: 10px;

.react-calendar__navigation {
  display: flex;

  .react-calendar__navigation__label {
    font-weight: bolder;
  }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
}

.react-calendar__month-view__weekdays {
  text-align: center;
  color: #F9F3F0;
}

p {
  color: #F9F3F0;
  margin-left: 3px;
}

button {
  margin: 3px;
  background-color: #673751;
  border: 0;
  border-radius: 3px;
  color: white;
  padding: 5px 0;

  &:hover {
    background-color: #866F61;
    cursor: pointer;
  }

  &:active {
    background-color: #9D8342;
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
  opacity: 0.5;
}
.react-calendar__month-view__days__day--weekend {
  color: #e4717a;
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


