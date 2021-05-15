import React, { Component } from 'react'
import { Table } from 'reactstrap';
import '../portfolioResult/PortfolioResult.css'

class PortfolioResult extends Component {

  render() {

    return (
      <div className="portfolio-result">
        <h3>Portföy Bilgileri</h3>
        <Table striped borderless>
          <thead>
            <tr>
              <th>Portföy Tipi</th>
              <th>Diploma/Eğitim Adı</th>
              <th>Grup Adı</th>
              <th>Proje Konusu</th>
              <th>Proje Yöneticisi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.data.detail.portfolioType}</td>
              <td>{this.props.data.detail.diplomaAdi}</td>
              <td>{this.props.data.detail.groupName}</td>
              <td>{this.props.data.detail.projectSubject}</td>
              <td>{this.props.data.detail.author}</td>
            </tr>
          </tbody>
        </Table>
        <hr />
        <h5>Program</h5>
        <Table striped borderless>
          <thead>
            <tr>
              <th>Eğitim Yöntemi</th>
              <th>Gün</th>
              <th>Saat</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.list.map(item => (
              <tr className={!item.active ? 'd-none' : ''} key={item.id}>
                <td>{item.egitimYöntemi}</td>
                <td>{item.gun}</td>
                <td>{item.saat}</td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>
    )
  }
}
export default PortfolioResult;