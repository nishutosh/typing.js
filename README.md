![Logo](images/main-img.png)

Typing.js is a **library** which allows you to create a typing effect on your web page within seconds. You can **change line**, **backspace** words, and put the typing on **hold** on .Wanna see watch it [here](https://nishutosh.github.io/typing.js)






### How to see it dancing on you page

First get the  ```typing/typing.min.js```

then, just add these line to your html file

```html
<script src="typing.min.js"></script>
<script>
    var typing=Typing("hello how are you.")
    typing();
</script>

```
and place the below html tags where you want your cursor effect.

```html
<span id="text"></span>
<span id="blinker">|</span>

```


its done,you may style the blinker and text as you want


#### How to create effects
-------------------------------------------------------------------------------
You can add three functionalities in to your cursor

1.wait(~200~): It makes cursor to **stay** at that place for **200ms**.


```javascript

    var typing=Typing("hey i will wait for 1 sec now~2000~ k one sec is over.")
    typing();


```


Parameters you can pass:

```javascript

    var typing=Typing("hello how are you.",typing speed,blink speed,backspace speed,textspanid,blinkerspanid)
    typing();


```

lets look at thes Parameters
1. **typing speed**: Typing speed in milliseconds. (default *100*).
2. **blink speed**: Cursor blink speed in milliseconds. (default *300*)
3. **backspace speed**: Cursor  speed in milliseconds while backspacing words. (default *100*)
4. **textspanid**:Your text span id name. (default *text*)
5. **blinkerspanid**:Your blinker span id name. (default *blinker*)
