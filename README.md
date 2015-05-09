### MA5-gallery ###
Simple and ultralight jQuery gallery.
>v.1.1

1.1 Add keys control

1.0 Initial

###Features:
* Responsive
* jQuery
* Html5
* CSS3

### Example
* [See example](http://galeria.ma5.pl/)


IMAGES 
Thumbnail and full should place in the same folder:

name-thumbnail.jpg

name.jpg

### 1.Getting Started
```html
<!-- html head -->
<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui, user-scalable=no">
<link href="./stylesheets/ma5gallery.css" media="screen, projection" rel="stylesheet" type="text/css">
<script src="./javascripts/jquery-2.1.1.min.js"></script>
<script src="./javascripts/ma5gallery.js"></script>
```

### 2. Set up HTML

Single MODE
```html
<!-- html body -->
<figure><img src="name-thumbnail.jpg" alt=""></figure>
<figure><img src="name-thumbnail.jpg" alt=""></figure>
```

GALLERY MODE
```html
<!-- html body -->
<div class="ma5-gallery">
    <figure><img src="name-thumbnail.jpg" alt=""></figure>
    <figure><img src="name-thumbnail.jpg" alt=""></figure>
</div>
```

### 3.Call the script

```html
ma5gallery('figure img');
```

License
------------
The MIT License (MIT)