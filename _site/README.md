### Answer questions

1. *For the 404 page, is it okay to add a button below the text which redirects to a page I assign it to?*

Yes.

### Notes
The landing page has a special variable

```yaml
landing-page: true
```
The title permalink for the landing page are provisional. Feel free to edit them. See the front matter on the *landing.html* file.

```
layout: page
landing-page: true # hides header and footer
title: Landing Page
permalink: /landing/
special: true # exclude link from menu
```

Please note that the home page and landing page have almost the same contents. This content can be altered to match what you want to communicate on each. That content is only provisional

You can choose to have a:

1. Static home page with your tailored
2. Blog  archives page as your home page. In this case, you would rename the *blog.html* file to *index.html*.

The 404 and landing page have a special variable that excludes them from being listed on the menu

```yaml
special: true
```

### Customize styles

The theme color of the site can be altered inside the **_sass/variables.scss** file.

### icons

We'll be using fontawesome icons. Want to add more? [Learn how to use here](https://fontawesome.com/how-to-use)

> look into the *Markdown sample* article in the blog page. It has some good insights on how to write articles

### Steps to build your own website

#### 0. Pre-requisites

#### Required
Domain name - Namecheap
Github
Jekyll
Amazon S3
Amazon Cloudformation
Travis and Travis-CI
Cloudflare

### Nice to haves
Github Desktop
Atom (from Github)
Google Analytics
Facebook Pixels
Disqus

### 1. Build a website locally.

### 2. Deploy the website onto the server.
Need the cloudformation.yml file
Delete Gemfile.lock and bundle install and bundle update

### 3. Test changes to the website before deploying.

### buttons

There are three types of buttons
1. A green button. Uses a class of *button*
2. A grey button. Uses a class of *button__light*
3. A button with a simple border radius. Uses a class of *button__simple*

> You can combine these classes to achieve a certain effect. See the following example

```html
  <!-- a green button with a full round border radius -->
  <a href = '' class = 'button'>I'm Green</a>
  <!-- a green button with a subtle border radius -->
  <a href = '' class = 'button button__simple'>Get Started</a>
  <!-- a grey button with a subtle border radius -->
  <a href = '' class = 'button__light button__simple'>Learn More</a>
```
Some of this code is in the *_layouts/welcome.html* template

### comments
Disqus comments are enabled on posts by default
To disable Disqus comments on a post, include the following in the front matter
```yaml
comments: false
```

### MailChimp buttons
To ensure that we don't repeat ourselves, we load the MailChimp code once. This code is loaded in *_includes/subscribe/mailchimp.md*. This script is then included in opt-in templates. This has already been done.

Therefore all you need to do to make a button that triggers the MailChimp popup widget is add a *button__opt* class to the html element you wish.

```
<div class = 'button__opt'>Show the mailchimp box</div>
```
> the button element must not be a **div**

## Customize the bottom opt-in box
You may want to customize what appears in the bottom opt-in box for each page.

To make this possible, I have set defaults for this in the **_config.yml** file. In situations where you don't need any customization, these defaults will be used.

```yaml
...
optin:
  button: 'Optin Now'
  description: We don't send junk emails; that's a promise.
  heading: Subscribe to updates
  link:
    url: '/blog/'
    text: 'All Articles'
    type: null
```

To do the actual customization, check how I override these default values in the **landing.md** file.

```yaml
optin:
  button: 'Optin Now'
  description: Yeay ........ dot dot dot
  heading: Stay Tuned
  link:
    url: 'https://www.tutorialspoint.com/amazon_web.../amazon_web_services_tutorial.pdf'
    text: 'Download PDF'
    type: 'download'
```

#### Note

1. If you choose to customize the opt-in box, you must specify every value. Failure to do so will break things.
2. If you want to add a download link, you must specify that the link is of type *download*, like so

```yaml
link:
  type: 'download'
```
3. Identifying is of outmost importance

> Now, how about if you want to edit the bottom opt-in box template? This file is at ***_includes/subscribe/optin.html***
