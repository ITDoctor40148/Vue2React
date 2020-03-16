import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Container, Card, InputGroup, FormControl } from "react-bootstrap";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Fonts from "@fortawesome/free-solid-svg-icons";
// import LoadingOverlay from 'react-loading-overlay';
// import { search } from '@fortawesome/free-solid-svg-icons';

import _ from "lodash";

import Footer from "./Footer";
import SearchResult from "./SearchResult";
// import Loading from "./Loader";

import {
  toggleEbay,
  toggleAliexpress,
  setThingsName,
  setProductTitle,
  setResultData,
  setSliderMaxValue,
  setResponseFlag2,
  setResponseFlag1,
  setResponseFlag,
  setCheckLimit,
  setCurrentPage
} from "../store/actions/home";

import "../assets/css/helloworld.css";

import logo from "../assets/images/logo.png";
import ebay from "../assets/images/ebay.png";
import aliexpress from "../assets/images/aliexpress.png";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     flag: true,
  //     things_name: "",
  //     output: "",
  //     result_data: {},
  //     response_flag: false,
  //     response_flag1: false,
  //     slider_min_value: 0,
  //     slider_max_value: 100,
  //     current_page_num: 1,
  //     pagenation_num: 1,
  //     firstpage_num: 0,
  //     value_ebay: true,
  //     value_aliexpress: true,
  //     check_limit: false,
  //     product_titles: []
  //   };
  // }
  ChangeEbay() {
    this.props.toggleEbay();
  }

  ChangeAliexpress() {
    this.props.toggleAliExpress();
  }
  getMaxPrice() {
    let maxPrice = 0;
    this.props.result_data.products.forEach(value => {
      if (value.price > maxPrice) maxPrice = value.price;
    });
    return maxPrice;
  }
  changeValue(e) {
    console.log(e.target.value);
    this.props.setThingsName(e.target.value);
  }
  formSubmitEvent() {
    this.formSubmit();
  }
  fetchingDatasFromServer(data, headers) {
    
    axios.post( "https://cors-anywhere.herokuapp.com/https://deals1.gooddealsfinder.com/search", data, { headers: headers } )
      .then(response => {
        this.props.setFlag(false);
        let tmp = _.uniqBy(response.data.products, 'title');
        // let tmp = response.data.products.filter(value => {
          // return this.props.product_titles.indexOf(value.title) < 0;
          // if (this.props.product_titles.indexOf(value.title) < 0) {
          //   this.props.setProductTitle(value.title);
          //   this.props.setResultData(value);
          // }
          // return 1;
        // });
        this.props.setResultData(tmp);
        this.props.setProductTitle(tmp.map(data => data.title));
        this.props.setResponseFlag(false);
        this.props.setResponseFlag1(true);
        this.props.setResponseFlag2(true);
        this.props.setSliderMaxValue(this.getMaxPrice());
        data.page_num = this.current_page_num;
      })
      .catch(function(error) {
        console.error(error);
      });
  }
  formSubmit() {
    this.props.setFlag(true);
    this.props.setCheckLimit(false);
    this.props.setCurrentPage(1);
    this.props.setResponseFlag(false);
    this.props.setResponseFlag1(false);
    // let currentObj = this;

    const headers = {
      "Content-Type": "application/json"
    };
    let data = {
      search_keyword: this.props.things_name,
      websites: [],
      page_num: this.props.current_page_num
    };
    if (this.props.value_aliexpress) {
      data.websites.push("aliexpress");
    }
    if (this.props.value_ebay) {
      data.websites.push("ebay");
    }
    this.fetchingDatasFromServer(data, headers);
  }

  update_result() {
    this.props.setCurrentPage(this.props.current_page_num + 1);
    console.log(this.props.current_page_num);
    const headers = {
      "Content-Type": "application/json"
    };
    let data = {
      search_keyword: this.props.things_name,
      websites: [],
      page_num: this.props.current_page_num
    };
    if (this.props.value_aliexpress) {
      data.websites.push("aliexpress");
    }
    if (this.props.value_ebay) {
      data.websites.push("ebay");
    }
    console.log(data);
    this.fetchingDatasFromServer(data, headers);
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <div style={{ marginTop: "60px" }}>
          <div className="back_image">
            <img
              src={logo}
              width="194px"
              alt="theLastPrice.com.ng"
              className="logo"
            />
          </div>
          <Container>
            <div>
              <div className="card">
                <Card>
                  <div className="read">
                    <div className="header">
                      <span>Search in</span>
                    </div>
                    <div className="tag">
                      <div className="ebay-tag">
                        <div>
                          <img
                            alt="ebay"
                            src={ebay}
                            className="logo_mark mark_ebay"
                          />
                        </div>
                        <div style={{ display: "inline-flex" }}>
                          <Switch
                            height={22}
                            width={45}
                            onChange={() => this.ChangeEbay()}
                            checked={this.props.value_ebay}
                            onColor="#409eff"
                          />
                          <span
                            onClick={() => this.ChangeEbay()}
                            style={{
                              color:
                                this.props.value_ebay === true
                                  ? "#409eff"
                                  : "black"
                            }}
                            className="span-switch"
                          >
                            {" eBay"}
                          </span>
                        </div>
                      </div>
                      <div className="ali-tag">
                        <div>
                          <img
                            src={aliexpress}
                            alt="aliexpress"
                            className="logo_mark mark_aliexpress"
                          />
                        </div>

                        <div style={{ display: "inline-flex" }}>
                          <Switch
                            height={22}
                            width={45}
                            checked={this.props.value_aliexpress}
                            onChange={() => this.ChangeAliexpress()}
                            onColor="#409eff"
                          />
                          <span
                            onClick={() => this.ChangeAliexpress()}
                            style={{
                              color:
                                this.props.value_aliexpress === true
                                  ? "#409eff"
                                  : "black"
                            }}
                            className="span-switch"
                          >
                            {" Aliexpress"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <InputGroup className="">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">
                        <FontAwesomeIcon
                          icon={Fonts.faSearch}
                          size="lg"
                          className=""
                          style={{ color: "#dcd7d7" }}
                        />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Please Input"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={e => this.changeValue(e)}
                      onKeyPress={e => {
                        if (e.key === "Enter") {
                          this.formSubmitEvent();
                        }
                      }}
                    />
                    <InputGroup.Append>
                      <div
                        variant="outline-secondary"
                        onClick={() => this.formSubmitEvent()}
                      >
                        Go
                      </div>
                    </InputGroup.Append>
                  </InputGroup>
                </Card>
              </div>
            </div>
          </Container>
        </div>
        {this.props.response_flag1 && (
          <SearchResult
            maxPrice={() => this.getMaxPrice(this)}
            update_result={() => this.update_result(this)}
          />
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value_ebay: state.home.value_ebay,
    value_aliexpress: state.home.value_aliexpress,
    things_name: state.home.things_name,
    product_titles: state.home.product_titles,
    result_data: state.home.result_data,
    slider_max_value: state.home.slider_max_value,
    response_flag: state.home.response_flag,
    response_flag1: state.home.response_flag1,
    current_page_num: state.home.current_page_num
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleEbay: () => dispatch(toggleEbay()),
    toggleAliExpress: () => dispatch(toggleAliexpress()),
    setThingsName: data => dispatch(setThingsName(data)),
    setProductTitle: data => dispatch(setProductTitle(data)),
    setResultData: data => dispatch(setResultData(data)),
    setSliderMaxValue: data => dispatch(setSliderMaxValue(data)),
    setResponseFlag2: data => dispatch(setResponseFlag2(data)),
    setResponseFlag1: data => dispatch(setResponseFlag1(data)),
    setResponseFlag: data => dispatch(setResponseFlag(data)),
    setCheckLimit: data => dispatch(setCheckLimit(data)),
    setCurrentPage: data => dispatch(setCurrentPage(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
