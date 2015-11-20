<?php include('_head.php'); ?>
        <section class="site-header container">
            <h1>MA5-Gallery</h1>
            <p>Ultralight responsive jQuery gallery with fullscreen and movie player features</p>
            <p>Documentation at <a href="https://github.com/ma-5/ma5-gallery" target="_blank">GitHub</a></p>
            <br>
            <p>Example 1. Gallery mode with keys controll (space, arrows left right keys, escape)</p>
            <div class="ma5-gallery">
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_1390-thumbnail.jpg" alt="">
                    <figcaption>Kurka wodna</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_1002-thumbnail.jpg" alt="">
                    <figcaption>Łyska</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_1103-thumbnail.jpg" alt="">
                    <figcaption>Kawka</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_0663-thumbnail.jpg" alt="">
                    <figcaption>Kaczka</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_1068-thumbnail.jpg" alt="">
                    <figcaption>Wrona</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_0916-thumbnail.jpg" alt="">
                    <figcaption>Wróbel</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_1155-thumbnail.jpg" alt="">
                    <figcaption>Dzięcioł</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_0922-thumbnail.jpg" alt="">
                    <figcaption>Rudzik</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_1352-thumbnail.jpg" alt="">
                    <figcaption>Kos</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_1769-thumbnail.jpg" alt="">
                    <figcaption>Skowronek</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_0791-thumbnail.jpg" alt="">
                    <figcaption>Pliszka</figcaption>
                </figure>
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_1641-thumbnail.jpg" alt="">
                    <figcaption>Mewa</figcaption>
                </figure>
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
                <figure class="gallery-item">
                    <img src="./images/ptaki/DSC_0149-thumbnail.jpg" alt="">
                    <figcaption>Kaczki</figcaption>
                </figure>

            </div>
            <br><br>
            <p>Example 2. Single mode, only one image</p>
            <figure class="gallery-item">
                <img src="./images/ptaki/DSC_1390-thumbnail.jpg" alt=""></figure><figure class="gallery-item"><img src="./images/ptaki/DSC_1002-thumbnail.jpg" alt="">
            </figure>
            <br><br>
            <p>Example 3. Path to full</p>
            <figure class="gallery-item">
                <img src="./images/ptaki/DSC_0201-thumbnail.jpg" alt="" data-ma5pathtofull="./images/ptaki/DSC_0201.jpg">
            </figure>
        </section>
        <br><br>
        <footer class="container">
            <p>See also:</p>
            <p>jQuery mobile menu: <a href="http://mobile-menu.ma5.pl" target="_blank">MA5 mobile menu</a></p> 
            <p>Gallery without javascript: <a href="http://galeriacss.ma5.pl" target="_blank">MA5 CSSGallery</a></p> 
        </footer>
        <br><br>
<?php include('_footer.php'); ?>
