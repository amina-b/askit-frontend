import React from 'react';
import LatestQuestions from './LatestQuestions';
import TopUsers from './TopUsers';
import  HotQuestions  from './HotQuestions';
import Header from './Header';

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="jumbotron">
                    <h1>ASK IT</h1>
                </div>
               <div className="container-fluid">
                    <div className="row ">
                        <div className="col-sm fixed-width">
                        <h3 className="text-primary mb-4">USERS</h3>
                            <TopUsers />
                        </div>
                        <div className="col-sm fixed-width">
                            <h3 className="text-primary mb-4">LATEST QUESTIONS</h3>
                            <LatestQuestions />
                        </div>
                        <div className="col-sm fixed-width">
                        <h3 className="text-primary mb-4">HOT QUESTIONS</h3>
                            <HotQuestions />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}