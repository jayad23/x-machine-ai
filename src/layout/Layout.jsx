import React, { Fragment, useState } from 'react'
import Welcome from '../components/welcome/Welcome'
import { useMachine } from '@xstate/react'
import { bookings } from '../machines/bookings'
import style from "./styles.module.css"
import Search from '../components/search/Search'
import Tickets from '../components/tickets/Tickets'
import Passengers from '../components/passengers/Passengers'
import Success from '../components/success/Success'
import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import { IoReturnUpBack } from 'react-icons/io5'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useGetHandlenames, useHandleNextSteps, useGetTitle } from '../hooks/useHandlenames'

const Layout = () => {
    const [state, send] = useMachine(bookings)
    const [destination, setDestination] = useState(null);
    const [dates, setDates] = useState(null)
    const { namesOfPassengers, handleNames } = useGetHandlenames();
    const { handleNextStep, handleBack } = useHandleNextSteps(state, send,
        destination, namesOfPassengers, dates);
    const { RenderTitle, titleFlex } = useGetTitle(state)

    const RenderComponent = () => {
        if (state.matches("search")) return <Search
            setSearch={setDestination}
            countries={state.context.countries}
        />
        if (state.matches("tickets")) return <Tickets setDates={setDates} />
        if (state.matches("passengers")) return <Passengers handleNames={handleNames} />
        if (state.matches("success")) return <Success state={state} />

        return null;
    }

    const renderText = () => {
        if (destination)
        {
            const searchDestination = `You have chosen ${ destination } as your destination.`
            return searchDestination;
        }
    }

    return (
        <div className={style['containerDiv']}>
            <ToastContainer />
            {
                state.matches("start") ? (
                    <Welcome send={send} />
                ) : (
                    <Row>
                        <Col sm="12">
                            <Card className={style['containerGlass']}>
                                <div className='p-3'>
                                    <div className={titleFlex}>
                                        <CardTitle tag="h5">
                                            {RenderTitle()}
                                        </CardTitle>
                                        {
                                            state.matches("search") || state.matches("success") ?
                                                null :
                                                <IoReturnUpBack
                                                    onClick={handleBack}
                                                    className="font-weight-bold"
                                                    size={26}
                                                    color="#3F1651"
                                                    style={{ cursor: "pointer", marginLeft: "15px" }}
                                                />
                                        }
                                    </div>
                                    {RenderComponent()}
                                    <CardText>
                                        {renderText()}
                                    </CardText>
                                    <Button
                                        onClick={handleNextStep}
                                        className='w-100'
                                        style={state.matches("success") ?
                                            { backgroundColor: "#1c5116" } :
                                            { backgroundColor: "#3F1651" }}
                                    >
                                        {state.matches("success") ? "PURCHASE COMPLETE" : "CONTINUE"}
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                )
            }
        </div>
    )
}

export default Layout