import React              from 'react';
import { Random }         from 'meteor/random';
import { shallow, mount } from 'enzyme';
import StubCollections    from 'meteor/hwillson:stub-collections';
import { sinon }          from 'meteor/practicalmeteor:sinon';
import { expect }         from 'chai';
import { Notes }          from '../../../api/notes/notes.js';

import SetColorMenu       from './SetColorMenu.jsx';

if (Meteor.isClient) {
  describe('SetColorMenu', () => {
    let note;
    beforeEach(function() {
      StubCollections.stub(Notes);

      Factory.define('note', Notes);

      note = Factory.build('note', { color: 'white'});
    })

    afterEach(function() {
      StubCollections.restore();
    })


    it('renders correctly', () => {
      const wrapper = mount(<SetColorMenu color={note.color} />);
      const circles = wrapper.find('span');

      expect(circles).to.have.length(8);
      expect(circles.at(0).hasClass('chosen')).to.be.true;
    });

    it('changes color', () => {
      //sinon.stub(setColor, 'call');

      const spy = sinon.spy();
      const wrapper = mount(<SetColorMenu color={note.color} onSetColor={spy}/>);
      const circles = wrapper.find('span');

      for (let i = 0; i < circles.length; i++) {
        const currentCircle = circles.at(i), // at returns node wrapped in enzyme stuff
              currentColor = circles.get(i).className.split(' ')[0]; // get returns just a node
        currentCircle.simulate('click');
        sinon.assert.calledWith(spy, currentColor);

        //expect(currentCircle.hasClass('chosen')).to.be.true;

        // sinon.assert.calledWith(setColor.call, {
        //   noteId: note._id,
        //   color: currentColor,
        // });
      }

      //setColor.call.restore();
    });
  })
}
