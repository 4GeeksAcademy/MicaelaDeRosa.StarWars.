import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
import { Vehicles } from "../component/Vehicles";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <Characters />
      <Planets />
      <Vehicles />
    </div>
  );
};
