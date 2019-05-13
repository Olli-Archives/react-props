import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('dog component', ()=>{
  it('renders dog', ()=>{
    const wrapper = shallow(<Dog name='skip' age={6} weight='700'/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
