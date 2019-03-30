import React from 'react';
import { shallow, mount, render } from 'enzyme';
import index from "../client/index";
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';


describe('index', ()=>{
  it("should render without error", () =>{
    exportAllDeclaration(index).contains(<div>HelloFromReact</div>).toBe(true);
  });
});

