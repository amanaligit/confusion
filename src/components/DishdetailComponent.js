import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishdetailComponent extends Component {



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
                        --{comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}<br />
                        {comment.comment}
                        <br /><br />
                    </li>
                );
            });
            return (
                <div className="container">
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