import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Footer2(){
    return (
        <>
        <div style={{ bottom:0}}>
        <main className="flex-name-shrink-0" style={{backgroundColor:"#66b3ff", height:"200px", paddingTop:"25px"}}>
            <Container>
                <Row>
                    <Col xs={3}>
                    <h4>GET IN TOUCH</h4>
                   <h5>Email</h5> 
                   <h5>Email</h5>
                   <h5>Email</h5>
                    </Col>
                    <Col xs={3}>
                    <h4>QUICK LINKS</h4>
                    </Col>
                    <Col xs={3}>
                    <h4>CONTACT US</h4>
                    </Col>

                </Row>
                
            </Container>

        </main>

        <div style={{backgroundColor:"#004080", height:"50px", textAlign:"center", color:"white", padding:"10px"}}>
        <footer >
            Copyright @ Zalego,Inc 2020
        </footer>
        </div>

        </div>

        
        </>
    );
}