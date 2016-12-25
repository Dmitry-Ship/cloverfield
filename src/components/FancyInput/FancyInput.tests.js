import React              from 'react';
import { shallow, mount } from 'enzyme';
import { sinon }          from 'meteor/practicalmeteor:sinon';
import { expect }         from 'chai';
import faker              from 'faker';

import FancyInput         from './FancyInput.jsx';

if (Meteor.isClient) {
  describe('FancyInput', () => {

    it('calls onBlur function ', () => {
      const spy = sinon.spy();

      const wrapper = mount(<FancyInput onBlur={spy}/>);

      wrapper.setState({editing: true});

      const testText = faker.lorem.word();

      wrapper.find('textarea').get(0).value = testText;
      wrapper.find('textarea').at(0).simulate('blur');

      sinon.assert.calledWith(spy, testText);
    });

    it('Sets editing to true on click', () => {
      const wrapper = mount(<FancyInput />);

      wrapper.find('.fancy-area').simulate('click');

      expect(wrapper.state().editing).to.be.true;
    });

    it('Sets editing to false on blur', () => {
      const spy = sinon.spy();
      const wrapper = mount(<FancyInput onBlur={spy} />);

      wrapper.setState({editing: true});

      wrapper.find('.fancy-input').at(0).simulate('blur');

      expect(wrapper.state().editing).to.be.false;
    });



    it('renders passed value as text', () => {
      const testText = faker.lorem.word();
      const wrapper = shallow(<FancyInput text={testText} />);

      expect(wrapper.find('.fancy-text').text()).to.equal(testText);
    });


  })
}
