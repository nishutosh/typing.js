![Logo](images/main-img.png)

Typing.js is a pure javascript **library** which allows you to emulate the most realistic typing effect on your web page in the fastest way possible. You can **change line**, **backspace** words, and put  typing on **hold**. Wanna see watch it [here](https://nishutosh.github.io/typing.js)






### Getting started

* First get the  ```typing/typing.min.js``` file

* Then, just add these lines to your html file

  ```html
  <script src="typing.min.js"></script>
  <script>
      var typing=Typing("hello how are you.")
      typing();
  </script>

  ```
* And, place these span tags where you want your cursor effect.

  ```html
  <span id="text"></span>
  <span id="blinker">|</span>

  ```


its done, you may style your blinker and text as you want


#### How to create effects
---
You can add three functionalities in to your cursor:

1.Delay(```~1000~```): It makes cursor to **stay** at that place for **1000ms**.


```javascript

    var typing=Typing("hey i will wait for 1 sec now~1000~ k one sec is over.")
    typing();


```

2.Nextline(```@```): It makes the cursor to move on to the next line.

```javascript

    var typing=Typing(" line 1 @line 2");
    typing();


```

3.Backspace(```*backspace*```):It makes cursor backspace  words. Just follow these two instructions to use it:
* Type your string that is to be backspaced.like:
          `var typing=Typing("hey i want to backscpace apple");`

* Then  write the text you want to backspace between `**`.like:
        `var typing=Typing("hey i want to backscpace apple*apple* now apple is backspaced");`

**Note**:Let me name the content to be backspaced  as  *backsentence* for the ease of explaining it. 
Firstly do watch out for whitespaces while writing *backsentence*. It should be exact copy of text that it has to backspace. Like for eg ` apple *apple*` will fail because actual sentence has a white space in the end,  while *backsentence* does not.
Secondly do not include wait or next line in *backsentence*. Like `apple*ap@ple*` would also fail.      

### Parameters :

```javascript

    var typing=Typing("hello how are you.",typing speed,blink speed,backspace speed,textspanid,blinkerspanid)
    typing();


```

lets look at thes Parameters:
1. **typing speed**: Typing speed in milliseconds. (default *100*).
2. **blink speed**: Cursor blink speed in milliseconds. (default *300*)
3. **backspace speed**: Cursor  speed in milliseconds while backspacing words. (default *100*)
4. **textspanid**:Your text span id name. (default *text*)
5. **blinkerspanid**:Your blinker span id name. (default *blinker*)
