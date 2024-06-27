import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  return (
    <div className="container mt-5 mb-5 accordian">
      <h1 className="text-center">Frequently asked questions</h1>
      <div className="row mt-5">
        
        <div className="col-md-6">
          <Accordion>
            <Accordion.Item className="mb-4" eventKey="0">
              <Accordion.Header>
                <span>1</span>What is Mixxer and how can it enhance my social
                experience by helpingme discover and join meetups?
              </Accordion.Header>
              <Accordion.Body>
                Mixxer simplifies meeting friends or making new connections by
                streamlining the planning process. There is no need to swipe for
                connections or navigate group chats. Simply create a Mixxer with
                all the outing details for others to see, and wait for them to
                join the fun!
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="1">
              <Accordion.Header>
                <span>3</span>How do I signup for Mixxer?
              </Accordion.Header>
              <Accordion.Body>
                You can sign up for Mixxer by downloading the app and following
                the prompts to create a profile.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="2">
              <Accordion.Header>
                <span>5</span>How do I find Mixxers near me using the app?
              </Accordion.Header>
              <Accordion.Body>
                You can find Mixxers near you on the Home Page feed under
                “Recommendations”.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="3">
              <Accordion.Header>
                <span>7</span>What should I do If I encounter inappropriate
                content?
              </Accordion.Header>
              <Accordion.Body>
                Use the “Report” button to notify us of any inappropriate
                content, and we will review the profile. Any person displaying
                inappropriate content will be removed from the app.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="4">
              <Accordion.Header>
                <span>9</span>Is it possible to create my own Mixxers?
              </Accordion.Header>
              <Accordion.Body>
                Yes, anyone can create their own Mixxers! Click the “+” button
                in the center of the bottom menu to get started.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="col-md-6">
          <Accordion>
            <Accordion.Item className="mb-4" eventKey="5">
              <Accordion.Header>
                <span>2</span>Are there any cost associated with using Mixxer?
              </Accordion.Header>
              <Accordion.Body>
                Mixxer is completely free to use and offers all features! Users
                have the option to upgrade to a Standard Plan ($4.99) or a
                Premium Plan ($9.99), depending on their preferred level of
                activity.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="6">
              <Accordion.Header>
                <span>4</span>How can I invite friends to a Mixxer?
              </Accordion.Header>
              <Accordion.Body>
                When creating a Mixxer, select the “Invite” button to invite
                your friends on the app. Ensure your friends have a Mixxer
                profile so they can see the details!
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="7">
              <Accordion.Header>
                <span>6</span>Can I see who is attending a Mixxer I'm interested
                in?
              </Accordion.Header>
              <Accordion.Body>
                Yes, you can see the profile photo of any Mixxer attendee. You
                can then click on their profile photo for more information.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="8">
              <Accordion.Header>
                <span>8</span>How do I update my profile information?
              </Accordion.Header>
              <Accordion.Body>
                To update your profile information, use the menu button in the
                top right corner of your profile.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mb-4" eventKey="9">
              <Accordion.Header>
                <span>10</span>How do I delete my Mixxer account if I no longer
                wish to use the app?
              </Accordion.Header>
              <Accordion.Body>
                To delete your account, go to Settings, Manage Profile, then
                Delete Profile. This action cannot be undone.
              </Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
