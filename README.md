![Logo](main-img.png)

Typing.js is a **library** which allows you to create a typing effect on your web page within seconds. You can **change lines**, **backspace** words, and put the typing on **hold** on .Wanna see watch it [here](https://nishutosh.github.io/typing.js)

now lets see




### How to see it dancing on you page

Just add these line to your html file

```html
<script src="typing.js"></script>
<script>
    var typing=Typing("hello how are you.")
    typing();
</script>

```
Voila ,game on

now lets look how to  add effects

#### How to create effects

Parameters you can pass:

```javascript

    var typing=Typing("hello how are you.",type_speed,blink_speed,backspace_speed,mainspanid,blinkerid)
    typing();


```
