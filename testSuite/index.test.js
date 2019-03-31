import React from "react";
import {shallow} from "enzyme"
import Picture from "../client/components/picture";



describe('Render Picture React Base', ()=>{
  it("should render without error", () =>{
    const wrapper = shallow(<Picture />);
    expect((wrapper).exists()).toBe(true);
  });
});

