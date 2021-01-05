import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dish }) {

    return (<div className="container">
        <Card key={dish.id}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    </div>);

}

function RenderComments({ comments }) {

    return (<div className="container">
        <h2><b>Comments:</b></h2>
        <ul>
            {comments}
        </ul>
    </div>);

}

const DishDetail = (props) => {
    if (props.dish != null) {
        const comments = props.comments.map((comment) => {
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
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={comments} />
                </div>
            </div>
            </div>
        );

    }
    else {
        return (<div></div>);
    }



}

export default DishDetail;

// class DishdetailComponent extends Component {





//     render() {
//         if (this.props.dish != null) {
//             const comments = this.props.dish.comments.map((comment) => {
//                 return (
//                     <li className="lead">
//                         --{comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}<br />
//                         {comment.comment}
//                         <br /><br />
//                     </li>
//                 );
//             });
//             return (
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12 col-md-5 m-1">
//                             <Card key={this.props.dish.id}>
//                                 <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
//                                 <CardBody>
//                                     <CardTitle>{this.props.dish.name}</CardTitle>
//                                     <CardText>{this.props.dish.description}</CardText>
//                                 </CardBody>
//                             </Card>
//                         </div>
//                         <div className="col-12 col-md-5 m-1 container">
//                             <h2><b>Comments:</b></h2>
//                             <ul>
//                                 {comments}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//             );
//         }
//         else
//             return (
//                 <div></div>
//             );

//     }
// }


// export default DishdetailComponent;