import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import '../portfolioCreate/PortfolioCreate.css'

class PortfolioCreate extends Component {
    render() {
        return (
            <Row className="portfolio-create">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h3>Portföy Bulunmamaktadır!</h3>
                <p>Portföy eklemek için, portföy oluştur butonuna tıklayarak, portföy ekleme ekranına ulaşabilirsiniz.</p>
                <Link to="portfolioDetail"><Button>Portföyü Oluştur</Button></Link>
            </Col>
            </Row>
        );
    }
}

export default PortfolioCreate;
