import React, { Component } from 'react';

class CreatePup extends Component {

    render() {
        return (
            <div className="container-fluid mt-2">
                <div className="row">
                    <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '700px' }}>
                        <h1 className="mt-4">Create Pup</h1>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            const name = this.puppyName.value;
                            const price = this.puppyPrice.value;

                            var exclusive;
                            if (document.getElementById('exclusive').checked)
                                exclusive = true;
                            else
                                exclusive = false;

                            this.props.createPuppy(name, price, exclusive);
                        }}>
                            <input type="text" className="form-control mb-2" placeholder="Enter Pup's name" className="form-control input_box shadow-sm mt-4 mb-3" ref={(name) => { this.puppyName = name }} required />
                            <input type="text" className="form-control mb-2" placeholder="Enter price in ETH" className="form-control input_box shadow-sm mt-4 mb-3" ref={(price) => { this.puppyPrice = price }} required />
                            <input type="checkbox" id="exclusive" ref={(exclusive) => { this.puppyExclusive = exclusive }} />
                            <label>&nbsp;&nbsp; Exclusive</label><br />
                            <input type="file" accept=".jpg, .jpeg, .png, .bmp, .gif, .mp4, .mkv, .ogg, .wmv" onChange={this.props.captureFile} className="upload mb-5 shadow" />
                            <input type="submit" className="btn btn-primary btn-block m-auto share_button shadow-sm" style={{ maxWidth: '200px' }} value="Create" />
                        </form>
                    </main>
                </div>
            </div >
        );
    }
}

export default CreatePup;
