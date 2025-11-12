
import ReactDOM from 'react-dom/client';
import './index.css';
import Book from './book.js';

/*
Q1 Create a file book.js and create a class with same name and inherited from React.Component class. Return a html from render method. In the last line of this file export the book component.
Q2 Import book from ‘./book.js’ in index.js and render it in form of <book /> tag.
Q3 Pass an attribute title in <book /> tag and use it inside Class render method’s html in this way {this.props.title}.
Q4 Create a constructor() method in this class and call super() method() for base class constructor. Use state object to define 2 variables color and cost with values ‘red’ and 100$. Use these state variables inside the html in this way {this.state.color} and {this.state.cost}. To give a message on web page: The book is having a _____ color and costs _____. The dashes to be filled from state object.
Q5 Create a method changeCost() inside the class and change value of cost state variable (increase by 10$). In the rendered html part add a button and inside button tag add a event which will call changeCost() on button click. Check the web page and see if button click adds 10$ on each click to the cost of book.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Book title="book" />
  </>
);

