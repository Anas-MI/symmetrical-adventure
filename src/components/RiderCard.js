import React from 'react';
import { Card } from 'antd';

export default function RiderCard(props) {
    const { newsletter, zipcode, email, setNewsletter, setZipcode, setEmail } = props;
    return (
        <Card
            title={<div className="c-card__title">Rider Info</div>}
            bordered={false}
            className="c-card border-0"
        >
            <div className="pb-3">
                <div className="row c-card__input ">
                    <div className="col-6">
                        <input
                            className="c-input"
                            placeholder="Email"
                            name="email"
                            value={email.email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-6">
                        <input
                            name="zipcode"
                            className="c-input"
                            placeholder="Zip Code"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                        />
                    </div>

                    <div className=" col-12 mt-3">
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                id="checkbox"
                                name="checkbox"
                                value="checkbox"
                                checked={newsletter}
                                onClick={() => setNewsletter((value) => !value)}
                            />
                            <label htmlFor="checkbox">
                                <span>subscribe to newsletter</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
