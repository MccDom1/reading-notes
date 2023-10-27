Read: Class 05

Readings: Images, Color, Text

Images, color, and text matter in web design because they are essential for creating visually appealing, informative, and user-friendly websites.

Images: Images can be used to break up text, add visual interest, and convey information more effectively than text alone. For example, an image of a product can give users a better understanding of what it looks like and how it works than a text description.
Color: Color can be used to create a brand identity, evoke emotions, and highlight important information. For example, using a bright color for a call-to-action button can help it stand out from the rest of the page and encourage users to click it.
Text: Text is the primary way that users interact with websites. It is important to use clear, concise, and easy-to-read text to ensure that users can understand the content of your website.

Reading
HTML Media
Using Images In HTML. Read Common Image Types and Choosing Image Formats.

1.What is a real world use case for the alt attribute being used in a website?
-The alt attribute is used to provide a text alternative for an image. This is important for accessibility, as it allows screen readers to read the description of the image to users who are blind or have low vision.




2.How can you improve accessibility of images in an HTML document?
-In addition to using the alt attribute, there are a few other things you can do to improve the accessibility of images in your HTML documents:

Use descriptive filenames for your images.
Use the longdesc attribute to provide a longer description for complex images.
Use the figure element to group related images together.
Use the figcaption element to provide a caption for an image.



3.Provide an example of when the figure element would be useful in an HTML document.
-The figure element is useful for grouping related images together, such as a photo gallery or a chart and its caption.

For example, the following code would create a photo gallery with two images:

HTML
<figure>
  <img src="cat1.jpg" alt="A black cat sitting on a couch">
  <img src="cat2.jpg" alt="A black cat playing with a ball of yarn">
  <figcaption>My two cats</figcaption>
</figure>
This would allow screen readers to group the two images together and read the caption to users who are blind or have low vision.




4.Describe the difference between a gif image and an svg image, pretend you are 
explaining to an elder in your community.
-GIF images are raster images, which means that they are made up of a grid of pixels. SVG images are vector images, which means that they are made up of mathematical equations.

Raster images are better suited for photorealistic images, while vector images are better suited for scalable graphics, such as logos and icons.



5.What image type would you use to display a screenshot on your website and why?
-The best image type to use to display a screenshot on your website is PNG. PNG images are lossless, which means that the quality of the image is not degraded when it is compressed.

Other image types, such as JPEG, are lossy, which means that the quality of the image is degraded when it is compressed. This is not ideal for screenshots, as you want the screenshot to be as clear and sharp as possible.

Additionally, PNG images support transparency, which can be useful for displaying screenshots with overlays.



Learn CSS
Using Color in CSS. Styling HTML Text Elements

1.Describe the difference between foreground and background colors of an HTML element, pretend you are talking to someone with no technical knowledge.
-The foreground color of an HTML element is the color of the text or other content within the element. The background color of an HTML element is the color of the area behind the text or other content within the element.




2.Your friend asks you to give his colorless blog website a touch up. How would you use color to give his blog some character?
-One way to use color to give a colorless blog website some character is to choose a primary color scheme and use it throughout the website. For example, you could choose a blue and white color scheme and use it for the website's background, text, and navigation links.

Another way to use color to give a colorless blog website some character is to use accent colors. Accent colors are colors that are used to highlight specific elements on a website, such as headings, images, and buttons. For example, you could use a yellow accent color for your blog's headings and a green accent color for your blog's buttons.




3.What should you consider when choosing fonts for an HTML document?
-There are a few things to consider when choosing fonts for an HTML document:

Readability: The font should be easy to read, especially for long passages of text.
Brand identity: The font should reflect the brand identity of the website or document.
Compatibility: The font should be compatible with the browsers and devices that your target audience is using.


4.What do font-size, font-weight, and font-style do to HTML text elements?
-Font-size: The font-size property specifies the size of the text.
Font-weight: The font-weight property specifies the thickness of the text.
Font-style: The font-style property specifies whether the text is normal, italic, or oblique.


5.Describe two ways you could add spacing around the characters displayed in an h1 element.
-Two ways to add spacing around the characters displayed in an h1 element:

Use the letter-spacing property: The letter-spacing property specifies the amount of space between the characters in a text element.
Use the word-spacing property: The word-spacing property specifies the amount of space between the words in a text element.

