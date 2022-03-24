import React, { Component } from "react";

import $ from 'jquery'

import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './App.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default class App extends Component {
  jQuerycode = () => {
    $(document).ready(function () {

      $.ajax({
        url: "https://api.github.com/users/gaearon",
        type: "GET",
        success: function(result) {
          var firstUrl = (result.avatar_url);
          $("#firstUrl").attr('src', firstUrl);
        },
        error: function(error) {
          var firstUrl = ("not available");
          $("#firstUrl").html(firstUrl);
        }
      });

      $.ajax({
        url: "https://api.github.com/users/acdlite",
        type: "GET",
        success: function(result) {
          var secondUrl = (result.avatar_url);
          $("#secondUrl").attr('src', secondUrl);
        },
        error: function(error) {
          var secondUrl = ("not available");
          $("#secondUrl").html(secondUrl);
        }
      });

      $.ajax({
        url: "https://api.github.com/users/yyx990803",
        type: "GET",
        success: function(result) {
          var thirdUrl = (result.avatar_url);
          $("#thirdUrl").attr('src', thirdUrl);
        },
        error: function(error) {
          var thirdUrl = ("not available");
          $("#thirdUrl").html(thirdUrl);
        }
      });

      $.ajax({
        url: "https://api.github.com/users/unclebob",
        type: "GET",
        success: function(result) {
          var forthUrl = (result.avatar_url);
          $("#forthUrl").attr('src', forthUrl);
        },
        error: function(error) {
          var forthUrl = ("not available");
          $("#forthUrl").html(forthUrl);
        }
      });

      $.ajax({
        url: "https://api.github.com/users/martinfowler",
        type: "GET",
        success: function(result) {
          var fifthUrl = (result.avatar_url);
          $("#fifthUrl").attr('src', fifthUrl);
        },
        error: function(error) {
          var fifthUrl = ("not available");
          $("#fifthUrl").html(fifthUrl);
        }
      });
    });
  }
  componentDidMount(){
    this.jQuerycode()
  }
  render() {
    return (
      <div className="Slider">
        <h1><img src={require('./GitHub-logo.png')} height="48" /> Avatars Slider</h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide><img id="firstUrl" alt="image" />
          </SwiperSlide>
          <SwiperSlide><img id="secondUrl" alt="image" />
          </SwiperSlide>
          <SwiperSlide><img id="thirdUrl" alt="image" />
          </SwiperSlide>
          <SwiperSlide><img id="forthUrl" alt="image" />
          </SwiperSlide>
          <SwiperSlide><img id="fifthUrl" alt="image" />
          </SwiperSlide>
        </Swiper>
      </div>
      );
  }
}