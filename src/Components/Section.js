import React, {Component} from 'react';
import banner from '../banner.jpg'
class Section extends React.Component {
    render() {
      return (
        <div>
          <section id="intro">
            <div class="intro-container">
              <div
                class="carousel  slide carousel-fade"
                data-ride="carousel"
                id="introCarousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <div class="carousel-background">
                      <img class="img-fluid" src={banner} alt=""></img>
                    </div>
                    <div class="carousel-container">
                      <div class="carousel-content">
                        <div class="row">
                          <div class="col-md-12">
                            <h2 class="mx-auto">Learning made Simple. </h2>
                     
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  data-slide="prev"
                  href="#introCarousel"
                  role="button"
                >
                  <span class="sr-only">Previous</span>{" "}
                </a>{" "}
                <a
                  class="carousel-control-next"
                  data-slide="next"
                  href="#introCarousel"
                  role="button"
                >
                  <span class="sr-only">Next</span>{" "}
                </a>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
  
  

export default Section;