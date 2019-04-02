import React from "react";
import {shallow} from "enzyme"
import MainPicture from "../client/components/MainPicture.jsx";



describe('Render Picture React Base', ()=>{
  it("should render without error", () =>{
    const wrapper = shallow(<MainPicture />);
    expect((wrapper).exists()).toBe(true);
  });
});

