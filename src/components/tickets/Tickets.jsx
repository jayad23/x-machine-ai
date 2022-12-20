import React, { Fragment, useState } from 'react'
import Calendar from 'react-calendar';
import { Col, Row, } from 'reactstrap'
import 'react-calendar/dist/Calendar.css';

const currentDate = new Date();
const getTomorrow = (chosenDate) => {
    const tmrw = chosenDate.setDate(chosenDate.getDate() + 1);
    const tomorrow = new Date(tmrw)
    return tomorrow;
}

const Tickets = ({ setDates }) => {
    const [from, setFrom] = useState(currentDate)
    const [to, setTo] = useState(null);

    const onChangeTimeFrom = (e) => {
        setFrom(e)
        setTo(getTomorrow(e))
    }

    const onChangeTimeTo = (e) => {
        setTo(e)
        setDates([from, e])
    }
    return (
        <Fragment>
            <div>
                <Calendar
                    minDate={new Date()}
                    style={{ width: "100%" }}
                    onChange={onChangeTimeFrom}
                    value={from}
                />
                <Calendar
                    disabled={true}
                    minDate={to}
                    style={{ width: "100%" }}
                    onChange={onChangeTimeTo}
                    value={to}
                />
            </div>
        </Fragment>
    )
}

export default Tickets