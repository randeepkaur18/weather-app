import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure adapter to connect to enzyme
configure({ adapter: new Adapter() });