import React, { Component } from 'react'
import { browserHistory } from 'react-router';

class CarDetail extends Component {
  handleRedirect () {
    browserHistory.push('/cars')
  }

  render () {
    const cars = this.props.route.data
    const id = this.props.params.id
    const car = cars.filter(car => {
      if (car.id == id) {
        return car
      }
    })
    return (
      <div>
        <button onClick={this.handleRedirect.bind(this)}>Back To Cars</button>
        <h1>{car[ 0 ].name}</h1>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={car[ 0 ].media} alt={car[ 0 ].name}/>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <ul>
              <li><strong>Model</strong>: {car[ 0 ].model}</li>
              <li><strong>Make</strong>: {car[ 0 ].make}</li>
              <li><strong>Year</strong>: {car[ 0 ].year}</li>
              <li><strong>Price</strong>: {car[ 0 ].price}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

CarDetail.propTypes = {};
CarDetail.defaultProps = {};

export default CarDetail;
