import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import morbiusgif from '../Images/giphy-morbius.gif'
import badguysgif from '../Images/giphy-the bad guys.gif'
import lostcitygif from '../Images/giphy-the lost city.gif'
import badguys from '../Images/The Bad Guys-2.jpg'
import lostcity from '../Images/The Lost City.jpg'
import morbius from '../Images/Morbius.jpg'
import '../Css/Movies.css'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import cinemahome from '../Images/Cinema-home.PNG'
import { carouselItems } from '../Components/CarouselItems'
import { movieItems } from '../MovieItems'
import { useParams } from 'react-router-dom';




class Movies extends Component {



  render() {

    return (

      <div className='movies-body'>

        <div className='carousel-container'>
          <Carousel>
            {
              carouselItems.map((item) => {
                return (
                  <Carousel.Item>
                    <img className="d-block "
                      height='500px' width='100%'
                      src={item.img} alt='image' />
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
          {/*<Carousel.Item>
              <img
                className="d-block "
                height='500px' width='100%'
                src={cinemahome}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                height='500px' width='100%'
                src={morbiusgif}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Morbius</h1>
                <p>Action,Adventure,Drama</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                height='500px' width='100%'
                src={badguysgif}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>THE BAD GUYS</h3>
                <p>Animation,Adventure,Comedy</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                height='500px' width='100%'
                src={lostcitygif}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>THE LOST CITY</h3>
                <p>Action,Adventure,Comedy</p>
              </Carousel.Caption>
            </Carousel.Item>*/}

        </div>
        <br />
        <br />



        <div className="horizontal-line">
          <hr />
        </div>
        <div className="now-playing">
          <h1>Now Playing ...</h1>
        </div>

        <div className='movies'>
          <ul className='movies-list'>

            {movieItems.map(movieitem => {
              return (
                <li>
                  <NavLink to='/movie-info/'> <img src={movieitem.img} height='300' width='300' /> </NavLink>
                  <h2>{movieitem.title}</h2>
                  <h5>{movieitem.genre}</h5>
                </li>)


            })}
          </ul>
        </div>
        <div classname="lower-body" >
          <div className = "coming-soon">
            <div className="horizontal-line">
              <hr />
            </div>
            <div className="now-playing">
              <h1>Coming Soon ...</h1>
            </div>

            <div className='movies'>
              <ul className='movies-list'>

                {movieItems.map(movieitem => {
                  return (
                    <li>
                      <NavLink to='/movie-info'> <img src={movieitem.img} height='300' width='300' /> </NavLink>
                      <h2>{movieitem.title}</h2>
                      <h5>{movieitem.genre}</h5>
                    </li>)


                })}
              </ul>
            </div>
          </div>
          <div className = "location">

          </div>
        </div>




        {/* <div className= 'movies'>
          <ul className= 'movies-list'>
            <li>
              <NavLink to= '/movie-info'> <img src= {badguys} height= '300' width= '300' /> </NavLink>
              <h2>The Bad Guys</h2>
              <h5>Animation,Adventure,Comedy</h5>
            </li>
            <li>
            <img src= {lostcity} height= '300' width= '300' />
            <h2>The Lost City</h2>
            <h5>Action,Adventure,Comedy</h5>
            </li>
            <li>
            <img src= {morbius} height= '300' width= '300' />
            <h2>Morbius</h2>
            <h5>Action,Adventure,Drama</h5>
            </li>
            <li>
              <img src= {badguys} height= '300' width= '300' />
              <h2>The Bad Guys</h2>
              <h5>Animation,Adventure,Comedy</h5>
            </li>
            <li>
              <img src= {badguys} height= '300' width= '300' />
              <h2>The Bad Guys</h2>
              <h5>Animation,Adventure,Comedy</h5>
            </li>
            <li>
              <img src= {badguys} height= '300' width= '300' />
              <h2>The Bad Guys</h2>
              <h5>Animation,Adventure,Comedy</h5>
            </li>
          </ul>
        </div> */}
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}
export default Movies