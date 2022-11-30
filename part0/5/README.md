```mermaid
sequenceDiagram
  participant b as browser
  participant s as server
  b ->> s  : GET &nbsp;&nbsp; https://studies.cs.helsinki.fi/exampleapp/spa
  s -->> b : 200 &nbsp;&nbsp; <HTML code>
  note over b: browser requests the stylesheet <br> and script linked in the HTML
  b ->> s  : GET &nbsp;&nbsp; https://studies.cs.helsinki.fi/exampleapp/main.css
  s -->> b : 200 &nbsp;&nbsp; <main.css>
  b ->>s   : GET &nbsp;&nbsp; https://studies.cs.helsinki.fi/exampleapp/spa.js
  s -->>+ b : 200 &nbsp;&nbsp; <spa.js>
  note over b: browser executes code in spa.js <br> that requests JSON data from server
  b ->> s  : GET &nbsp;&nbsp; https://studies.cs.helsinki.fi/exampleapp/data.json
  s -->> b : < [{ content: "Hakuna Matata", date: "2022-11-30T03:52:57.626Z" }, ...] >
  note over b: browser runs the event handler <br> to parse data and render notes
  deactivate b
```
