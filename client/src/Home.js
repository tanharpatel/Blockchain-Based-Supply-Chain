import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const redirect_to_roles = () => {
    history.push("/roles");
  };
  const redirect_to_addMedicine = () => {
    history.push("/addMedicine");
  };
  const redirect_to_supply = () => {
    history.push("/supply");
  };
  const redirect_to_track = () => {
    history.push("/track");
  };
  return (
    <div>
      <h3>Supply Chain Management</h3>
      <br />
      <h6>
        (Step 1 and 2 are meant to be performed by <b>Owner</b>. Here{" "}
        Owner is the person who deployed the smart contract on the
        blockchain.)
      </h6>
      <br />
      <h5>
        Step 1: Register Raw Material Suppliers, Manufacturers, Distributors and
        Retailers
      </h5>
      <h6>(Note: This is a one time step. Skip to step 2 if already done)</h6>
      <button
        onClick={redirect_to_roles}
        className="btn btn-outline-primary btn-sm"
      >
        Register
      </button>
      <br />
      <br />
      <h5>Step 2: Order medicines</h5>
      <button
        onClick={redirect_to_addMedicine}
        className="btn btn-outline-primary btn-sm"
      >
        Order Medicines
      </button>
      <br />
      <br />
      <h5>Step 3: Control Supply Chain</h5>
      <button
        onClick={redirect_to_supply}
        className="btn btn-outline-primary btn-sm"
      >
        Control Supply Chain
      </button>
      <br />
      <hr />
      <br />
      <h5>
        <b>Track</b> the medicines
      </h5>
      <button
        onClick={redirect_to_track}
        className="btn btn-outline-primary btn-sm"
      >
        Track Medicines
      </button>
    </div>
  );
}

export default Home;
