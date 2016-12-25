import React          from 'react';
import faker              from 'faker';

import { shallow, mount }    from 'enzyme';
import { sinon }      from 'meteor/practicalmeteor:sinon';
import { expect }     from 'chai';

import CreationForm   from './CreationForm.jsx';

if (Meteor.isClient) {
  describe('CreationForm', () => {
    let titleField, contentField, wrapper, spy;
    beforeEach(function () {
      spy = sinon.spy();
      wrapper = mount(<CreationForm onCreateItem={spy}/>);
      contentField = wrapper.find('.content');
      titleField = wrapper.find('.title');
    });

    it('renders correctly', () => {
      expect(wrapper.hasClass('is-unfolded')).to.be.false;
    });

    it('shows subforms', () => {
      wrapper.simulate('click');
      expect(wrapper.find('.creation-form').hasClass('is-unfolded')).to.be.true;
    });

    it('creates new note', () => {
      //sinon.stub(createNote, 'call');

      const testTitle = faker.lorem.word(),
            testContent = faker.lorem.sentence();

      //const randomCircle

      contentField.simulate('change', { target: { value: testContent } });
      titleField.simulate('change', { target: { value: testTitle } });
      wrapper.find('span').at()

      wrapper.simulate('submit');

      expect(wrapper.state().content).to.equal('');
      expect(wrapper.state().title).to.equal('');
      expect(wrapper.state().className).to.equal('');

      sinon.assert.calledWith(spy, testTitle, testContent);

      // sinon.assert.calledWith(createNote.call, {
      //   title: testTitle,
      //   content: testContent
      // });
      //createNote.call.restore();
    });
  });
}
