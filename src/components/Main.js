import React, { Component } from 'react';

class Main extends Component {

	render() {
		return (
			<div className="container-fluid mt-5" style={{ maxWidth: '1200px' }}>
				<div class="row mb-5 mt-5">
					{this.props.puppies.map((puppy, key) => {
						return (
							<div class="col-12 col-md-6 col-lg-4 mb-5 mt-3">
								<div class="card border-light shadow-soft" key={key}>
									<div class="card-header pt-4 text-center">
										<a href={`https://ipfs.infura.io/ipfs/${puppy.imgHash}`} target="_blank" data-toggle="tooltip" data-placement="bottom" title="Click to maximize">
											<img src={`https://ipfs.infura.io/ipfs/${puppy.imgHash}`} className="image card-img-top rounded" />
										</a>
									</div>
									<div class="card-body pt-2">
										<div class="row align-items-center justify-content-center">
											<h3 class="h5 card-title mt-4">{puppy.name}</h3>
										</div>
										<p class="card-text">
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
														{puppy.price.toString()}  ETH
													</div>
												</div>
												<div className="row">
													<div className="offset-1 col-5">
														Exclusive :
													</div>
													<div className="col-6">
														{puppy.exclusive ? <i class="far fa-check-circle exclusive"></i> : <i class="far fa-times-circle not_exclusive"></i>}
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
											{!puppy.purchased
												?
												<div class="row align-items-center justify-content-center">
													< button
														name={puppy.id}
														value={puppy.price}
														onClick={(event) => {
															this.props.purchasePuppy(event.target.name, window.web3.utils.toWei(event.target.value, 'Ether'));
														}}
														className="buyButton btn mt-5"
													>
														Purchase
                                            		</button>
												</div>
												: <div className="container-fluid mt-5" >
													<div className="row mt-3 align-items-center justify-content-center">
														<div className="col-2 owner">
															Owner
														</div>
														<div className="col-12 owner_address darker_grey text-center">
															{puppy.owner}
														</div>
													</div>
												</div>
											}
											<br />
											<br />
										</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div >
		);
	}
}

export default Main;
