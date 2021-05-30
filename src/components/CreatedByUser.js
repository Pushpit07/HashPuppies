import React, { Component, Fragment } from 'react';

class CreatedByUser extends Component {

    render() {
        return (
            <div className="container-fluid mt-4" style={{ maxWidth: '1200px' }}>
                <div className="row">
                    <main role="main" className="col-lg-12 d-flex">
                        <div className="content">
                            <h2>Created by me</h2>
                        </div>
                    </main>
                </div>
                <div className="row mb-5 mt-5">
                    {this.props.puppies.map((puppy, key) => {
                        return (
                            <Fragment>
                                {
                                    !puppy.purchased && puppy.owner == this.props.account ?
                                        <div className="col-12 col-md-6 col-lg-4 mb-5 mt-3" key={key}>

                                            <div className="card border-light shadow-soft">
                                                <div className="card-header pt-4 text-center">
                                                    {puppy.exclusive ? <button className="btn exclusive_btn"><b>EXCLUSIVE</b></button> : null}
                                                    <a href={`https://ipfs.infura.io/ipfs/${puppy.imgHash}`} target="_blank" data-toggle="tooltip" data-placement="bottom" title="Click to maximize">
                                                        <img src={`https://ipfs.infura.io/ipfs/${puppy.imgHash}`} className="image card-img-top rounded" />
                                                    </a>
                                                </div>
                                                <div className="card-body pt-2">
                                                    <div className="row align-items-center justify-content-center">
                                                        <h3 className="h5 card-title mt-4">{puppy.name}</h3>
                                                    </div>
                                                    <div className="card-text">
                                                        <div className="container-fluid mt-3 offset-1" >
                                                            <div className="row">
                                                                <div className="offset-1 col-5">
                                                                    ID :
													            </div>
                                                                <div className="col-6">
                                                                    {puppy.id.toString()}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="offset-1 col-5">
                                                                    Price :
													            </div>
                                                                <div className="col-6">
                                                                    {window.web3.utils.fromWei(puppy.price.toString(), 'Ether')}  ETH
													            </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="offset-1 col-5">
                                                                    Exclusive :
													            </div>
                                                                <div className="col-6">
                                                                    {puppy.exclusive ? <i className="far fa-check-circle exclusive"></i> : <i className="far fa-times-circle not_exclusive"></i>}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="offset-1 col-5">
                                                                    Fullscreen :
													            </div>
                                                                <div className="col-6">
                                                                    <a href={`https://ipfs.infura.io/ipfs/${puppy.imgHash}`} target="_blank" className="darker_grey"><u>View large</u></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        : null
                                }
                            </Fragment>
                        )
                    })}
                </div>
            </div >
        );
    }
}

export default CreatedByUser;
