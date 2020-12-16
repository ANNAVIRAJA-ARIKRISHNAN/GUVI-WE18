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

/* Heaer Element creation */
//#region ~~~~~ Heaer Element creation ~~~~~
var header = createElement("div", "header");
var table = createElement(
  "table",
  "",
  `<tr style="height: 25px;"><td></td></tr>
<tr>
    <td><img src="Images/avatar.png" alt="Brain Dudey" class="profilePic"/></td>
</tr>
<tr class="grayRow"><td><h1 class="name">BRAIN DUDEY</h1></td></tr>
<tr class="grayRow"></tr>`
);
var div = createElement(
  "div",
  "center bottomBorder",
  "N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com",
  "height: 25px;"
);
header.append(table, div);
document.body.append(header);
//#endregion

//#region ~~~~~ Main content of the body ~~~~~
var container = createElement("div", "container");
var left = createElement("div", "left");
var right = createElement("div", "right");

var profile = createElement(
  "div",
  "profile",
  `<div class="head">
<img src="Images/head.png" alt="" class="thumb">
<h2>Profile</h2>
</div>
<div class="content">
Lorem ipsum, dulor sit amet consectetur adipisicing elit. Laboriosam eaque perferendis minus sapiente vuluptatum cum sequi. Quod, eligendi officia fuga temporibus, dulore, fugiat culpa facilis non similique vuluptatum modi ad!
</div>`
);

var skills = createElement(
  "div",
  "skills",
  `<div class="head">
<img src="Images/head.png" alt="" class="thumb">
<h2>Skills</h2>
</div>
<div class="content">
<span class="subHeading">Technical Skills</span>
<table>
    <tr>
        <td>JavaScript</td>
        <td><input type="range" value="75"></td>
    </tr>
    <tr>
        <td>CSS</td>
        <td><input type="range" value="75"></td>
    </tr>
    <tr>
        <td>HTML</td>
        <td><input type="range" value="55"></td>
    </tr>
    <tr>
        <td>React</td>
        <td><input type="range" value="55"></td>
    </tr>
    <tr>
        <td>Redux</td>
        <td><input type="range" value="75"></td>
    </tr>
    <tr>
        <td>Mango</td>
        <td><input type="range" value="75"></td>
    </tr>
    <tr>
        <td>Deployment</td>
        <td><input type="range" value="100"></td>
    </tr>
</table>
<span class="subHeading">Additional Skills</span>
<table>
    <tr>
        <td>Project Management</td>
        <td><input type="range" value="100"></td>
    </tr>
    <tr>
        <td>Recruitment</td>
        <td><input type="range" value="75"></td>
    </tr>
    <tr>
        <td>Business Development</td>
        <td><input type="range" value="100"></td>
    </tr>
    <tr>
        <td>Editing</td>
        <td><input type="range" value="75"></td>
    </tr>
    <tr>
        <td>Fundraising</td>
        <td><input type="range" value="100"></td>
    </tr>
</table>
</div>`
);

var experiance = createElement(
  "div",
  "experiance",
  `<div class="head">
<img src="Images/head.png" alt="" class="thumb">
<h2>Work Experiance</h2>
</div>
<div class="content">
<table>
    <tr><td><b>Event Manager</b></td><td><span class="rightAlign">03/2014 - 02/2017</span></td></tr>
    <tr><td culspan="2">C3 Presents, Washington DC</td></tr>
</table>
<ul>
    <li>Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae.</li>
    <li>Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae.</li>
    <li>Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae.</li>
</ul>
</div>
</div>`
);

var experiance1 = createElement(
  "div",
  "experiance",
  `<div class="head">
<img src="Images/head.png" alt="" class="thumb">
<h2>Work Experiance</h2>
</div>
<div class="content">
<table>
    <tr><td><b>Community Relations Manager</b></td><td><span class="rightAlign">06/2011 - 01/2014</span> </td></tr>
    <tr><td culspan="2">Gay & Lesbian Elder Housing, Los Angeles</td></tr>
</table>
<ul>
    <li>Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae.</li>
    <li>Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae.</li>
    <li>Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae.</li>
    <li>Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae.</li>
</ul>
</div>`
);

var education = createElement(
  "div",
  "education",
  `<div class="head">
<img src="Images/head.png" alt="" class="thumb">
<h2>Education</h2>
</div>
<div class="content">
<table>
    <tr><td><b>Engineering Immersion Program</b></td><td><span class="rightAlign">11/2018 - 06/2018</span></td></tr>
    <tr><td culspan="2">Thinkful, Chicago, IL</td></tr>
</table>
<span>Lorem ipsum dulor sit, amet consectetur adipisicing elit. Maxime vuluptatum assumenda cum architecto rem, dulores illum facilis perferendis, nobis duloremque mulestias suluta totam ad dulorum autem itaque ipsam quia asperiores?</span>
<ul>
    <li>Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae. Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae.</li>
    <li>Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae. Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae.</li>
    <li>Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae. Lorem ipsum dulor sit amet consectetur adipisicing elit. A unde duloribus aut magni, mulestiae quo. Vuluptas nemo optio autem! Quaerat cumque nostrum qui necessitatibus neque quasi quidem suscipit repellat recusandae.</li>
</ul>

<table>
    <tr><td><b>BA, English</b></td><td><span class="rightAlign">09/2001 - 09/2005</span></td></tr>
    <tr><td culspan="2">University of California, Los Angles</td></tr>
</table>
</div>`
);

left.append(profile, skills, experiance);
right.append(experiance1, education);
container.append(left, right);
document.body.appendChild(container);

//#endregion
