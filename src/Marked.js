import { useState } from 'react'
import marked from "marked";
import hljs from 'highlightjs'
import 'highlightjs/styles/agate.css'　

marked.setOptions({
  highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
  }
});

const defaultText = `# code

\`\`\`typescript
class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax
\`\`\`
`

const Marked = () => {
  const [text, setText] = useState(defaultText)
  return (
    <div>
      <h1>marked page</h1>
      <div className='editor-wrapper'>
        <textarea
          value={text}
          onChange={(e) => {setText(e.target.value)}}
        />
        <div className='markdown-wrapper'>
          <div dangerouslySetInnerHTML={{__html: marked(text)}} />
        </div>
      </div>
    </div>
  )
}

export default Marked