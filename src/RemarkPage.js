import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

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

const RemarkPage = () => {
  const [text, setText] = useState(defaultText)
  return (
    <div>
      <h1>remark page</h1>
      <div className='editor-wrapper'>
        <textarea
          value={text}
          onChange={(e) => {setText(e.target.value)}}
        />
        <div className='markdown-wrapper'>
          <ReactMarkdown children={text} />
        </div>
      </div>
    </div>
  )
}

export default RemarkPage