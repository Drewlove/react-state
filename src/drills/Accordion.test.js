import React from 'react'; 
import ReactDOM from 'react-dom'; 
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme'; 
import toJson from 'enzyme-to-json'
import Accordion from "./Accordion"; 
import { finished } from 'stream';

const sectionsProp = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

it('renders without errors', ()=> {
    const div = document.createElement('div'); 
    ReactDOM.render(<Accordion />, div); 
    ReactDOM.unmountComponentAtNode(div)
})

it('renders without props', ()=> {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders when user clicks section', ()=> {
    const wrapper = shallow(<Accordion section={sectionsProp}/>)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
})

it('only renders last section clicked', ()=> {
    const wrapper = shallow(<Accordion section={sectionsProp} />)
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
})














//
// it('renders empty given no tabs', () => {
//     const wrapper = shallow(<Tabs />)
//     expect(toJson(wrapper)).toMatchSnapshot()
//   })

//   it('renders the first tab by default', () => {
//     const wrapper = shallow(<Tabs tabs={tabsProp} />)
//     expect(toJson(wrapper)).toMatchSnapshot()
//   })

//   it('closes the first tab and opens any clicked tab', ()=> {
//       const wrapper = shallow(<Tabs tabs={tabsProp}/>)
//       wrapper.find('button').at(1).simulate('click')
//       expect(toJson(wrapper)).toMatchSnapshot()
//   })