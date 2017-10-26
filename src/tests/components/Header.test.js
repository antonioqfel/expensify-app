/**
 * We need to figure out how we are going to virtually render
 * our component because we need to figure out what JSX comes back.
 * But we are not going to be viewing in the browser. We are
 * going to access it via code.
 * Now there is a react library for this: react-test-render.
 * This library allows to render our components inside of just
 * regular JavaScript code and then we can assert something
 * about what got rendered.
 */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

/*
test('Should render Header correctly', () => {
    // We create a new instance of ReactShallowRenderer
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);

    // Snapshots allow us to track changes to data over time
    expect(renderer.getRenderOutput()).toMatchSnapshot();

    // This is going to return the render output of the JSX you put in
    //console.log(renderer.getRenderOutput());


});
*/

test('Should render Header correctly', () => {
    // We create a variable commonly called wrapper and we call shallow as a function
    // and we pass into shallow the JSX we are trying to shallow render
    const wrapper = shallow(<Header />);

    // expect(wrapper).toMatchSnapshot();

    // All we do is to pass the wrapper inside toJSON. This is going to take the
    // wrapper and extract just the meaningful stuff the render output
    expect(toJSON(wrapper)).toMatchSnapshot();

    // .find works just like those other methods that allows to select the
    // various elements inside of our components and make assertions about them
    //expect(wrapper.find('h1').text()).toBe('Expensify');

});

/**
 * Note: enzyme-to-json allows us to get json back
 */