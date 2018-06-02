import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component
{
  constructor(props)
  {
    super(props);
    }

    renderDish(dish)
    {
      if(dish != null)
      {
        return(
        <div>
        <div class="col-12 col-md-5 m-1">
          <Card>
            <CardBody>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardTitle>{dish.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
        <div class="col-6 col-md-15 m-1">
        <Card>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        </div>
        </div>
        );
      }
      else
      {
        return(
          <div></div>
        );
      }
    }

    render()
    {

    return(
        <div className="container">
          <div className="col col-md-5">
            {this.renderDish(this.props.dish)}
          </div>
        </div>
      );
    }
}

export default DishDetail;
