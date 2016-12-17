import React                from 'react';
import { Random }           from 'meteor/random';
import { shallow, mount }   from 'enzyme';
import StubCollections      from 'meteor/hwillson:stub-collections';
import { sinon }            from 'meteor/practicalmeteor:sinon';
import { expect }           from 'chai';
import faker                from 'faker';

import ChangablePic from './ChangablePic.jsx';

if (Meteor.isClient) {
  describe('ChangablePic', () => {
    beforeEach(function() {
      const userpicStyle = {backgroundImage: `url(uploads/${Random.id()}/${() => faker.lorem.word()})`}

      const wrapper = mount(<ChangablePic userpicStyle={userpicStyle}/>)
    })

    it('renders correctly', () => {


    })

    it('changes userpic', () => {
      sinon.stub(changeUserpic, 'call');
      wrapper.find('input').get(0).value = {
        userInfo: 'new userpic',
        userpicData: () => faker.lorem.word()
      }

      wrapper.find('input').at(0).simulate('change')

      sinon.assert.calledWith(changeUserpic.call, {
        userpicInfo: newTag,
        userpicData: note._id
      });

      changeUserpic.call.restore();
    })
  })
}
