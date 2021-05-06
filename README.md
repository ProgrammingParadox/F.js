# F.js
A formatting library written in vanilla javascript

## usage
Here are the ways to format text:
`_underline_`
`*bold*`
`~strikethrough~`
`^underline^`
`[text](link)`
`[text]{color}`

To format the text with the library, first make an element with the text you want to format
```html
<div id="format">
  _Hello!_<br>
  <br>
  _Your text goes here_
</div>
```

And then, with javaScript, do:
```javascript
F.format(document.getElementById("format"));
```

You can embed it on your website using jsDelivr:
```html
<script src="https://cdn.jsdelivr.net/gh/ProgrammingParadox/F.js@main/main.js"></script>
```
