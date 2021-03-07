import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Codeblock = (props) => {
    const { language, value } = props;
  return (
    <SyntaxHighlighter language={language} style={twilight}>
      {value}
    </SyntaxHighlighter>
  );
};

export default Codeblock