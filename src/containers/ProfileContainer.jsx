import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { fetchUser } from '../actions/userActions';
import Profile from '../components/Profile';
import { getUser } from '../reducers/userReducer';

const mapStateToProps = store => ({
  user: getUser(store),
  profileRoute: '/profile',
  editRoute: '/editprofile',
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(logout()),
  fetchUser: () => dispatch(fetchUser()),
});

class ProfileContainer extends Component {
  componentDidMount() {
    function Person(name) {
      this.name = name;
    }

    Person.prototype.greeting = function () {
      console.log(`Hi, i am ${this.name}`);
    };

    const Bob = new Person('Bob');
    
    function Monster(name) {
      this.health = 100;
      this.name = name;
    }

    Monster.prototype.attack = function (damage) {
      this.health -= damage || 1;
      const message = this.health === 0 ? 'I am dead' : 'Ouch';
      console.log(message);
    };

    Monster.prototype.getHealth = function () {
      console.log(this.health);
    };

    const kraken = new Monster('Kraken');

    kraken.attack();
    kraken.attack(35);
    kraken.attack(64);
    kraken.getHealth();


    class Robot {
      constructor(name) {
        this.name = name;
        this.energy = 100;
      }

      move(distance) {
        const cost = distance || 0;
        const defaultMessage = `Walked ${distance || 0}m, ${this.energy} energy units left`;
        const noEnergyMessage = 'Out of energy';
        if (this.energy <= 0) {
          console.log(noEnergyMessage);
          return;
        }
        this.energy -= cost;
        const message = this.energy === 0 ? defaultMessage + noEnergyMessage : defaultMessage;
        console.log(message);
      }
    }

    const bender = new Robot('Bender');

    bender.move();
    bender.move(50);
    bender.move(50);
    bender.move(50);

    const food = {
      init: function (type) {
        this.type = type;
      },
      eat: function () {
        console.log('you ate the ' + this.type);
      }
    }

    const waffle = Object.create(food);


    console.log(Monster);


    this.props.fetchUser();
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
