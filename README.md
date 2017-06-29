![Logo](images/main-img.png)

Typing.js is a **library** which allows you to create the most realistic typing effect on your web page within seconds. You can **change line**, **backspace** words, and put the typing on **hold** on .Wanna see watch it [here](https://nishutosh.github.io/typing.js)






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
---
You can add three functionalities in to your cursor

1.wait(```~200~```): It makes cursor to **stay** at that place for **200ms**.


```javascript

    var typing=Typing("hey i will wait for 1 sec now~2000~ k one sec is over.")
    typing();


```

2.next line(```@```): It makes the cursor to move on to the next line.

```javascript

    var typing=Typing("this first line @this second line");
    typing();


```

3.backspace(```*backspace*```):This is backspace the cursor backspace works.It is easy to use just follow three steps:
  1.Type you string that is to be backspaced.
          `var typing=Typing("hey i want to backscpace apple");`

  2.Then you write the text you want to backspace inside  `*` lets name it *back sentence*
          `var typing=Typing("hey i want to backscpace apple*apple* now apple is backspaced");`
          
  3.do what out for whitespaces while writing *back sentence* it should be exact copy of text it has been put behind` apple *apple*` may fail cause actual sentence has a white space while *back sentence* does not. Secondly do not include wait or next line in *back sentence*        

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
