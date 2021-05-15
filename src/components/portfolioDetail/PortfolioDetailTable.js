import React, { Component } from 'react'
import { Table, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaUndo, FaArrowRight } from 'react-icons/fa';

class PortfolioDetailTable extends Component {

  render() {
    return (
      <div className="portfolio-detail-table">
        <Table>
          <thead>
            <tr>
              <th>Gün</th>
              <th>Saat</th>
              <th>Eğitim Yönetimi</th>
            </tr>
          </thead>
          <tbody>
            {this.props.deger.list.map(item => (
              <tr className="core-item" id={item.id} key={item.id}>
                <td className="value"><p>{item.gun}</p></td>
                <td className="value"><p>{item.saat}</p></td>
                <td className="value"><p className="education-name">{item.egitimYöntemi} </p></td>
                <td className={!item.active ? 'passive-btn-wrapper d-none' : 'passive-btn-wrapper'} ><Button className="passive-button" onClick={(e) => this.props.passiveEducation(item, e.target)}>x</Button></td>
                <td className={item.active ? 'active-btn-wrapper d-none' : 'active-btn-wrapper'}><Button className="active-button" onClick={(e) => this.props.activeEducation(item, e.target)}><FaUndo /></Button> </td>
              </tr>
            ))
            }
          </tbody>
        </Table>
        <Row className='mt-5 col-12'>
          <Link to='/portfolioResult'>
            <Button className='next'>Sonraki Adım<FaArrowRight /></Button>
          </Link>
        </Row>
        </div>
    )
  }
}
export default PortfolioDetailTable;