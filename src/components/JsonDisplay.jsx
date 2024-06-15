import '../styles/JsonDisplay.css'

export function JsonDisplay({ data, tittle }){
    const syntaxHighlight = (json) => {
        if (typeof json !== 'string') {
          json = JSON.stringify(json, null, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(:)?|[-]?\d+(\.\d+)?([eE][+\-]?\d+)?|true|false|null)/g, (match) => {
          let cls = 'number';
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key';
            } else {
              cls = 'string';
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean';
          } else if (/null/.test(match)) {
            cls = 'null';
          }
          return `<span class="${cls}">${match}</span>`;
        });
      };
    return(
        <div className='contenedor-jsons'>
            <h3 className='tittle'>{tittle}</h3>
            <pre className="json-viewer" dangerouslySetInnerHTML={{ __html: syntaxHighlight(data) }}></pre>
        </div>
    )
}