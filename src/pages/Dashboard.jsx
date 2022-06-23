import React from "react";
import "../public/css/style.css";
import Slider from "../components/Slider";
import NavDashboard from "../components/NavDashboar";
import ButtonDashboard from "../components/ButtonDashboard";
import CardDashboard from "../components/CardDashboard";

function Dashboard() {
    return (
      <>

      <div>
        <section>
          <NavDashboard />
          <Slider />
          <ButtonDashboard />
          <CardDashboard />
        </section>
      </div>
      </>
    );
}

export default Dashboard;