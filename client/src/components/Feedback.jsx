import { Button, Textarea } from "@chakra-ui/react";
import React from "react";

function Feedback() {
  return (
    <main className="feedback-container">
      <div className="feedback-box">
        <h1 className="feedback-text">FeedBack</h1>
        <h3 className="feedback-text">Let us know what you feel!</h3>
        <Textarea
          style={{ width: "300px", display: "flex", height: "100px" }}
        />
        <Button className="btn">Send</Button>
      </div>
    </main>
  );
}

export default Feedback;
