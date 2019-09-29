# Introduction to Web Development

Welcome to your first taste working with HTML and CSS to build a website! In this tutorial, we will be creating a simple website that you can later extend. You'll be introduced to making navigation bars, content, images, and footers, and styling them appropriately.

## Links

If you want to see what the website will look like, check out the link below:

https://dsc.mtahacks.ca/img/ads/index.html

You can also see all the source code for the final product here (we recommend you only reference it for debugging purposes, etc.)

https://codepen.io/gzinck/pen/aboXBOL

## Getting the HTML together

The first step when building websites is always with the HTML. We can get the general structure up and running, and then we’ll add styles later.

### Boilerplate

To start off, we fill in site metadata in the document `head`. Most importantly, include the language, character set, and viewport scale. This section can also include a title (the words you see in the website's tab on a browser) and favicon (the icon beside the title in a tab). Read more about the document `head` at: https://www.w3schools.com/html/html_head.asp

```
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Example Site</title>
</head>
</html>
```

### Adding content to the website

After the `head` section, we need to add the content of our website in the body.

```
<html lang="en">
<head>
    ...
</head>
<body>
</body>
</html>
```

Within the body will be everything a user sees displayed in their browser!

To start, let's add some text. To do this, simply place desired text in a `<p>` tag. We will use a text block called *Lorem ipsum* as placeholder text...

```
...
<body>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget velit aliquet sagittis id consectetur. Aenean et tortor at risus viverra adipiscing at in tellus. Nulla aliquet enim tortor at auctor urna nunc. Volutpat est velit egestas dui. Malesuada fames ac turpis egestas maecenas pharetra. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Auctor eu augue ut lectus. Ut diam quam nulla porttitor massa id. Massa vitae tortor condimentum lacinia quis vel eros donec ac. A diam maecenas sed enim. Sit amet aliquam id diam maecenas ultricies mi eget. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Id nibh tortor id aliquet lectus.
  </p>
</body>
...
```

We can bold some of the text with the `<b></b>` tags or italicize with the `<i></i>` tags.

```
...
<body>
  <p>
    <b>Lorem ipsum dolor sit amet</b>, ...
  </p>
</body>
...
```

We want to start adding more content, though, like the navigation bar at the top of the screen and the footer at the bottom. We can do this by adding it into the body of the page, but it's a good idea to organize your text.

We'll put all of our main content within a `<main>` tag.

Now, you can add more paragraphs in more `<p>` tags after the previous one, but still within the `main` section.

Now, your code should look like this:

```
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
  <main>
    <p>
      <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget velit aliquet sagittis id consectetur. Aenean et tortor at risus viverra adipiscing at in tellus. Nulla aliquet enim tortor at auctor urna nunc. Volutpat est velit egestas dui. Malesuada fames ac turpis egestas maecenas pharetra. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Auctor eu augue ut lectus. Ut diam quam nulla porttitor massa id. Massa vitae tortor condimentum lacinia quis vel eros donec ac. A diam maecenas sed enim. Sit amet aliquam id diam maecenas ultricies mi eget. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Id nibh tortor id aliquet lectus.
    </p>
    <p>
      <i>Nisl rhoncus mattis rhoncus urna neque. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eget felis eget nunc lobortis mattis. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Volutpat consequat mauris nunc congue nisi. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Velit aliquet sagittis id consectetur. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Quam elementum pulvinar etiam non quam lacus. Aliquet risus feugiat in ante. Et magnis dis parturient montes nascetur ridiculus mus mauris. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Adipiscing enim eu turpis egestas. Id aliquet risus feugiat in ante metus dictum. Fringilla est ullamcorper eget nulla. Tempus iaculis urna id volutpat. Turpis egestas integer eget aliquet nibh praesent tristique magna.</i>
    </p>
    <p>
      Urna id volutpat lacus laoreet non curabitur gravida arcu ac. A diam sollicitudin tempor id eu nisl nunc mi. Integer feugiat scelerisque varius morbi enim nunc faucibus a. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Tempor orci dapibus ultrices in iaculis nunc. Viverra maecenas accumsan lacus vel facilisis volutpat. Nisl pretium fusce id velit. Ultrices vitae auctor eu augue ut lectus arcu. Sit amet consectetur adipiscing elit ut aliquam. Varius quam quisque id diam vel. Nisl nunc mi ipsum faucibus vitae aliquet. Neque aliquam vestibulum morbi blandit cursus risus at. Felis eget nunc lobortis mattis aliquam faucibus purus in.
    </p>
  </main>
</body>
</html>
```

#### Adding image content

To add an image, use the `<img>` tag. Note: this tag cannot wrap other tags. It should end with ` />`. All images must contain at minimum `src` and `alt` attributes. `src` is a string that tells the browser where to retrieve the image. It can be a path to a local file or a URL. `alt` is the text displayed to screen readers, or to any user when the image retrieval fails for any reason. Read more about images here: https://www.w3schools.com/tags/tag_img.asp

```
<img src="http://dsc.mtahacks.ca/img/ads/dsc-exec-apply-4.jpg" alt="This is an empty image! Yay!" />
```

### Adding the header of the page

In HTML, you have six `header` tags. They are `<h1>`, `<h2>`, `<h3>`, etc. It is good practice to use these in order of importance. Ie: your page or website title is an `<h1>`, subheads are `<h2>`, etc.

```
<body>
  <header>
    <h1>Shmorgraem</h1>
  </header>
...
</body>
```

### Adding the navigation for the webpage

While main content is placed in `<main>` tag, navigation should be placed in a `<nav>` tag.

Unordered lists are created with a `<ul>` tag, and content within the list is labeled with a `<li>` (list item) tag. These are often useful for menus, but can be used in other contexts as well. Imagine anywhere you might use a bullet style list. Read more about HTML lists here: https://www.w3schools.com/html/html_lists.asp

```
<header>
  <h1>Shmorgraem</h1>
  <nav>
    <ul>
      <li><a href="http://mtahacks.ca/">MtA Hacks</a></li>
      <li><a href="http://dsc.mtahacks.ca/">DSC</a></li>
    </ul>
  </nav>
</header>
```

### Making the footer

After the main section (but before the ending `</body>` tag) we will add a footer. Again, following the trend of using the `<header>` and `<main>` tags, our footer will be wrapped in a `<footer>` tag.

Note: HTML supports some basic symbols, like the copyright used here. To read more about HTML symbols, read here: https://www.w3schools.com/html/html_symbols.asp
If you want to get more creative, many free icons can be imported from libraries such as Font Awesome. This information can be found here: https://www.w3schools.com/icons/

```
  </main>
  <footer>
    <p>&copy; 2019 Shmorg Shmorg and the Graeminator.<p>
  </footer>
</html>
```

## Stylin' with the CSS

To add styles to the document, we’ll go into the CSS tab in the Codepen

### Adding fonts with Google Fonts

Google has many free fonts you can use as a web developer. We have used Raleway for this example, but feel free to browse and try something else. The full directory is here: https://fonts.google.com/

We’ll select the Raleway font by clicking the + button. Then, we’ll embed it in our CSS using the @IMPORT tag on the fonts page.

```
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
```

Now that we have fonts loaded in, we need to specify where we use the font. We can select all items in the HTML using the `*` selector.

```
* {
  font-family: "Raleway", sans-serif;
}
```

If you reload the page, you will notice that all of the text on the page now has this new font.

### Resets

Unfortunately, when we create an HTML document, most browsers add some styles automatically. We often need to remove these styles with “resets”. We’ll do this with the body’s margin, setting it to 0 in all directions.

```
body {
  margin: 0;
}
```

You might wonder if you should put this style beneath the previous one, or above. At this point, it does not matter (though, one might make more logical sense). You should group your styles in ways that seem appropriate. If you have two styles that conflict, though, sometimes the later style will override the earlier one (unless one style is more specific). We won’t have to worry about this case today.

### Header

First, we’ll add styles to the header to turn it into a modern navigation bar.

#### General

We want to add colour to our header, so we’ve chosen a nice red shade. Colors in CSS are in hexadecimal format, where the first two characters indicate the amount of red, the next two indicate the green, and the final two indicate the blue. You can read more about hex colours here:

The `color` attribute is not the color of the background: it is the colour of the text. Note that all child elements of the header will adopt the colour chosen. There are many tools available to find colours and their codes, one we recommend is: https://www.colorhexa.com/ To use this without knowing a colour code in advance, click the circle on the left of the search bar and a standard colour wheel will appear. Searching the colour will give other complimentary and similar colours, with hex as well as RGB values (RGB can be useful in more advanced CSS projects)

When addressing size in CSS, there are four main tactics. The first is to use pixels, which create a fixed size no matter the screen size your application is being viewed from. The second is to use percents, which calculate a size based on the height or width of the current screen. These are the two we will focus on today. There are also `ems` which are similar to pixels, and `vh` (view height) or `vw` (view width) which are similar to percent. We’ll add padding such that there’s 70px above, 10% on the sides, and 10px on the bottom. This ensures that it responds to different screen sizes by increasing and decreasing the padding on the side.

```
header {
  background-color: #DB4437;
  color: #FFF;
  padding: 70px 10% 10px 10%;
}
```

#### Menu Items

We also want to make the menu look attractive. Right now, it looks like a list. It’s standard to make your navigation have a list format with `ul` tags, but we can remove the list style with the below settings. We also add some padding and margins to the `li` list items so that the links have some white space between them. Experiment adjusting these values to suit your aesthetic desires.

```
ul {
  list-style: none;
}

li {
  padding: 5px 10px;
  margin: 0 5px;
}
```

We specified that text in the header should be white, but you’ll notice that the links are colored and underlined, depending on the browser. We need to standardize this by explicitly styling the links in the list items to have no text decoration and a white colour.

```
li a {
  text-decoration: none;
  color: #FFF;
  padding: 5px;
}
```

We can also make the links change when we hover over them. The below rule allows us to bold the text and add a border underneath it whenever we put the cursor on top of the link.

```
li a:hover {
  font-weight: 700;
  border-bottom: 2px solid #FFF;
}
```

#### Flexbox

It might be nice to have our header elements aligned horizontally. To accomplish this, we will use flexboxes. We frequently use flexboxes to align items on websites, so it might make sense to reuse the same styles in multiple areas of the site. To do this, we can add our desired styles to a class selector which can be reused.

To start, we need to go back to our HTML and add classes to some of our tags.

```
<header class="flex-bw">
    ...
    <nav>
      <ul class="flex-right">
        ...
      </ul>
    </nav>
  </header>
```

Now, we can target these classes in our CSS using the class selector. We would like to use a flexbox to align items properly. Flexboxes are extremely versatile and helpful in creating responsive design (which isn’t a focus of this exercise, but useful nonetheless). A cheatsheet has been built by CSS Tricks, which we highly recommend saving as a reference: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

```
.flex-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.flex-bw {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### Main Content

With the header mostly complete (you’re welcome to add more if you like), it’s time to add styles to the main section of the website.

#### General

First, we’ll add some padding to the main section. This makes sure that the text is not running straight to the edge of the screen.

```
main {
  padding: 25px 10%;
}
```

We’ll also add some padding to the top and bottom of paragraphs. Note that the below rule is equivalent to `padding: 10px 0px 10px 0px`.

```
p {
  padding: 10px 0;
}
```

#### Images

We want to make the image stay within the bounds of the screen. We’ll make a class for images that take 100% of the width (constrained to the width of the main section, though): `img-full-width`. We’ll add this to the HTML.

```
<img class="img-full-width" src="http://dsc.mtahacks.ca/img/ads/dsc-exec-apply-4.jpg" alt="This is an empty image! Yay!" />
```

Now, we’ll add the properties to the CSS with a class selector.

```
img.img-full-width {
  width: 100%;
  height: auto;
}
```

### Footer

The last step is to style the footer. We’ll do similar padding here, with 10px above/below and 10% on the sides. We’ll make it the same colours as the header. Finally, we’ll center the text at the bottom using the `text-align` property.

```
footer {
  padding: 10px 10%;
  background-color: #DB4437;
  color: #FFF;
}

footer p {
  padding: 0;
  text-align: center;
}
```

Congratulations! You’ve completed the lab! Now, see what you can do to make this page sparkle.

- What if you tried embedding a YouTube video? Or a Twitter feed? You can find embed HTML on many social websites. You might need to look up how to style them nicely.
- What does it look like on smaller screen sizes? Can you try adding styles that make it look better on mobile? Look into media queries using `@media screen and ( ... )` to create responsive designs with breakpoints. Also, experiment more with flexbox!
-Check out some of the links above! Like using icons from Font Awesome. https://www.w3schools.com/icons/
https://fontawesome.com/
-Instead of linking to external sites, create another HTML file and link to it in your menu. You now have a website with multiple pages!
