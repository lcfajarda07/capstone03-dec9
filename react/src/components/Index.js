import React from "react";
import logo from "./../logo.svg";
import { Hero,Section,Container,Media,Heading,Content,Image, Columns,  Button } from "react-bulma-components";
import { getSingersQuery} from "../queries/queries";
import {flowRight as compose } from "lodash";
import Swal from "sweetalert2";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import {Jumbotron,Card} from 'react-bootstrap';
import ControlledCarousel from './ControlledCarousel';

import Example from "./Calendar";


const Index = props => {
	const data = props.data;
	const singerData = props.getSingersQuery.getSingers ? props.getSingersQuery.getSingers: [];
	




	return (

<Hero size="fullheight" className="dj" >

<ControlledCarousel/>
<Columns >
   {singerData.map(singer =>{

       return(
<Card id="hcard" className="shadow" style={{ width: '58rem' }}>
<Columns>
    <Columns.Column>
  <Card.Img variant="top"  src="https://unsplash.it/500/300?image=503" class="fadeIn"/>
    </Columns.Column>
  <Columns.Column>
  <Card.Body>
    <Card.Title>{singer.name}</Card.Title>
    <Card.Text>
     {singer.description}
    </Card.Text>
  <Example/>
    <input type="date" />
    <div>
        <Link to= {"/booking/" +singer.id}>
    <Button id="book" variant="primary">Book Now</Button>
     </Link>
    </div>
   
  </Card.Body>
   </Columns.Column>
</Columns>
</Card>


    	);
		})}

  
   </Columns>
</Hero>
		);
};

export default compose(
	graphql(getSingersQuery,{ name: "getSingersQuery"})
	)(Index);

