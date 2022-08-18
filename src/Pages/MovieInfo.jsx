import React from 'react'
import badguys from '../Images/The Bad Guys-2.jpg'
import '../Css/Movies.css'
import "../Css/styles.css";
import YoutubeEmbed from "../Components/YoutubeEmbed";
import { movieItems } from '../MovieItems'


function MovieInfo() {
  return (
    <div className='movie-info' >
      
          <div>
            <h1> The Bad Guys </h1>
            <br />
            <div className='trailer'>
              <YoutubeEmbed embedId= "zpDuBXB_glk" />
            </div>
            <br />
            <br />
            <div >
              <h2> Movie Info </h2>
              <div className="horizontal-line">
                <hr />
              </div>
            </div>
            <div className='movie-description'>
              <ul >
                <li>Runtime: N/A</li>
                <li>Year: 2022</li>
                <li>Genre: Animation, Adventure, Comedy</li>
                <li>Writer: Aaron Blabey, Etan Cohen, Hilary Winston</li>
              </ul>
              <ul>
                <li>Rating: PG</li>
                <li>Director: Pierre Perifel</li>
                <li>Release: 22 Apr 2022</li>
                <li>Actors: Sam Rockwell, Awkwafina, Anthony Ramos</li>
              </ul>
              <ul>
                <li>Language: English</li>
                <li>Country: United States</li>
                <li>Production: N/A</li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

    </div>
  )
}

export default MovieInfo