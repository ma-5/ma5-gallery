### MA5-gallery ###
Simple and ultralight jQuery gallery.
>v.2.0.0 Add fullscren option and movie player features

1.6 Add option for customize path to full image

1.5 Add figcaption

1.4 Add previous next control at full image

1.3 Reorganize code for future development and usability

1.2 Add preload option

1.1 Add keyboard control

1.0 Initial

###Features:
* Responsive
* jQuery
* Html5
* CSS3
* fullscreen
* move player embed compatibile

### Example
* [See example](http://galeria.ma5.pl/)

IMAGES option 1:

Thumbnails and full images should place in the same folder:

name-thumbnail.jpg

name.jpg

```html
<!-- html body -->
<figure class="gallery-item">
    <img src="./path/to/thumbnail/image-thumbnail.jpg" alt="">
</figure>
```

IMAGES option 2:

If you want use path to full image.

```html
<!-- html body -->
<figure class="gallery-item">
    <img src="./path/to/thumbnail/image.jpg" alt="" data-ma5pathtofull="./path/to/full/image.jpg">
</figure>
```


### 1.Getting Started
```html
<!-- html head -->
<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui, user-scalable=no">
<link href="./stylesheets/ma5gallery.css" rel="stylesheet" type="text/css">
<script src="./javascripts/jquery.js"></script>
<script src="./javascripts/ma5gallery.js"></script>
```

### 2. Set up HTML

SINGLE MODE (for display only one image)
```html
<!-- html body -->
<figure class="gallery-item"><img src="name-thumbnail.jpg" alt=""></figure>
<figure class="gallery-item"><img src="name-thumbnail.jpg" alt=""></figure>
```

GALLERY MODE for display gallery with keys controll (space, arrows left right keys, escape)
```html
<!-- html body -->
<div class="ma5-gallery">
    <figure class="gallery-item"><img src="name-thumbnail.jpg" alt=""></figure>
    <figure class="gallery-item"><img src="name-thumbnail.jpg" alt=""></figure>
</div>
```

FIGCAPTION
```html
<!-- html body -->
<figure class="gallery-item">
    <img src="name-thumbnail.jpg" alt="">
    <figcaption>Title</figcaption>
</figure>
```


EMBED MEDIA

```html
<!-- html body -->
<figure class="gallery-item ma5-html">
     <div class="ma5-html-content">
        <div class="ma5-html-content-center">
            <img class="ma5-html-thumbnail" src="https://img.youtube.com/vi/zCRUPWDIgYM/mqdefault.jpg" alt="">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zCRUPWDIgYM?showinfo=0&amp;rel=0" allowfullscreen></iframe>
            </div>
        </div>
     </div>
     <figcaption>Figcaption content <a href="#link">link</a></figcaption>
</figure>
```


### 3.Call the script
Make custom class for gallery items. For example 
```html
<figure class="gallery-item">
    <img src="./path/to/thumbnail/image-thumbnail.jpg"  data-ma5pathtofull="./path/to/full/image.jpg" alt="">
    <figcaption>Title</figcaption>
</figure>
```
and call the script:

```html
    $('gallery-item').ma5gallery({
        preload:true,
        fullscreen:true
    });
```

### 4.Options
preload : true|false (Default false) Download all images to the browser.

fullscreen : true|false (Default false) Turn on fullscreen mode.

License
------------
The MIT License (MIT)
