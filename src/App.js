import Playground from "@agney/playground";
/* Why is there a tabs import? https://github.com/agneym/playground#why-is-there-a-reacttabs-import*/
import "@reach/tabs/styles.css";
import "./App.css";

const App = () => {
  const snippet = {
    markup: `
<body>
  <div class="main">
    Hello, world.
  </div>
</body>
`,
    css: `
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  font-size: 22px;
  font-weight: bolder;
  color: yellow;
}
`,
    javascript: `
console.log("hello, world.")

const div = document.querySelector('div');
div.style.backgroundColor = 'red';
`,
    //     javascript: `import React, { createElement } from "https://cdn.skypack.dev/react";
    // import ReactDOM from "https://cdn.skypack.dev/react-dom";

    // ReactDOM.render(
    //   <h1>Hello World</h1>,
    //   document.getElementById("app")
    // );`,
  };

  // const theme = {
  //   container: {
  //     borderColor: "",
  //     minHeight: "20em",
  //     minWidth: "15em",
  //   },
  //   error: {
  //     background: "",
  //     color: "",
  //   },
  //   console: {
  //     background: "rgba(0, 0, 0, 1)",
  //   },
  //   divider: {
  //     width: 2,
  //     background: "",
  //   },
  //   editor: {
  //     fontFamily: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  //     backgroundColor: ``,
  //     color: ``,
  //   },
  //   tabs: {
  //     tabHeader: {
  //       borderBottom: "",
  //       panelBackground: "",
  //       background: "",
  //       color: "",
  //     },
  //     tabPanel: {
  //       phoneHeight: "10em",
  //     },
  //     selectedTab: {
  //       background: "",
  //       borderBottom: "0.2em solid rgb(0, 0, 0)",
  //     },
  //   },
  // };

  return (
    <div className="playground">
      <Playground
        id="playground"
        initialSnippet={snippet}
        defaultEditorTab="markup"
        defaultResultTab="result"
        transformJs="true"
        presets={["react"]}
        // theme="theme"
      />
    </div>
  );
};

export default App;
