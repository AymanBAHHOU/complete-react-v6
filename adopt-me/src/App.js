const Pet = (props) => {
  return React.createElement("div",  {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed)
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Havanese"}),
      React.createElement(Pet, {name: "Pepper", animal: "Bird", breed: "Cockatiel"}),
      React.createElement(Pet, {name: "Noddle", animal: "Snack", breed: "Blue-eyed Lucy"}),
    ]
    
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));