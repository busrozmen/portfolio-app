import React, { Component } from 'react';
import { InputGroupText, Input, Label, Form, FormGroup, Button} from 'reactstrap'
import { Link } from 'react-router-dom';
import '../portfolioDetail/PortfolioDetail.css'
import { FaArrowRight } from 'react-icons/fa';

class PortfolioDetail extends Component { 

    render() {
        return (
          <Form className="portfolio-detail">
                <h3>Portföy Detayı</h3>
                <FormGroup>
                <Label className="input-title">Portföy Tipi</Label>
                  <InputGroupText>
                      <Input type="radio" id="münferit" name="portflio-type"  defaultValue="münferit" onChange={(e)=>this.props.onTypeChanged(e,'showInfo')} />
                      <Label htmlFor='münferit'>Münferit</Label>
                  </InputGroupText>
                  <InputGroupText>
                    <Input type="radio" id="diploma" name="portflio-type" defaultValue="diploma" onChange={(e)=>this.props.onTypeChanged(e,'showInfo')}/>
                    <Label htmlFor='diploma'>Diploma</Label>
                    </InputGroupText>
                </FormGroup>
                <FormGroup>                    
                    <Label className="input-title">Diploma / Eğitim Adı</Label>
                    <Input type="select" name="select" onChange={(e)=>this.props.onTypeChanged(e,'diplomaAdi')}>
                        <option defaultValue="KREDİ OPERASYONLARI DİPLOMASI">KREDİ OPERASYONLARI DİPLOMASI</option>
                        <option value="TİCARİ KREDİ MEVZUATI">TİCARİ KREDİ MEVZUATI</option>
                        <option value="BİREYSEL KREDİ MEVZUATI VE OPERASYONU">BİREYSEL KREDİ MEVZUATI VE OPERASYONU</option>
                        <option value="OPERASYONEL RİSK VE VERİMLİLİK">OPERASYONEL RİSK VE VERİMLİLİK</option>
                        <option value="TİCARİ KREDİ OPERASYON SÜRECİ">TİCARİ KREDİ OPERASYON SÜRECİ</option>
                    </Input>                
                </FormGroup>

                <FormGroup style={{ display: this.props.detail.showInfo ? "block" : "none" }}>
                    <Label className="input-title">Grup Adı</Label>
                    <Input type="text" onInput={(e)=>this.props.onTypeChanged(e,'groupName')} />
                </FormGroup>

                <FormGroup style={{ display: this.props.detail.showInfo ? "block" : "none" }}>
                    <Label className="input-title">Proje Konusu</Label>
                    <Input type="text" onInput={(e)=>this.props.onTypeChanged(e,'projectSubject')}/>
                </FormGroup>

                <FormGroup style={{ display: this.props.detail.showInfo ? "block" : "none" }}>                    
                    <Label className="input-title">Portföy Yöneticisi</Label>
                    <Input type="select" name="select" onChange={(e)=>this.props.onTypeChanged(e,'author')}>
                        <option defaultValue="Büşra Özmen">Büşra Özmen</option>
                        <option value="Ayşe">Ayşe</option>
                        <option value="Ali">Ali</option>
                        <option value="Ahmet">Ahmet</option>
                    </Input>                
                </FormGroup>
                
                <FormGroup>
                    <Link to='/portfolioDetailTable'>
                        <Button className='next'>Sonraki Adım<FaArrowRight /></Button>
                    </Link>
                </FormGroup>
                </Form>
        );
    }
}

export default PortfolioDetail;
