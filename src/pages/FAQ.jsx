import React, { useState } from "react";
import Collapse from 'react-bootstrap/Collapse'

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center">Frequently asked questions</h1>

      <button onClick={() => setOpen(1)}>open</button>

     <Collapse in={open === 1}>
        <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, adipisci.
        </div>
     
     </Collapse>

    </div>
  );
}

export default FAQ;
