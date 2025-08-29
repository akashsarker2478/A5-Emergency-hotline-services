## ques-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

-  getElementById -- Find one element by its ID.Always return a single element.
- getElementsByClassName -- find all elements with the same class.return an HTML      collection.
- querySelector -- Find the first element that matches a CSS selector.
- querySelectorAll -- Find all element that matches a CSS selector. return a nodelist.

## ques-2: How do you create and insert a new element into the DOM?
  - create new element :
    const newP = document.createElement('p');
  
  - Add content to the element :
    newP.innerText = 'i am new paragraph tag';

  - Insert the element into the DOM :
    const container = document.getElementById('container');
    container.appendChild(newP);

## ques-3: What is Event Bubbling and how does it work?
    - Event bubbling in JavaScript is when an event triggered on a child element propagates upward through its parent elements in the DOM.

    - Events are executed from the innermost element to the outer elements, and bubbling is enabled by default.

    - To stop bubbling, we can use event.stopPropagation().

 ## ques-4: What is Event Delegation in JavaScript? Why is it useful?
    - Event Delegation is a technique where a parent element handles the events of its child elements using a single event listener.

    - It is useful because it reduces the number of listeners, works for dynamically added child elements, and saves memory.

## ques-5: What is the difference between preventDefault() and stopPropagation() methods?

  - preventDefault() - stops the default action of an event.
  - stopPropagation() - stops the event from going to parent elements.
  