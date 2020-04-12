import React from 'react';
import LatestQuestions from './LatestQuestions';
import TopUsers from './TopUsers';
import  HotQuestions  from './HotQuestions';
import Header from './Header';

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <Header />
                </div>
               <div className="container-fluid">
                    <div className="row ">
                        <div className="col-sm fixed-width">
                            <h3>Lists user: </h3>
                            <TopUsers />
                        </div>
                        <div className="col-sm fixed-width">
                            <h3>Latest Questions</h3>
                            <LatestQuestions />
                        </div>
                        <div className="col-sm fixed-width">
                            <h3>Hot Questions</h3>
                            <HotQuestions />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}