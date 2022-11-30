```mermaid
sequenceDiagram
  participant b as browser
  participant s as server
  note over b: on submit, browser runs the form's event handler <br> that saves the new note in memory, re-renders the notes <br> and sends the form data to the server
  b ->> s  : POST &nbsp;&nbsp; https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  note over s: server saves the new note
  s -->> b : 201 &nbsp;&nbsp; <message: "note created">
```