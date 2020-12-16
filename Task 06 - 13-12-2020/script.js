// Element creation method
// Parameters list
// 1. Tag Name - element tag name (ex: div, span, input)
// 2. classNames - if multiple class use space seperator (ex: class1 class2 class3, class4-exp)
// 3. innerHTML - innerHtml assign a html text to the particular element
// 4. inlineStyle - Assign inline style of the element

function createElement(tagName, classNames, innerHTML = "", inlineStyle = "") {
  let element = document.createElement(tagName);
  element.setAttribute("class", classNames);
  element.innerHTML = innerHTML;
  element.style = inlineStyle;
  return element;
}

var container = createElement(
  "div",
  "container",
  `<table>
<td>
    <td>
<input type="text" name="calcualtion" id="calculation" /></td>
<td><button type="button" class="backspace" value="⌫" onclick="removeLastValue()">
⌫
</button></td>
</tr>
</table>`
);

var mainTable = createElement("table", "", "", "");
var tr1 = createElement(
  "tr",
  "",
  `<tr>
<td><input type="button" class="symbol" value="M+" onclick="plusMemory" /></td>
<td><input type="button" class="symbol" value="M-" onclick="minusMemory" /></td>
<td><input type="button" class="symbol" value="MC" onclick="clearMemory" /></td>
<td>
  <input
    type="button"
    class="symbol"
    onclick="insertOperator('/')"
    value="÷"
  />
</td>`
);
var tr2 = createElement(
  "tr",
  "",
  `<td>
<input
  type="button"
  class="number"
  onclick="insertNumber(7)"
  value="7"
/>
</td>
<td>
<input
  type="button"
  class="number"
  onclick="insertNumber(8)"
  value="8"
/>
</td>
<td>
<input
  type="button"
  class="number"
  onclick="insertNumber(9)"
  value="9"
/>
</td>
<td>
<input
  type="button"
  class="symbol"
  onclick="insertOperator('*')"
  value="×"
/>
</td>`
);

var tr3 = createElement(
  "tr",
  "",
  `<td>
<input
  type="button"
  class="number"
  onclick="insertNumber(4)"
  value="4"
/>
</td>
<td>
<input
  type="button"
  class="number"
  onclick="insertNumber(5)"
  value="5"
/>
</td>
<td>
<input
  type="button"
  class="number"
  onclick="insertNumber(6)"
  value="6"
/>
</td>
<td>
<input
  type="button"
  class="symbol"
  onclick="insertOperator('-')"
  value="-"
/>
</td>`
);

var tr4 = createElement(
  "tr",
  "",
  `<td>
<input
  type="button"
  class="number"
  onclick="insertNumber(1)"
  value="1"
/>
</td>
<td>
<input
  type="button"
  class="number"
  onclick="insertNumber(2)"
  value="2"
/>
</td>
<td>
<input
  type="button"
  class="number"
  onclick="insertNumber(3)"
  value="3"
/>
</td>
<td>
<input
  type="button"
  class="symbol"
  onclick="insertOperator('+')"
  value="+"
/>
</td>`
);

var tr5 = createElement(
  "tr",
  "",
  `<td>
<input
  type="button"
  class="symbol"
  onclick="clearData()"
  value="C"
/>
</td>
<td>
<input
  type="button"
  class="number"
  onclick="insertNumber(0)"
  value="0"
/>
</td>
<td>
<input
  type="button"
  class="symbol"
  onclick="convertNumber()"
  value="±"
/>
</td>
<td>
<input type="button" class="symbol" onclick="equal()" value="=" />
</td>`
);

mainTable.append(tr1, tr2, tr3, tr4, tr5);
container.append(mainTable);
document.body.appendChild(container);
