import React, {Fragment} from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const countpost = [
    { count: '299', prefix: '+', title: 'Project Done' },
    { count: '177', prefix: '+', title: 'Active Client' },
    { count: '5', prefix: 'K+', title: 'Drink Coffee' },
    { count: '69', prefix: 'K+', title: 'Award winning' },
];

export default function Counter() {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="container">
            <div className="counter-inner">
                <div className="row">
                    {countpost.map((item, i) => (
                        <div className="col-lg-3 col-md-3 col-6" key={i}>
                            <div className="counter-box">
                                <h1>
                                    <CountUp start={focus ? 0 : null} end={parseInt(item.count)} duration={5} redraw={true}>
                                        {({ countUpRef }) => (
                                            <Fragment>
                                                <span className="counter" ref={countUpRef} />
                                                <VisibilitySensor
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setFocus(true);
                                                        }
                                                    }}
                                                >
                                                    <span>{item.prefix}</span>
                                                </VisibilitySensor>
                                            </Fragment>
                                        )}
                                    </CountUp>
                                </h1>
                                <p className="title">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <span className="big-text">
                    SolarHub
                    </span>
            </div>
        </div>
    );
}
