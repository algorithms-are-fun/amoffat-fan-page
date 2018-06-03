var hook = 0;
export default function Spanify(contents) {
  var res = [];

  for(var i = 0; i < contents.length; i++) {
    res.push(<span id={"spanify-" + hook + i}>
      {contents[i]}
    </span>);
  }

  return res;
}