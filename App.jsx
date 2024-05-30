import { useState } from 'react'
import './App.css'
import songs from "./data/songs.json"
import DisplaySongs from "./Components/Song.jsx"

console.log(songs)

function App() {

  // 1 - break out into within HTML
  // 2 - call the map function (its function s give name to MAP function)
  //3-  Map takes a function as an argument  - we tend to use annonymous arrow => function 
  // 4 - when you give Map a function as an arguments, it will try and pass two values to that function as an arguments - the elements currently being looped over and its index
  // 5 - we hit enter the inside the arrow function brakets to make things cleaner
  //6 - we treat the arrowfunction as if it were a components so we have to return some HTML

  return (
    <div>
      {songs.map((song, index) => {
        return (
          <DisplaySongs
            pics = {song.pics}
            song={song.songName}
            album={song.albumName}
            url={song.url}
            key={index}
          />
        );



      })}
    </div>
  );
}

export default App;

// if your repeating code over and over where only data changes, use a loop
// for every item, render an item display components

// ================Example======================
// const [1,2,3,4,5,7,8,10]
// Return(
//   <>
//   <div>
//     ====for every element in the list , return a h1 tag with its innerHTML being each element===

//     ==============Map Template================================
//     {arrayName.map((arranNamesingular, IndexItem)=> {
//       return(
//         <div>
//             <h1>
// //           Element : {number} Index :{index}
//             </h1>
//           </div>
//       )
//     })}
  // =============================================================
