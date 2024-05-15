const parent = React.createElement('div', { id: "parent" },
    React.createElement('div', { id: "child" },
        [React.createElement('h1', {}, "This is the h1 tag"), React.createElement('h2', {}, "This is the h2 tag")])
);




const heading = React.createElement('h1', {}, "Hello from React");
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parent);