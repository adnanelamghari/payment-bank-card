/*  Backgrounds
    https://png.pngtree.com/thumb_back/fw800/background/20190820/pngtree-abstract-80-style-background-with-geometric-shapes-trendy-colorful-memphis-design-image_304126.jpg
    https://img.freepik.com/vecteurs-libre/fond-formes-geometriques-design-plat_23-2148374534.jpg?size=626&ext=jpg
    https://wallpapermemory.com/uploads/801/monkey-d-luffy-background-hd-1680x1050-314756.jpg
    https://cdn.hipwallpaper.com/i/57/3/JiDaO9.jpg
    https://image.ibb.co/bVnMrc/g3095.png
    https://images.all-free-download.com/images/graphicthumb/cooking_background_various_ingredients_pan_icons_falling_decor_6828003.jpg
    https://img.grouponcdn.com/deal/VxAy7G1WDivezxCPLLoug1if8X2/t620x376/Vx-1000x600.jpg
    https://i.pinimg.com/originals/6e/d7/e9/6ed7e946922460dd2e536d881d87ebe0.jpg
    https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Programming-World-Map-Wallpaper.jpg
    https://besthqwallpapers.com/img/original/74180/linear-world-map-creative-world-map-concept-art-world-map-on-black-background.jpg
    https://c4.wallpaperflare.com/wallpaper/150/76/890/anonymous-computer-hacker-legion-wallpaper-preview.jpg
    https://a-static.besthdwallpaper.com/one-piece-sunny-mille-fond-d-ecran-3440x1440-8306_15.jpg
    https://i.pinimg.com/originals/2f/5c/97/2f5c974138dc59a69e937a545bdbc41a.jpg
*/

const DEFAULT_LOGO_URL = 'assets/logos/22.svg'; // https://curry.rutabago.com/assets/images/logo/rutabago_logo_white.svg
const ICONS_URI = 'assets/icons/';
const ICONS_EXTENSION = '.svg';

const ccHolderNameInput = document.getElementById('card-holder-input');
const ccCVCInput = document.getElementById('card-secret-cvc-input');
const ccNumberInput = document.getElementById('card-number-input');
const ccExpiryInput = document.getElementById('card-expires-date-input');
let ccNumberPattern = /^\d{0,16}$/g,
    ccNumberSeparator = " ",
    ccNumberInputOldValue,
    ccNumberInputOldCursor,

    ccExpiryPattern = /^\d{0,4}$/g,
    ccExpirySeparator = "/",
    ccExpiryInputOldValue,
    ccExpiryInputOldCursor,

    ccCVCPattern = /[^0-9.]/g;

const mask = (value, limit, separator) => {
        const output = [];
        for (let i = 0; i < value.length; i++) {
            if (i !== 0 && i % limit === 0) {
                output.push(separator);
            }
            output.push(value[i]);
        }
        return output.join("");
    },
    unmask = (value) => value.replace(/[^\d]/g, ''),
    checkSeparator = (position, interval) => Math.floor(position / (interval + 1)),
    ccNumberInputKeyDownHandler = (e) => {
        let el = e.target;
        ccNumberInputOldValue = el.value;
        ccNumberInputOldCursor = el.selectionEnd;
    },
    ccNumberInputHandler = (e) => {
        let el = e.target,
            newValue = unmask(el.value),
            newCursorPosition;
        if (newValue.match(ccNumberPattern)) {
            newValue = mask(newValue, 4, ccNumberSeparator);
            newCursorPosition =
                ccNumberInputOldCursor - checkSeparator(ccNumberInputOldCursor, 4) +
                checkSeparator(ccNumberInputOldCursor + (newValue.length - ccNumberInputOldValue.length), 4) +
                (unmask(newValue).length - unmask(ccNumberInputOldValue).length);
            el.value = (newValue !== "") ? newValue : "";
        } else {
            el.value = ccNumberInputOldValue;
            newCursorPosition = ccNumberInputOldCursor;
        }
        el.setSelectionRange(newCursorPosition, newCursorPosition);
        changeCardNumber(el.value);
        highlightCC(el.value);
    },
    changeCardNumber = (value) => {
        let code = value ? value.replace(/\s/g, '') : '****************';
        for (let i = code.length; i < 16; i++) {
            code += '*';
        }
        const formattedCode = code.match(/(.{1,4})/g);
        document.getElementById('card-number').innerHTML = formattedCode.join(' ');
    },
    highlightCC = (ccValue) => {
        let ccCardType = '',
            ccCardTypePatterns = {
                amex: /^3/,
                visa: /^4/,
                mastercard: /^5/,
                disc: /^6/,
                genric: /(^1|^2|^7|^8|^9|^0)/,
            };
        for (const cardType in ccCardTypePatterns) {
            if (ccCardTypePatterns[cardType].test(ccValue)) {
                ccCardType = cardType;
                break;
            }
        }
        const logoURL = ICONS_URI + ccCardType + ICONS_EXTENSION;
        changeCardLogo((ccCardType && ccCardType.length && ccCardType !== 'genric') ? logoURL : DEFAULT_LOGO_URL);
    },
    changeCardLogo = (url) => {
        document.querySelector('.card-logo').src = url;
    };

const ccExpiryInputKeyDownHandler = (e) => {
        let el = e.target;
        ccExpiryInputOldValue = el.value;
        ccExpiryInputOldCursor = el.selectionEnd;
    },
    ccExpiryInputHandler = (e) => {
        let el = e.target,
            newValue = el.value;
        newValue = unmask(newValue);
        if (newValue.match(ccExpiryPattern)) {
            newValue = mask(newValue, 2, ccExpirySeparator);
            el.value = newValue;
        } else {
            el.value = ccExpiryInputOldValue;
        }
        changeCardExpiresDate(el.value);
    },
    changeCardExpiresDate = (value) => {
        let code = value ? value.replace(/\//g, '') : '****';
        for (let i = code.length; i < 4; i++) {
            code += '*';
        }
        const formattedCode = code.match(/(.{1,2})/g);
        document.getElementById('card-expires-date').innerHTML = formattedCode.join('/');
    };

const ccCardHolderInputKeyDownHandler = (e) => {
    document.getElementById('card-holder').innerHTML = e.target.value ? e.target.value : 'YOUR NAME HERE';
};

const ccCVCSecretInputKeyDownHandler = (e) => {

    },
    changeCVCSecret = (value) => {
        document.getElementById('card-secret-cvc').innerHTML = value ? value : '***';
    },
    ccCVCSecretInputHandler = (e) => {
        e.target.value = e.target.value.replace(ccCVCPattern, '')
        changeCVCSecret(e.target.value);
    },
    ccCVCSecretFocusinHandler = () => {
        document.getElementById('card-back').classList.add('card-back-rotation')
    },
    ccCVCSecretFocusoutHandler = () => {
        document.getElementById('card-back').classList.remove('card-back-rotation')
    };

const setupDefaultSetting = () => {
    changeCardLogo(DEFAULT_LOGO_URL);
};

ccNumberInput.addEventListener('keydown', ccNumberInputKeyDownHandler);
ccNumberInput.addEventListener('input', ccNumberInputHandler);

ccExpiryInput.addEventListener('keydown', ccExpiryInputKeyDownHandler);
ccExpiryInput.addEventListener('input', ccExpiryInputHandler);

ccHolderNameInput.addEventListener('input', ccCardHolderInputKeyDownHandler);

ccCVCInput.addEventListener('keydown', ccCVCSecretInputKeyDownHandler);
ccCVCInput.addEventListener('input', ccCVCSecretInputHandler);
ccCVCInput.addEventListener('focusin', ccCVCSecretFocusinHandler);
ccCVCInput.addEventListener('focusout', ccCVCSecretFocusoutHandler);

document.addEventListener('DOMContentLoaded', setupDefaultSetting);
