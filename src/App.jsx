import { useEffect, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';
const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map((id) => AVAILABLE_PLACES.find((place) => place.id === id));


function App() {


  const [nameLabel, setName] = useState();
  const [fullNameLabel, setfullNameLabel] = useState();
  const [ageLabel, setAge] = useState();
  const userName = useRef();
  const age = useRef();
  const fullName = useRef();

  function handleClick() {

    setName(userName.current.value);
    setfullNameLabel(fullName.current.value);

    setAge(age.current.value);

    console.log(usernameLabel);
  }
  return (

    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic hapsspen!</h2>
      <div>
        <label>UserName:</label>
        <input style={{ display: 'block' }} type="text"
          ref={userName}
        />
      </div>
      <div>
        <label>FullName:</label>
        <input type="text" style={{ display: 'block' }}
          ref={fullName}
        />
      </div>
      <div>
        <label>Age:</label>
        <input type="text" style={{ display: 'block' }}
          ref={age}
        />
      </div>
      <button onClick={handleClick}>Click</button>
      <div>
        UserName: {nameLabel}
        FullName: {fullNameLabel}
        Age: {ageLabel}
      </div>
    </div>

  )
  /*  const modal = useRef();
   const selectedPlace = useRef();
   const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
   const [availablePlaces, setAvPlaces] = useState(AVAILABLE_PLACES);
 
   console.log(pickedPlaces, availablePlaces)
   // navigator.geolocation.getCurrentPosition((position) => {
   //   const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude)
   // });
 
   useEffect(() => {
     navigator.geolocation.getCurrentPosition((position) => {
       const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude)
 
       setAvPlaces(sortedPlaces)
     });
   }, [])
   function handleStartRemovePlace(id) {
     modal.current.open();
     selectedPlace.current = id;
   }
 
   function handleStopRemovePlace() {
     modal.current.close();
   }
 
   function handleSelectPlace(id) {
     setPickedPlaces((prevPickedPlaces) => {
       if (prevPickedPlaces.some((place) => place.id === id)) {
         return prevPickedPlaces;
       }
       const place = AVAILABLE_PLACES.find((place) => place.id === id);
       return [place, ...prevPickedPlaces];
     });
     const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
     if (storedIds.indexOf(id) === -1) {
       localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
     }
 
   }
 
   function handleRemovePlace() {
     setPickedPlaces((prevPickedPlaces) =>
       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
     );
     const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
     localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current)));
     modal.current.close();
   }
 
   return (
     <>
       <Modal ref={modal}>
         <DeleteConfirmation
           onCancel={handleStopRemovePlace}
           onConfirm={handleRemovePlace}
         />
       </Modal>
 
       <header>
         <img src={logoImg} alt="Stylized globe" />
         <h1>PlacePicker</h1>
         <p>
           Create your personal collection of places you would like to visit or
           you have visited.
         </p>
       </header>
       <main>
         <Places
           title="I'd like to visit ..."
           fallbackText={'Select the places you would like to visit below.'}
           places={pickedPlaces}
           onSelectPlace={handleStartRemovePlace}
         />
         <Places
           title="Available Places"
           places={availablePlaces}
           onSelectPlace={handleSelectPlace}
           fallbackText="Sorting places...."
         />
       </main>
     </>
   ); */
}

export default App;
