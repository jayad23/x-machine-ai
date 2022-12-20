import React, { useState } from 'react'
import Welcome from '../components/welcome/Welcome'
import { useMachine } from '@xstate/react'
import { bookings } from '../machines/bookings'
import style from "./styles.module.css"
import Search from '../components/search/Search'
import Tickets from '../components/tickets/Tickets'
import Passengers from '../components/passengers/Passengers'
import Success from '../components/success/Success'
import { Row, Col, Card, CardText } from 'reactstrap'
import { Box, Button, Typography } from '@mui/material'
import { IoReturnUpBack } from 'react-icons/io5'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useGetHandlenames, useHandleNextSteps, useGetTitle } from '../hooks/useHandlenames'

const Layout = () => {
    const [state, send] = useMachine(bookings)
    const [destination, setDestination] = useState(null);
    const [dates, setDates] = useState(null)
    const { namesOfPassengers, handleNames } = useGetHandlenames();
    const { handleNextStep, handleBack } = useHandleNextSteps(state, send,
        destination, namesOfPassengers, dates);
    const { RenderTitle } = useGetTitle(state)

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
        if (destination) {
            const searchDestination = `You have chosen ${destination} as your destination.`
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
                                    <Box component="div" sx={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant="h5" component="div" color="secondary" sx={{ fontWeight: "bolder" }}>{RenderTitle()}</Typography>
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
                                    </Box>
                                    {RenderComponent()}
                                    <Typography variant="subtitle1" component="div" color="black" sx={{ fontWeight: "bolder", marginTop: "10px" }}>{renderText()}</Typography>
                                    <Button onClick={handleNextStep} variant="contained" color="secondary" size="large" sx={{ marginTop: "10px" }}>
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