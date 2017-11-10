"use strict";

import React, {Component} from "react";
import {connect} from "react-redux";

import constants from "../../constants";

import getCategoriesXHR from "../../helpers/GetCategoriesXHR";
import _createCategoryXHR from "./_createCategoryXHR";

const mapStateToProps = state => {
  return {
    adminPanelState: state.adminPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCategoryName: (name) => {
      dispatch({type: constants.adminPanelState.CHANGE_NAME_OF_THE_CATEGORY, payload: name});
    },
    createCategory: (data) => {
      dispatch({
        type: constants.httpRequest.PROMISE,
        actions: [
          constants.httpRequest.CREATE_CATEGORY_REQUEST,
          constants.httpRequest.CREATE_CATEGORY_SUCCESS,
          constants.httpRequest.CREATE_CATEGORY_FAILURE
        ],
        promise: _createCategoryXHR(data)
      });
    },
    getCategories: () => {
      dispatch({
        type: constants.httpRequest.PROMISE,
        actions: [
          constants.httpRequest.GET_CATEGORIES_REQUEST,
          constants.httpRequest.GET_CATEGORIES_SUCCESS,
          constants.httpRequest.GET_CATEGORIES_FAILURE
        ],
        promise: getCategoriesXHR()
      });
    }
  };
};

class CreateCategory extends Component {

  constructor(props) {
    super(props);

    this.createCategory = this.createCategory.bind(this);
    this.changeCategoryName = this.changeCategoryName.bind(this);
  }

  changeCategoryName(event) {
    this.props.changeCategoryName(event.currentTarget.value);
  }

  createCategory() {
    const data = new FormData(), name = this.props.adminPanelState.testCategoryName;
    data.append('name', name);
    this.props.createCategory(data);
  }

  componentDidMount() {
    this.props.getCategories();
    setInterval(() => {
      this.props.getCategories();
    }, 8000);
  }

  render() {
    return (
      <section className="col-xs-12 test-shadow test-section">
        <div className="col-md-6">
          <h3>Create Category</h3>
          <hr/>
          <label htmlFor="">Name category</label>
          <div className="form-inline">
            <input
              style={{width: "80%"}}
              type="text"
              className="form-control"
              placeholder="Input name category"
              onChange={this.changeCategoryName}
              value={this.props.adminPanelState.testCategoryName}
            />
            <button
              style={{width: "20%"}}
              className="form-control btn btn-default" onClick={this.createCategory}
            >
              Create
            </button>
          </div>
          <hr/>
        </div>
        <div className="col-md-6">
          <h3>Categories</h3>
          <hr/>
          {this.props.adminPanelState.testCategories.map((category) => {
            return (
              <div
                key={category.id}
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  display: "inline-block",
                  backgroundColor: "#24292e",
                  margin: "10px",
                  padding: "5px",
                  color: "white",
                  borderRadius: "20px"
                }}
              >
                {`${category.text}`}
              </div>
            );
          })}
          <hr/>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategory);