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

  document.body.style.background = "#475AFF";

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
      setDog(result.message)
    })
    .catch(err=>console.log(err))
  }, [dateState]
  ) 

  console.log(dog)

  return (
    <>
    <Img src={dog}></Img>
    <CalendarContainer>
      <Calendar
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
height: 40vh;
margin: 20px 0 0 500px;
border-radius: 10px;
`

const CalendarContainer = styled.div` 
max-width: 500px;
margin: auto;
margin-top: 20px;
background-color: #0017E8;
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
  background-color: #475AFF;
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


