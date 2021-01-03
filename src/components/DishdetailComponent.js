import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishdetailComponent extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     selectedDish: null
        // }
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }



    render() {
        if (this.props.dish != null) {
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <li className="lead">
                        --{comment.author} ,{this.formatDate(new Date(comment.date))}<br />
                        {comment.comment}
                        <br /><br />
                    </li>
                );
            });
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card key={this.props.dish.id}>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1 container">
                        <h2><b>Comments:</b></h2>
                        <ul>
                            {comments}
                        </ul>
                    </div>
                </div>
            );
        }
        else
            return (
                <div></div>
            );

    }
}


export default DishdetailComponent;