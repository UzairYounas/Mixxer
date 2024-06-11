import React, { useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

function TermsTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const lineStyle = {
    top:
      toggleState === 1
        ? "30px"
        : toggleState === 2
        ? "78px"
        : toggleState === 3
        ? "125px"
        : toggleState === 4
        ? "175px"
        : "30px",
  };

  return (
    <>
      <Navbar />
      <div className="container terms">
        <div className="row" style={{ paddingTop: "80px" }}>
          <div className="col-md-4">
            <div className="shadow p-3 position-absolute">
              <hr className="hr-2" style={lineStyle} />
              <ul className="d-flex flex-column gap-4">
                <li
                  className={toggleState === 1 ? "active" : ""}
                  onClick={() => toggleTab(1)}
                >
                  Terms of Services
                </li>
                <li
                  className={toggleState === 2 ? "active" : ""}
                  onClick={() => toggleTab(2)}
                >
                  EULA for Mixxer
                </li>
                <li
                  className={toggleState === 3 ? "active" : ""}
                  onClick={() => toggleTab(3)}
                >
                  Privacy Policies
                </li>
                <li
                  className={toggleState === 4 ? "active" : ""}
                  onClick={() => toggleTab(4)}
                >
                  Disclaimer for Mixxer
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className={toggleState === 1 ? "d-block " : "d-none"}>
              <h1>TERMS OF SERVICES</h1>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur, minus deleniti deserunt distinctio ullam dolor
                modi excepturi. Sit vero ab, aperiam expedita dicta quae
                voluptas labore odit, qui sint aspernatur, at ipsam. Recusandae
                ut, explicabo dolore, aliquid nam, facilis dolores veritatis
                consequuntur fugiat id accusantium? Unde sunt quibusdam id
                necessitatibus fugiat temporibus consequuntur, dolorem aliquid
                quaerat, eos et mollitia, quae doloribus provident quia qui
                aspernatur. Quos doloribus earum aut corporis. Eligendi
                assumenda est suscipit voluptates hic beatae in nam omnis,
                accusamus eveniet illum neque quia quo. Repellat quaerat
                voluptas officia libero blanditiis dolorem facilis animi quidem
                cum assumenda, iure, iusto eligendi doloremque eaque nam
                dignissimos? Non, rerum ipsam dolore quaerat modi, nisi,
                eligendi iusto expedita autem corporis perspiciatis. Alias
                aliquam quaerat doloremque corrupti vel consequuntur porro
                minima, adipisci nihil, id numquam, sit maiores sed ipsam
                placeat modi et repudiandae? Eligendi delectus similique,
                tempora necessitatibus omnis veniam fugit. Nam iure dignissimos
                quos soluta quaerat excepturi totam, neque natus odio accusamus
                eaque perspiciatis ipsam adipisci pariatur ducimus officia
                reprehenderit corrupti sequi minus veritatis in illo
                necessitatibus iste. Earum tenetur dolorum reprehenderit facere
                repudiandae voluptatem aut ad similique quibusdam dolore
                obcaecati, alias, sequi voluptate quam laudantium tempora!
                Aliquam cupiditate quidem nam accusantium voluptates, dolores
                optio voluptatibus nobis perferendis qui quam, debitis
                exercitationem voluptas tempora officia quo asperiores! Sapiente
                quod nobis inventore! Quo veritatis asperiores, id voluptatibus
                iste excepturi cum voluptate tempore. Optio eius nisi rerum at
                eum repellendus aliquid maxime nulla illo iusto praesentium
                voluptates mollitia consectetur, nobis numquam, ea culpa
                doloribus eligendi distinctio ad, quis incidunt aliquam ut
                doloremque? Neque in fugit nesciunt placeat, veritatis fuga
                assumenda sed inventore omnis esse, consequatur a maiores
                voluptate repellendus nihil velit libero quis earum sunt amet
                impedit deserunt aut. Blanditiis sunt voluptatem temporibus
                nisi, facere at. Perferendis officia amet quo illo quis rerum,
                doloribus aspernatur.
              </small>
            </div>

            <div className={toggleState === 2 ? "d-block " : "d-none"}>
              <h1>END USER LICENSE AGREEMENT</h1>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur, minus deleniti deserunt distinctio ullam dolor
                modi excepturi. Sit vero ab, aperiam expedita dicta quae
                voluptas labore odit, qui sint aspernatur, at ipsam. Recusandae
                ut, explicabo dolore, aliquid nam, facilis dolores veritatis
                consequuntur fugiat id accusantium? Unde sunt quibusdam id
                necessitatibus fugiat temporibus consequuntur, dolorem aliquid
                quaerat, eos et mollitia, quae doloribus provident quia qui
                aspernatur. Quos doloribus earum aut corporis. Eligendi
                assumenda est suscipit voluptates hic beatae in nam omnis,
                accusamus eveniet illum neque quia quo. Repellat quaerat
                voluptas officia libero blanditiis dolorem facilis animi quidem
                cum assumenda, iure, iusto eligendi doloremque eaque nam
                dignissimos? Non, rerum ipsam dolore quaerat modi, nisi,
                eligendi iusto expedita autem corporis perspiciatis. Alias
                aliquam quaerat doloremque corrupti vel consequuntur porro
                minima, adipisci nihil, id numquam, sit maiores sed ipsam
                placeat modi et repudiandae? Eligendi delectus similique,
                tempora necessitatibus omnis veniam fugit. Nam iure dignissimos
                quos soluta quaerat excepturi totam, neque natus odio accusamus
                eaque perspiciatis ipsam adipisci pariatur ducimus officia
                reprehenderit corrupti sequi minus veritatis in illo
                necessitatibus iste. Earum tenetur dolorum reprehenderit facere
                repudiandae voluptatem aut ad similique quibusdam dolore
                obcaecati, alias, sequi voluptate quam laudantium tempora!
                Aliquam cupiditate quidem nam accusantium voluptates, dolores
                optio voluptatibus nobis perferendis qui quam, debitis
                exercitationem voluptas tempora officia quo asperiores! Sapiente
                quod nobis inventore! Quo veritatis asperiores, id voluptatibus
                iste excepturi cum voluptate tempore. Optio eius nisi rerum at
                eum repellendus aliquid maxime nulla illo iusto praesentium
                voluptates mollitia consectetur, nobis numquam, ea culpa
                doloribus eligendi distinctio ad, quis incidunt aliquam ut
                doloremque? Neque in fugit nesciunt placeat, veritatis fuga
                assumenda sed inventore omnis esse, consequatur a maiores
                voluptate repellendus nihil velit libero quis earum sunt amet
                impedit deserunt aut. Blanditiis sunt voluptatem temporibus
                nisi, facere at. Perferendis officia amet quo illo quis rerum,
                doloribus aspernatur.
              </small>
            </div>

            <div className={toggleState === 3 ? "d-block " : "d-none"}>
              <h1>PRIVACY POLICIES</h1>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur, minus deleniti deserunt distinctio ullam dolor
                modi excepturi. Sit vero ab, aperiam expedita dicta quae
                voluptas labore odit, qui sint aspernatur, at ipsam. Recusandae
                ut, explicabo dolore, aliquid nam, facilis dolores veritatis
                consequuntur fugiat id accusantium? Unde sunt quibusdam id
                necessitatibus fugiat temporibus consequuntur, dolorem aliquid
                quaerat, eos et mollitia, quae doloribus provident quia qui
                aspernatur. Quos doloribus earum aut corporis. Eligendi
                assumenda est suscipit voluptates hic beatae in nam omnis,
                accusamus eveniet illum neque quia quo. Repellat quaerat
                voluptas officia libero blanditiis dolorem facilis animi quidem
                cum assumenda, iure, iusto eligendi doloremque eaque nam
                dignissimos? Non, rerum ipsam dolore quaerat modi, nisi,
                eligendi iusto expedita autem corporis perspiciatis. Alias
                aliquam quaerat doloremque corrupti vel consequuntur porro
                minima, adipisci nihil, id numquam, sit maiores sed ipsam
                placeat modi et repudiandae? Eligendi delectus similique,
                tempora necessitatibus omnis veniam fugit. Nam iure dignissimos
                quos soluta quaerat excepturi totam, neque natus odio accusamus
                eaque perspiciatis ipsam adipisci pariatur ducimus officia
                reprehenderit corrupti sequi minus veritatis in illo
                necessitatibus iste. Earum tenetur dolorum reprehenderit facere
                repudiandae voluptatem aut ad similique quibusdam dolore
                obcaecati, alias, sequi voluptate quam laudantium tempora!
                Aliquam cupiditate quidem nam accusantium voluptates, dolores
                optio voluptatibus nobis perferendis qui quam, debitis
                exercitationem voluptas tempora officia quo asperiores! Sapiente
                quod nobis inventore! Quo veritatis asperiores, id voluptatibus
                iste excepturi cum voluptate tempore. Optio eius nisi rerum at
                eum repellendus aliquid maxime nulla illo iusto praesentium
                voluptates mollitia consectetur, nobis numquam, ea culpa
                doloribus eligendi distinctio ad, quis incidunt aliquam ut
                doloremque? Neque in fugit nesciunt placeat, veritatis fuga
                assumenda sed inventore omnis esse, consequatur a maiores
                voluptate repellendus nihil velit libero quis earum sunt amet
                impedit deserunt aut. Blanditiis sunt voluptatem temporibus
                nisi, facere at. Perferendis officia amet quo illo quis rerum,
                doloribus aspernatur.
              </small>
            </div>

            <div className={toggleState === 4 ? "d-block " : "d-none"}>
              <h1>DISCLAIMER FOR MIXXER</h1>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur, minus deleniti deserunt distinctio ullam dolor
                modi excepturi. Sit vero ab, aperiam expedita dicta quae
                voluptas labore odit, qui sint aspernatur, at ipsam. Recusandae
                ut, explicabo dolore, aliquid nam, facilis dolores veritatis
                consequuntur fugiat id accusantium? Unde sunt quibusdam id
                necessitatibus fugiat temporibus consequuntur, dolorem aliquid
                quaerat, eos et mollitia, quae doloribus provident quia qui
                aspernatur. Quos doloribus earum aut corporis. Eligendi
                assumenda est suscipit voluptates hic beatae in nam omnis,
                accusamus eveniet illum neque quia quo. Repellat quaerat
                voluptas officia libero blanditiis dolorem facilis animi quidem
                cum assumenda, iure, iusto eligendi doloremque eaque nam
                dignissimos? Non, rerum ipsam dolore quaerat modi, nisi,
                eligendi iusto expedita autem corporis perspiciatis. Alias
                aliquam quaerat doloremque corrupti vel consequuntur porro
                minima, adipisci nihil, id numquam, sit maiores sed ipsam
                placeat modi et repudiandae? Eligendi delectus similique,
                tempora necessitatibus omnis veniam fugit. Nam iure dignissimos
                quos soluta quaerat excepturi totam, neque natus odio accusamus
                eaque perspiciatis ipsam adipisci pariatur ducimus officia
                reprehenderit corrupti sequi minus veritatis in illo
                necessitatibus iste. Earum tenetur dolorum reprehenderit facere
                repudiandae voluptatem aut ad similique quibusdam dolore
                obcaecati, alias, sequi voluptate quam laudantium tempora!
                Aliquam cupiditate quidem nam accusantium voluptates, dolores
                optio voluptatibus nobis perferendis qui quam, debitis
                exercitationem voluptas tempora officia quo asperiores! Sapiente
                quod nobis inventore! Quo veritatis asperiores, id voluptatibus
                iste excepturi cum voluptate tempore. Optio eius nisi rerum at
                eum repellendus aliquid maxime nulla illo iusto praesentium
                voluptates mollitia consectetur, nobis numquam, ea culpa
                doloribus eligendi distinctio ad, quis incidunt aliquam ut
                doloremque? Neque in fugit nesciunt placeat, veritatis fuga
                assumenda sed inventore omnis esse, consequatur a maiores
                voluptate repellendus nihil velit libero quis earum sunt amet
                impedit deserunt aut. Blanditiis sunt voluptatem temporibus
                nisi, facere at. Perferendis officia amet quo illo quis rerum,
                doloribus aspernatur.
              </small>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermsTab;
