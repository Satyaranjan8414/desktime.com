import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Heading } from "@chakra-ui/react";

export default class Testimonials extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f5f5f6" }}>
        <Heading m="1rem" size={["sm","md","md","lg"]}>
          More than 18 000 companies worldwide trust <br />
          DeskTime with their business
        </Heading>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img
              src="https://desktime.com/assets/img/customers/toms.png"
              alt="tp"
            />
            <div className="myCarousel">
              <h3>Tom Panders</h3>
              <h4>
                CEO at <b>setupad</b>
              </h4>
              <p>
                With Desktime I am able to see how productive my employees are
                and how much work time they spend on work related applicationd
                -- that's something many other time tracking software don't have
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://desktime.com/assets/img/customers/rob.png"
              alt="rr"
            />
            <div className="myCarousel">
              <h3>Rob Robelo</h3>
              <h4>
                General Manager At <b>Integra MDP</b>
              </h4>
              <p>
                Support has been on point and incredibly helpful. Excellent
                customer service. WE have made right decision to go with
                desktime.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://desktime.com/assets/img/customers/kaspars.png"
              alt="km"
            />
            <div className="myCarousel">
              <h3>Kaspers Milbergs</h3>
              <h4>
                CTO At <b>On The Map Marketing</b>
              </h4>
              <p>
                I would recommended desktime for companies for remote employees
                or home-office days-time tracking allows people who work
                remotely to feel certain that their work, effort,and dedication
                will not stay unnoticed. Since everything happens automatically,
                they can feel safe that any work their do will be logged and
                their hours adequately compensated.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://desktime.com/assets/img/customers/zelma.png"
              alt="zdv"
            />
            <div className="myCarousel">
              <h3>Zelma Diana Vidina</h3>
              <h4>
                Managing Director At <b>AD VERBUM</b>
              </h4>
              <p>
                Desktime has helped us find new ways to automate our workflows
                to free up time for important things like strengthening
                relationships with our customers.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://desktime.com/assets/img/customers/rizah.png"
              alt="m"
            />
            <div className="myCarousel">
              <h3>Rizah Kabsi</h3>
              <h4>
                Founder and CEO <b>SmartLab</b>
              </h4>
              <p>
                I was thingking about if there is a solution which can gather me
                all needed data about team productivity, and the same time
                provide more flexible working hours to all team members.I found
                it possible with the Desktime task and time management system.
                It is easy to control everything.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://desktime.com/assets/img/customers/julia.png"
              alt="k"
            />
            <div className="myCarousel">
              <h3>Julia Gafford</h3>
              <h4>
                CEO At <b>Truesix Co</b>
              </h4>
              <p>
                If you're working as a freelancer, a writer, a blogger, or
                you're simply billing by the hour, Desktime is the right kind of
                time tracking tool for you.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
