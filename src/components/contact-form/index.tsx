import React from "react";
import "./index.scss";
import { FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
    return (
        <div className="ContactForm">
            <div className="ContactForm-wrapper">
                <div className="info">
                    <div className="item">
                        <div className="icon">
                            <FaLocationDot />
                        </div>
                        <div className="content">
                            <div className="title">Address</div>
                            <div className="desc">
                                236 5th SE Avenue, New York NY10000, United
                                States
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <FaLocationDot />
                        </div>
                        <div className="content">
                            <div className="title">Phone</div>
                            <div className="desc">
                                Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <FaLocationDot />
                        </div>
                        <div className="content">
                            <div className="title">Working Time</div>
                            <div className="desc">
                                Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <div className="input">
                        <p>Your name</p>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <p>Email address</p>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <p>Subject</p>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <p>Message</p>
                        <textarea />
                    </div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
