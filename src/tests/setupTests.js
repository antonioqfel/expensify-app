/**
 * This is going to be a file that runs that allow us to configure
 * the environment we are running in. All we are going to do is import
 * enzyme, enzyme adapter and we are going to call a single method
 * to actually wire up enzyme to work with the adapter
 */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// This method configures everything:
// Enzyme.configure() can take all sort of attributes. We are going to pass
// as first and only argument and object. On this object we can specify
// various configuration properties. Adapter is pretty much the only one
// we are actually going to use
Enzyme.configure({
    adapter: new Adapter()
});