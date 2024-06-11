import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  return (
    <div className="container mt-5 mb-5 accordian">
      <h1 className="text-center">Frequently asked questions</h1>
      <div className="row mt-5">

        <div className="col-md-6">

          <Accordion defaultActiveKey="0">
            <Accordion.Item className="mb-4" eventKey="0">
              <Accordion.Header>
                <span>1</span>What is Mixxer and how can it enhance my social
                experience by helpingme discover and join meetups?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="1">
              <Accordion.Header> <span>3</span>How do I signup for Mixxer?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="2">
              <Accordion.Header> <span>5</span>How do I find Mixxers near me using the app?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="3">
              <Accordion.Header> <span>7</span>What should I do If I encounter inappropriate content?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="4">
              <Accordion.Header> <span>9</span>Is it possible to create my own Mixxers?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </div>

        <div className="col-md-6">

          <Accordion defauhltActiveKey="0">
            <Accordion.Item className="mb-4" eventKey="5">
              <Accordion.Header>
                <span>2</span>Are there any cost associated with using Mixxer?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="6">
              <Accordion.Header> <span>4</span>How can I invite friends to a Mixxer?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="7">
              <Accordion.Header> <span>6</span>Can I see who is attending a Mixxer I'm interested in?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="8">
              <Accordion.Header> <span>8</span>How do I update my profile information?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="9">
              <Accordion.Header> <span>10</span>How do I delete my Mixxer account if I no longer wish to use the app?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </div>

      </div>
    </div>
  );
}

export default FAQ;
