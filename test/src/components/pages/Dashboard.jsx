import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { MdArrowOutward } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className='w-100' style={{ background: 'green' }}>
            <Row className='mt-2 me-1 ms-1'>
                <Col lg={3} md={6} className=''>
                    <Card className='h-100'>
                        <CardHeader>
                            <div className='d-flex justify-content-between'>
                                <h6 className='mb-0 text-black fw-bold mt-1'>Total Projects</h6>
                                <div className=''><MdArrowOutward className='border-3 rounded-circle p-1 fw-bold' style={{backgroundColor: 'gray', color:'black'}} size={25}/></div>
                            </div>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg={3} md={6} className=''>
                    <Card className='h-100'>
                        <CardHeader>Ended projects: </CardHeader>
                    </Card>
                </Col>
                <Col lg={3} md={6} className=''>
                    <Card className='h-100'>
                        <CardHeader>Running Projects: </CardHeader>
                    </Card>
                </Col>
                <Col lg={3} md={6} className=''>
                    <Card className='h-100'>
                        <CardHeader>Pending Projects: </CardHeader>
                    </Card>
                </Col>
            </Row>


        </div>
    )
}

export default Dashboard