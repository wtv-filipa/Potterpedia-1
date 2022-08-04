import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/general.css';
import '../../styles/characters.css';
import hogwarts from '../../imgs/hogwarts.jpg'

const Character = ({ id, name, house, image, actor }) => {
  return (

    <div id="characters" className="col-lg-4 col-md-6">
      <div className="card">
        <img className="card-img-top" src={hogwarts} alt="hogwarts" />
        <div className="card-body">
          <span className="round-image">
            <img src={image} alt="character" />
          </span>
          <h4 className="card-title">{name}</h4>
          <p className="card-text">The character {name} is played by {actor}.</p>
          <p className="card-text">House: {house}</p>
          <Link key={id} to={`/characters/${id}`} className="btn btn-default text-uppercase">
            More details
                </Link>
        </div>
      </div>

    </div>

  )
}

export default Character;