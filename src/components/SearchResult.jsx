import React from "react";
import { connect } from "react-redux";

import _ from "lodash";

import "../assets/css/searchresult.css";
import ReactMarkdown from "react-markdown";
import { Col, Row, Container, Card, Button, Spinner } from "react-bootstrap";

import {
  toggleEbay,
  toggleAliexpress,
  setThingsName,
  setProductTitle,
  setResultData,
  setNewResultData,
  setSliderMaxValue,
  setResponseFlag2,
  setResponseFlag1,
  setResponseFlag
} from "../store/actions/home";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: this.props.maxPrice(),
      activeNames: ["1"],
      checked: false,
      lowPrice: "",
      highPrice: "",
      regex: "/<?[^>]+(>|$)/g<>,",
      response_data: this.props.result_data.products,
      store_data: this.props.result_data.products,
      pageOfItems: [],
      loadMore: false,
      value_ebay: true,
      value_aliexpress: true,
      // props
      maxprice: this.props.slider_max_value,
      data: this.props.result_data.products,
      slider_min: this.props.slider_min_value,
      slider_max: this.props.slider_max_value,
      page_num: this.props.page_num,
      response_flag: this.props.response_flag
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.valueChange1 = this.valueChange1.bind(this);
    this.valueChange2 = this.valueChange2.bind(this);
    this.response_dataChange = this.response_dataChange.bind(this);
  }

  // dddddd
  valueChange1(value2) {
    this.setState({
      minValue: value2
    });
  }

  valueChange2(value2) {
    this.setState({
      maxValue: value2
    });
  }

  response_dataChange() {
    if (this.state.response_data.length === 0) {
      this.setState({ loadMore: false });
    } else {
      this.setState({ loadMore: true });
    }
  }
  /////////
  onChangePage(pageOfItems) {
    this.setState({
      pageOfItems: pageOfItems
    });
  }

  handleScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      this.props.response_flag2
    ) {
      console.log(
        window.innerHeight +
          ":" +
          window.scrollY +
          ":" +
          document.body.offsetHeight
      );
      this.props.setResponseFlag(true);
      this.props.setResponseFlag2(false);
      this.props.update_result();
    }
  }

  FilterResults(min, max) {
    let filteredData1 = [];
    let filteredData2 = [];
    if (this.props.value_aliexpress) {
      filteredData1 = this.props.result_data.products.filter(product => {
        return (
          product.website === "aliexpress" &&
          product.price >= parseFloat(min) &&
          product.price <= parseFloat(max)
        );
      });
    }
    if (this.props.value_ebay) {
      filteredData2 = this.props.result_data.products.filter(product => {
        return (
          product.website === "ebay" &&
          product.price >= parseFloat(min) &&
          product.price <= parseFloat(max)
        );
      });
    }
    return [...filteredData1, ...filteredData2];
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    let datas = this.FilterResults(this.state.minValue, this.state.maxValue);
    return (
      <div>
        <Row style={{ margin: 0 }}>
          <Container>
            <Row>
              <Col sm={3}>
                <Row
                  style={{
                    padding: "0 20px",
                    fontSize: "18px",
                    fontWeight: "bold"
                  }}
                >
                  Price
                </Row>
                <Row style={{ padding: "0 20px" }} className="range-div">
                  <Col sm={6} className="p-0">
                    <input
                      value={this.state.minValue}
                      onChange={e => this.valueChange1(e.target.value)}
                    />
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      $ -
                    </label>
                  </Col>
                  <Col sm={6} className="p-0">
                    <input
                      value={this.state.maxValue}
                      onChange={e => this.valueChange2(e.target.value)}
                    />
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      $
                    </label>
                  </Col>
                </Row>
              </Col>
              <Col sm="9">
                <Row>
                  {datas.map(value => {
                    return (
                      <Col lg="3" md="4" sm="6" key={Math.random() * 1000}>
                        <Card className="card_pad">
                          <Card.Img
                            src={value.thumbnail}
                            className="card_image"
                            variant="top"
                          />
                          {/* <Card.Text> */}
                          <div className="product_title categori">
                            <ReactMarkdown
                              className="products-div"
                              source={value.title}
                            />
                          </div>
                          <div className="price">
                            <div className="things_price_Currency">
                              Price ($)
                            </div>
                            <div> {value.price} </div>
                            <div className="things_price_Currency">
                              {" " + value.currency + " "}
                            </div>
                          </div>
                          <Card.Footer>
                            <a href={value.promotion_link} target="_self">
                              <Row>
                                <Col sm="12">
                                  <Button
                                    variant="outline-warning"
                                    style={{ width: "100%" }}
                                  >
                                    <span>Buy from {value.website}</span>
                                  </Button>
                                </Col>
                              </Row>
                            </a>
                          </Card.Footer>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
            {this.props.response_flag && (
              <Row style={{ position: "absolute", zIndex: 999, left: "50%" }}>
                <Col md={{ offset: 6 }}>
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </Col>
              </Row>
            )}
          </Container>
        </Row>
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
    result_data_tmp: state.home.result_data_tmp,
    slider_max_value: state.home.slider_max_value,
    response_flag2: state.home.response_flag2,
    response_flag1: state.home.response_flag1,
    response_flag: state.home.response_flag
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
    setNewResultData: data => dispatch(setNewResultData(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
