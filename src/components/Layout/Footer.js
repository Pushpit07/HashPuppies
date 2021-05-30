import React, { Fragment } from 'react';
import '../styles/footer.css';
import '../styles/navbar.css';

function Footer() {
    return (
        <Fragment>
            <div className="footer_container">
                <div className="footer_box">

                    <div className="row">
                        <div className="horizontal_lines_small_screen col-12 mb-2"></div>
                        <div className="col-md-2 col-12 footer_section">Get into the PuppyVerse</div>
                        <div className="horizontal_lines_small_screen col-12 mt-2"></div>
                        <div className="offset-md-0 col-md-10 col-12 footer_heading margin_small10">PUPS</div>
                    </div>

                    <div className="row margin6">
                        <a href="#" className="filer_items offset-md-2 col-md-2 col-12 hover_effect hover_effect_row" disabled><div className="margin_small6">Latest Pups</div></a>
                        <a href="/" className="filer_items col-md-4 col-12 hover_effect hover_effect_row"><div className="margin_small6">Pups Searching</div></a>
                    </div>

                    <div className="row">
                        <a href="#" className="filer_items offset-md-2 col-md-2 col-12 hover_effect hover_effect_row" disabled><div className="margin_small6">Popular Pups</div></a>
                        <a href="#" className="filer_items col-md-4 col-12 hover_effect hover_effect_row" disabled><div className="margin_small6">Pups Performance Search</div></a>
                    </div>

                    <div className="row">
                        <a href="#" className="filer_items offset-md-2 col-md-2 col-12 hover_effect hover_effect_row" disabled><div className="margin_small6">Pups Trends</div></a>
                        <a href="#" className="filer_items col-md-4 col-12 hover_effect hover_effect_row" disabled><div className="margin_small6">Pups Screener</div></a>
                    </div>

                    <div className="row">
                        <a href="#" className="filer_items offset-md-2 col-md-3 col-12 hover_effect hover_effect_row" disabled><div className="margin_small6">Pups Statistics</div></a>
                    </div>


                    <div className="row">
                        <div className="horizontal_line margin10 offset-md-2 col-md-10 col-12 mb-2"></div>
                    </div>


                    <div className="quick_links">
                        <div className="row">
                            <div className="footer_heading offset-2 col-2">Help</div>
                            <div className="footer_heading col-2">Collaborate</div>
                            <div className="footer_heading col-2">Connect</div>
                            <div className="footer_heading col-2">Explore</div>
                        </div>

                        <div className="row hover_effect_row margin6">
                            <a href="#" className="filer_items offset-2 col-2 hover_effect" disabled><div>Our offerings</div></a>
                            <a href="https://github.com/Pushpit07/HashPuppies" className="filer_items col-2 hover_effect" target="_blank"><div>GitHub Repo</div></a>
                            <a href="https://www.linkedin.com/in/pushpit-bhardwaj/" className="filer_items col-2 hover_effect" target="_blank"><div>Mastermind #1</div></a>
                            <a href="#" className="filer_items col-2 hover_effect" disabled><div>Email Newsletter</div></a>
                        </div>

                        <div className="row hover_effect_row">
                            <a href="#" className="filer_items offset-2 col-2 hover_effect" disabled><div>HashPuppies work?</div></a>
                            <a href="#" className="filer_items col-2 hover_effect" disabled><div>Resources</div></a>
                            <a href="https://www.linkedin.com/in/aayushi-bhardwaj-30a0141b0/" className="filer_items col-2 hover_effect" target="_blank"><div></div>Mastermind #2</a>
                            <a href="#" className="filer_items col-2 hover_effect" disabled><div>Upcoming events</div></a>
                        </div>

                        <div className="row hover_effect_row">
                            <a href="/" className="filer_items offset-2 col-2 hover_effect"><div>Getting started</div></a>
                            <a href="#" className="filer_items col-2 hover_effect" disabled><div></div></a>
                            <a href="https://github.com/Pushpit07/HashPuppies" className="filer_items col-2 hover_effect" target="_blank"><div>Report a Bug</div></a>
                            <a href="/create" className="filer_items col-2 hover_effect"><div>Create a Pup</div></a>
                        </div>

                        <div className="row hover_effect_row">
                            <a href="/faq" className="filer_items offset-2 col-2 hover_effect" disabled><div>FAQs</div></a>
                            <a href="#" className="filer_items col-2 hover_effect"><div></div></a>
                            <a href="#" className="filer_items col-2 hover_effect"><div></div></a>
                            <a href="#" className="filer_items col-2 hover_effect"><div></div></a>
                        </div>
                    </div>

                    <div className="quick_links_small_screen">
                        <div className="row">
                            <div className="col-12 footer_section">Quick links</div>
                        </div>
                        <div className="row">
                            <div className="horizontal_lines_small_screen col-12 mt-2 horizontal_lines_small_screen_to_right"></div>
                        </div>

                        <div className="row margin_small10">
                            <div className="footer_heading col-6">Help</div>
                            <div className="footer_heading col-6">Connect</div>
                        </div>

                        <div className="row margin_small6">
                            <a href="#" className="filer_items col-6 hover_effect" disabled><div>Our offerings</div></a>
                            <a href="https://www.linkedin.com/in/pushpit-bhardwaj/" className="filer_items col-6 hover_effect" target="_blank"><div>Mastermind #1</div></a>
                        </div>

                        <div className="row margin_small3">
                            <a href="#" className="filer_items col-6 hover_effect" disabled><div>How HashPuppies work?</div></a>
                            <a href="https://www.linkedin.com/in/aayushi-bhardwaj-30a0141b0/" className="filer_items col-6 hover_effect" target="_blank"><div></div>Mastermind #2</a>
                        </div>

                        <div className="row margin_small3">
                            <a href="/" className="filer_items col-6 hover_effect"><div>Getting started</div></a>
                            <a href="https://github.com/Pushpit07/HashPuppies" className="filer_items col-6 hover_effect"><div>Report a Bug</div></a>
                        </div>

                        <div className="row margin_small3">
                            <a href="/faq" className="filer_items col-6 hover_effect"><div>FAQ</div></a>
                        </div>


                        <div className="row margin_small10">
                            <div className="footer_heading col-6" disabled>Collaborate</div>
                            <div className="footer_heading col-6" disabled>Explore</div>
                        </div>

                        <div className="row margin_small6">
                            <a href="https://github.com/Pushpit07/HashPuppies" className="filer_items col-6 hover_effect" target="_blank"><div>GitHub Repo</div></a>
                            <a href="#" className="filer_items col-6 hover_effect" disabled><div>Email Newsletter</div></a>
                        </div>

                        <div className="row margin_small3">
                            <a href="#" className="filer_items col-6 hover_effect" disabled><div>Resources</div></a>
                            <a href="#" className="filer_items col-6 hover_effect" disabled><div>Upcoming events</div></a>
                        </div>



                        <div className="row margin_small10">
                            <div className="footer_heading col-6">Social Media</div>
                        </div>

                        <div className="row margin_small6">
                            <a href="#" className="filer_items col-6 hover_effect" disabled><div>Twitter</div></a>
                        </div>

                        <div className="row margin_small3">
                            <a href="#" className="filer_items col-6 hover_effect" disabled><div>Instagram</div></a>
                        </div>

                        <div className="row margin_small3">
                            <a href="#" className="filer_items col-6 hover_effect" disabled><div>Facebook</div></a>
                        </div>

                        <div className="row margin_small3">
                            <a href="#" className="filer_items col-6 hover_effect" disabled><div>LinkedIn</div></a>
                        </div>

                        <div className="row margin_small10">
                            <div className="horizontal_lines_small_screen col-12"></div>
                        </div>
                    </div>



                    <div className="row closing_row">
                        <div className="closing_headings offset-md-2 col-md-2 col-4">Disclaimer</div>
                        <div className="closing_headings col-md-2 col-2">Trademarks</div>
                        <div className="closing_headings offset-md-0 col-md-4 offset-1 col-5">Privacy Policy</div>
                        <div className="col-1 stamp_div">
                            <i className="fas fa-paw mr-2 ml-1 cursor_ptr hashpuppies fa-10x"></i>
                        </div>
                    </div>

                    <div className="row closing_content margin3 margin_small10">
                        <div className="offset-md-2 col-md-6 col-12">HashPuppies™ is a registered trademark of HashPuppies Technologies Inc.
                            <div className="row stamp_small_div">
                                <br />
                                <i className="fas fa-paw mr-2 ml-1 cursor_ptr hashpuppies fa-10x"></i>
                            </div>
                            <div className="margin3 margin_small6">COPYRIGHT- all text and design. COPYRIGHT ©HashPuppies Technologies Inc. <br /> 2021- All Rights Reserved</div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default Footer;