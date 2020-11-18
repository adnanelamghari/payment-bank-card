# Payment bank card
A beautiful credit card form for payments in your website that includes card number formatting and automatic card type detection.

This form is developed using Vanilla js (Plain Javascript), so basically this library is compatible with almost all the web apps (But not the perfect library if you are using a modern front end framework). 

## Demo

* Working example location : `docs` directory of this repository.
* [Demo](https://adnanelamghari.github.io/payment-bank-card/)

![](docs/assets/images/demo.gif)

## Usage 
To use this form inside your website : 

1) Add `assets/css/bank-card.css` file in your project from this repository.

2) Add `assets/js/bank-card.js` file in your project from this repository.

3) Add `assets/icons` folder in your project from this repository.

4) Import the `bank-card.css` file in your form html file :
 ```html
    <!-- STYLE TO IMPORT TO YOUR PROJECT -->
    <link href="assets/css/bank-card.css" rel="stylesheet">
    <!-- STYLE TO IMPORT TO YOUR PROJECT -->
```

5) Import `bank-card.js` file in your form html file :

 ```html
<!-- SCRIPT TO IMPORT TO YOUR PROJECT -->
<script src="assets/js/bank-card.js"></script>
<!-- SCRIPT TO IMPORT TO YOUR PROJECT -->
```

Don't forget to update `DEFAULT_LOGO_URL`, `ICONS_URI` in the top of the `bank-card.js` file.

6) In your form html file add the following code :

 ```html
<!-- PART TO COPY TO YOUR PROJECT -->
<div class="card">
    <div class="card-front card-part" id="card-front">
        <img alt="" class="card-front-square card-square" src="assets/icons/sim-card-chip.png">
        <img alt="" class="card-front-square card-square" src="assets/icons/contactless-payment-white.png"/>
        <img alt="" class="card-front-logo card-logo" src="assets/logos/22.svg">
        <p class="card-number" id="card-number">**** **** **** ****</p>
        <div class="card-space-75">
            <span class="card-label">Card holder</span>
            <p class="card-info" id="card-holder">Your name here</p>
        </div>
        <div class="card-space-25">
            <span class="card-label">Expires</span>
            <p class="card-info" id="card-expires-date">**/**</p>
        </div>
    </div>

    <div class="card-back card-part" id="card-back">
        <div class="card-black-line"></div>
        <div class="card-back-content">
            <div class="card-secret">
                <p class="card-secret--last" id="card-secret-cvc">***</p>
            </div>
            <img alt="" class="card-back-logo card-logo" src="assets/logos/22.svg">
        </div>
    </div>
</div>
<div>
    <form>
        <div class="row">
            <label>Card holder :</label>
            <input id="card-holder-input" placeholder="Card holder name" type="text">
        </div>
        <div class="row">
            <label>Card number :</label>
            <input id="card-number-input" maxlength="19" minlength="19" placeholder="Card number" type="text">
        </div>
        <div class="row">
            <div class="col-50">
                <label>Expires :</label>
                <input id="card-expires-date-input" max="1299" maxlength="5" minlength="5" placeholder="Expires"
                       type="text">
            </div>
            <div class="col-50">
                <label>CVC :</label>
                <input id="card-secret-cvc-input" max="999" maxlength="4" min="100" minlength="4" placeholder="CVC"
                       type="text">
            </div>
        </div>
    </form>
</div>
<!-- PART TO COPY TO YOUR PROJECT -->
```

While importing this code to your project, make sure to update the `src` attribute of the images and `script` if you change the directories names

## Important libraries
If you are using a front end framework or library like : Angular, React or Vue, I would suggest you to use those libraries
which going to make it easier for you (There are too many libraries, so i'm going to mention only one on each framework) : 

* [Angular](https://github.com/Bartosz-D3V/ng-payment-card)
* [React](https://github.com/amarofashion/react-credit-cards)
* [Vue](https://github.com/muhammederdem/vue-interactive-paycard)

## Credits
This project is inspired from two projects : 

* [Some logic](https://codepen.io/murani/pen/KyVbrp)
* [Some design](https://codepen.io/veronicadev/pen/VXqZgR)

