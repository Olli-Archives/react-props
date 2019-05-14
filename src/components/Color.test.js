import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('test color component', ()=>{
  it('creates color html', ()=>{
    const wrapper = shallow(<Color name='blue' hex="#8673A1" red={55} green={44} blue={674} />);
    expect(wrapper).toMatchSnapshot();
  });
});
