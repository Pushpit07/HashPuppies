import React, { Component } from 'react';

class HeroSection extends Component {

    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row pt-3">
                    <main role="main" className="col-lg-12 d-flex text-center mt-5">
                        <div className="content mr-auto ml-auto mt-4">
                            <h1>Hash Puppies</h1>
                            <p className="pb-4">
                                <code className="purple_text">Collectible PUPS</code>&nbsp; to  &nbsp;<code className="purple_text">HODL</code>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default HeroSection;