import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PortfolioCreate from './components/portfolioCreate/PortfolioCreate';
import PortfolioDetail from './components/portfolioDetail/PortfolioDetail';
import PortfolioDetailTable from './components/portfolioDetail/PortfolioDetailTable';
import PortfolioResult from './components/portfolioResult/PortfolioResult';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  state = {
    list: [
      {
        id: "1",
        gun: "1",
        saat: "7",
        egitimYöntemi: "Ticari Kredi Mevzuatı - Giriş",
        active: true
      },
      {
        id: "2",
        gun: "1",
        saat: "8.5",
        egitimYöntemi: "Bireysel Kredi Mevzuatı ve Operasyonu / Sınıf İçi",
        active: true
      },
      {
        id: "3",
        gun: "1",
        saat: "7",
        egitimYöntemi: "Operasyonel Risk ve Verimlilik",
        active: true
      },
      {
        id: "4",
        gun: "0.5",
        saat: "4",
        egitimYöntemi: "Ticari Kredi Operasyon Süreci / Sınıf İçi",
        active: true
      },
      {
        id: "5",
        gun: "-",
        saat: "-",
        egitimYöntemi: "Farklılık Raporu / E-öğrenme",
        active: true
      },
      {
        id: "6",
        gun: "-",
        saat: "-",
        egitimYöntemi: "Hukuk Giriş / E-öğrenme",
        active: true
      },
      {
        id: "7",
        gun: "1",
        saat: "1",
        egitimYöntemi: "Kredi Operasyonları Diploma Sınavı / Son Sınav",
        active: true
      }
    ],
    detail: {
      portfolioType: 'diploma',
      diplomaAdi: 'KREDİ OPERASYONLARI DİPLOMASI',
      groupName: '',
      projectSubject: '',
      author: 'Büşra Özmen',
      showInfo: true
    }

  }

  onTypeChanged = (e,param) => {
    const newDetail = {...this.state.detail};
    if(param === 'showInfo'){
      newDetail[param]=e.target.value === 'münferit' ? false : true;
    }
    else{
      newDetail[param] = e.target.value;
    }
    this.setState({detail: newDetail});
  }

  passiveEducation = (item, el) => {
    item.active = false;
    el.parentElement.parentElement.querySelectorAll('td.value').forEach(function (td) {
      td.className = 'value disable'
    })
    let newList = this.state.list;
    this.setState({ list: newList })
  }

  activeEducation = (item, el) => {
    item.active = true;
    el.parentElement.parentElement.querySelectorAll('td.value').forEach(function (td) {
      td.className = 'value'
    })
    let newList = this.state.list;
    this.setState({ list: newList })
  }

  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" render={props => (
              <PortfolioCreate
                {...props}
                deger={this.state} />
            )}
            />
            <Route exact path="/portfolioDetail" render={props => (
              <PortfolioDetail
                {...props}
                detail={this.state.detail}
                onTypeChanged={this.onTypeChanged}
              />
            )}
            />

            <Route exact path="/portfolioDetailTable" render={props => (
              <PortfolioDetailTable
                {...props}
                deger={this.state}
                passiveEducation={this.passiveEducation}
                activeEducation={this.activeEducation}
              />
            )}
            />
            <Route exact path="/portfolioResult" render={props => (
              <PortfolioResult
                {...props}
                data={this.state} />
            )}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
