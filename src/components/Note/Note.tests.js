import React              from 'react';
import { Random }         from 'meteor/random';
import { shallow, mount } from 'enzyme';
import StubCollections    from 'meteor/hwillson:stub-collections';
import { sinon }          from 'meteor/practicalmeteor:sinon';
import { expect }         from 'chai';
import faker              from 'faker';
import { Notes }          from '../../../api/notes/notes.js';

import { deleteNote } from '../../../api/notes/methods.js';

import Note from './Note.jsx';

if (Meteor.isClient) {
  describe('Note', () => {
    let note, spy;
    beforeEach(function () {
      StubCollections.stub(Notes);

      Factory.define('note', Notes);

      note = Factory.build('note', {
        title: () => faker.lorem.word(),
        content: () => faker.lorem.sentence(),
        tags: []
      });

      spy = sinon.spy();

    });

    afterEach(function() {
      StubCollections.restore();
    })


    it('renders correctly', () => {
      // const content = shallow(<div className="content">);
      //
      // const title = shallow(<div className="title">);
      //
      // const SetColo = shallow(<div className="SetColo">);
      //
      //
      // const wrapper = mount(<Note note={note} onDelete={spy}/>);

    });


    // it('should delete when trash is clicked', () => {
    //   //const wrapper = mount(<Note note={note} onDelete={spy}/>);
    //
    //   // wrapper.find('.delete').simulate('click');
    //   //
    //   // sinon.assert.calledWith(spy, note._id);
    // });
  })
}
