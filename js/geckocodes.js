String.prototype.fromASCII = function(utf) {
//modified from geckocodes
//Original function was created by James Atherton
    var lnbreaks = document.all ? "\r\n" : "\n";
    var ASCIIString = this.replace(/\r/g, "");
    var codeformatted = "";
    if (utf) {
        ASCIIString = utf8ToHex(ASCIIString);
        for (var i = 0; i < ASCIIString.length; i += 2) {
            if (i % 8 == 0 && i > 0) i % 16 == 0 ? codeformatted += lnbreaks : codeformatted += " ";
            codeformatted += ASCIIString.substr(i, 2);
        }
    }
    else {
        for (var x = 0; ASCIIString != ""; x++) {
            if (x % 4 == 0 && x > 0) x % 8 == 0 ? codeformatted += lnbreaks : codeformatted += " ";
            if (Number(ASCIIString.charCodeAt(0)) < 16) codeformatted += "0";
            codeformatted += Number(ASCIIString.charCodeAt(0)).toString(16).toUpperCase();
            ASCIIString = ASCIIString.substr(1);
        }
    }
    return codeformatted;
}

function utf8ToHex(input) {
//Copied straight from geckocodes
//Function was created by James Atherton
    var str = unescape(encodeURIComponent(input));
    var output = "";
    for (var i = 0; i < str.length; i++) {
        var hx = str.charCodeAt(i).toString(16);
        while (hx.length < 2) hx = "0" + hx;
        output += hx;
    }
    return output.toUpperCase();
}

function gecko06(addy, text, utf) {

    addy = parseInt(addy, 16);
    addy |= 0x86000000;
    addy ^= 0x80000000;

    text = text.fromASCII(utf);

    var x = text.replace(/\r/g, "");
    x = x.replace(/ /g, "");
    x = x.replace(/\n/g, "");
    x = x.length / 2;

    text = padTo32(addy) + " " + padTo32(x + 1) + "\n" + text;

    if ((addy & 0xF0000000) != 0) text = "4A000000 90000000\n" + text;

    x %= 8;

    for (y = 0; y < (8 - x); y++) {
        if (y == 0 && x == 0) text += "\n";
        if (x + y == 4) text += " ";
        text += "00";
    }

    return text;
}