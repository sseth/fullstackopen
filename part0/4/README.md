```mermaid
sequenceDiagram
  participant b as browser
  participant s as server
  note over b: on submit, browser sends <br> form data to the server 
  b ->> s : POST &nbsp;&nbsp; https://studies.cs.helsinki.fi/exampleapp/new_note &nbsp;&nbsp; <note: "new note">
  note over s: server saves the new note <br> and redirects the browser <br> to the notes page
  s -->> b: 302 &nbsp;&nbsp; (location: /notes)
  b ->> s : GET &nbsp;&nbsp; https://studies.cs.helsinki.fi/exampleapp/notes
  s -->> b : 200 &nbsp;&nbsp; <HTML code>
  b ->> s  : GET &nbsp;&nbsp; https://studies.cs.helsinki.fi/exampleapp/main.css
  s -->> b : 200 &nbsp;&nbsp; <main.css>
  b ->>s   : GET &nbsp;&nbsp; https://studies.cs.helsinki.fi/exampleapp/main.js
  s -->>+ b : 200 &nbsp;&nbsp; <main.js>
  note over b: browser runs the code in main.js
  b ->> s  : GET &nbsp;&nbsp; https://studies.cs.helsinki.fi/exampleapp/data.json
  note over s: server returns notes data, <br> (including the new note)
  s -->> b : 200 &nbsp;&nbsp; < [{ content: "JS es muy elegante", date:"2022-11-28T03:07:29.818Z" }, ...] >
  note over b: browser renders notes
  deactivate b
```