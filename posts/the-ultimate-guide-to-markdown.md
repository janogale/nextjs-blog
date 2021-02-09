---
title: "The Ultimate Guide to Markdown"
date: "2021-02-09"
author: "Janagale"
---

It's no secret that we're big fans of Markdown at [Ghost](https://ghost.org/). We built our editor to work with Markdown directly!

Once you get the hang of Markdown, it's an incredibly powerful writing tool which will allow you to write rich content for the web far faster than almost any other method. To get to that point, however, there's a little bit of a learning curve. We thought we'd put together an all inclusive guide to make that curve a little bit shorter, and potentially teach you a few super-user tricks to Markdown that you might not have known.

## What is Markdown

---

Markdown is a plain text formatting syntax for writers. It allows you to quickly write structured content for the web, and have it seamlessly converted to clean, structured HTML.

Back in 2004, Apple pundit John Gruber [came up with the idea](https://daringfireball.net/projects/markdown/) after becoming frustrated by writing long, laborious HTML tags to properly format his content. He devised a simple writing system which would make web based documents both easier to write, and easier to read in their raw state.

Here's a quick example of Markdown in action:

```
The *quick* brown fox, jumped **over** the lazy [dog](https://en.wikipedia.org/wiki/Dog).

```

becomes

The *quick* brown fox, jumped over the lazy [dog](https://en.wikipedia.org/wiki/Dog).

With just a couple of extra characters, Markdown makes rich document formatting quick and beautiful.

## Why do Writers Love Markdown so Much?

---

"Is that it?" - I hear you ask - "I could just click on a few formatting buttons in most editors and achieve the same thing!"

Very true! But we're only just getting started. The range of formatting tools has come a very long way since Markdown's inception in 2004, so you'd be forgiven for wondering what advantages it holds over, say, the "Bold" button in Microsoft Word.

While most novice users do indeed find buttons a bit easier to use, advanced writers often swear by Markdown and nothing else. Why? The biggest reason is *writing flow*.

Using a traditional writing user interface you have to pause your writing every few minutes (or sometimes seconds) and reach for the mouse in order to click, highlight, click a formatting button, and then click back to where you left off in order to continue. This process creates a tiresome, disjointed experience when all you want to do is get the words out of your head and onto the screen.

Markdown allows you to keep your fingers firmly planted on the keyboard as you apply formatting on the fly. In short: You never have to stop typing or think about anything else in order to apply your styles.

It might seem like a small detail, but it can have a really big effect. Once you start writing in Markdown, it's really hard to back to the click-fest of the past.

## Basic Markdown Formatting

---

Ok! You're sold. So how does this work? Let's dive in:

Markdown was designed with the explicit intention to be easily readable by humans. You should find that most of the syntax is pretty simple and intuitive.

Here are the elements you'll use most often:

### Headings

```
# Heading 1
## Heading 2
### Heading 3

```

Headings in Markdown are any line which is prefixed with a `#` symbol. The number of hashes indicates the level of the heading. One hash is converted to an h1, two hashes to an h2 and so on. There are a total of 6 levels which you can make use of - but for most writing, you'll rarely ever need more than 3.

### Text

```
*italic*
**bold**
***bold-italic***
[link](https://example.com)

```

If you want to emphasise a word a *little* bit, wrap it in asterisks. For something that needs more emphasis: double asterisks. If you really want to *drive* the point home, use triple asterisks. If you prefer, you can also use underscores - they're completely interchangeable.

To add a link: wrap the text which you want to be linked in square brackets, followed by the URL to be linked to in parenthesis. An easy way to remember this one is to think of it like turning a word into a button. `[button]` and `(place to go when the button is clicked)` combine to form a link.

### Images

```
![m'lady](https://i.imgur.com/v8IVDka.jpg)

```

Markdown images have exactly the same formatting as a link, except they're prefixed with a `!`. This time, the text in brackets is the `alt text` - or the descriptive text for the image.

![](https://ghost.org/changelog/content/images/2021/01/image-129.png)

In most Markdown editors, you don't have to write this code out. They will provide a tool to allow you to upload an image and insert this code automatically. After that, it will appear in your document.

### Lists

```
* Milk
* Bread
    * Wholegrain
* Butter

```

```
1\. Tidy the kitchen
2. Prepare ingredients
3. Cook delicious things

```

Lists are a formatting nightmare in HTML, but Markdown lists are incredibly easy to manage. For a bullet list, just prefix each like with a `*` - or `-` or `+` and they will be converted to dots. You can also create nested lists; just indent a line with *4 spaces* and it will be nested under the line above.

- Milk
- Bread
- Wholegrain
- Butter

For numbered lists, do exactly the same thing - but use numbers!

### Quotes

```
> To be or not to be, that is the question.

```

When you want to add a quote in Markdown, it's exactly the same as the formatting which you may already be familiar with from your email app of choice when you reply to someone.

> To be or not to be, that is the question.

Prefixing the line with a `>` converts it into a block-quote.

### How can I remember all the Markdown syntax?!

It seems a little daunting at first, but you might be surprised how naturally it comes to you after a couple of posts written in Markdown. Most good Markdown editors come with a built-in cheat sheet to make it a little easier to learn.

![](https://ghost.org/changelog/content/images/2021/01/image-130.png)

Here's the one you can pull up from the [Ghost](https://ghost.org/) editor at any time if you get stuck.

## Intermediate Markdown Formatting

So you've got the Markdown basics nailed and you want to move on to bigger and better things? Excellent. There's much more we can do.

### Horizontal Rules

```
---

```

Want to throw-down a quick divider in your article to denote a visual separation between different sections of text? No problem. 3 dashes produce:

---

A sleek `<hr>` element.

### Code Snippets

```
Some text with an inline `code` snippet

```

```
    .my-link {
        text-decoration: underline;
    }

```

If you're a technical writer, you may want to use example snippets of code to teach your readers a particular syntax (like I'm doing, with this very blog post). Using a single back-tick around a word in a sentence, you can show a quick `code` snippet.

Indenting by 4 spaces will turn an entire paragraph into a code-block.
