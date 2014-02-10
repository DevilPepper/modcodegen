function clearNhide(t, n) {
    for (x = 0; x <= n; x++) {
        var i = '';
        i = t + x;
        document.getElementById(i).innerHTML = '';
        document.getElementById(i).style.display = 'none';
        i = null;
    }
    t = null;
    n = null;
}

function unHide(t, n) {
    for (x = 0; x <= n; x++) {
        var i = '';
        i = t + x;
        document.getElementById(i).style.display = '';
        //document.getElementById(i).style.display = 'inline';
        i = null;
    }
    t = null;
    n = null;
}

function makeRadio(fx, n, text, where) {
    var newBtn = document.createElement('input');
    newBtn.setAttribute('onclick', fx);
    newBtn.setAttribute('name', n);
    newBtn.setAttribute('type', 'radio');
    newBtn.setAttribute('value', text);
    document.getElementById(where).appendChild(newBtn);

    newBtn = null;
    fx = null;
    n = null;
    text = null;
    where = null;
}

function makeButton(fx, n, text, where) {
    var newBtn = document.createElement('input');
    newBtn.setAttribute('onclick', fx);
    newBtn.setAttribute('name', n);
    newBtn.setAttribute('type', 'button');
    newBtn.setAttribute('value', text);
    document.getElementById(where).appendChild(newBtn);

    newBtn = null;
    fx = null;
    n = null;
    text = null;
    where = null;
}

function makeTextArea(id, col, row, where) {
    //<textarea id=("txt" + id) cols=col rows=row>
    var newIn = document.createElement('textarea');
    newIn.setAttribute('id', 'txt' + id);
    newIn.setAttribute('cols', col);
    newIn.setAttribute('rows', row);
    newIn.setAttribute('style', 'resize:none;');
    document.getElementById(where).appendChild(newIn);

    newIn = null;
    id = null;
    col = null;
    row = null;
    where = null;
}

function makeCheck(id, where) {
    //<input id="Checkbox1" type="checkbox" />
    var newIn = document.createElement('input');
    newIn.setAttribute('id', 'chk' + id);
    newIn.setAttribute('type', 'checkbox');
    document.getElementById(where).appendChild(newIn);

    newIn = null;
    id = null;
    where = null;
}
function makeInputBox(id, where) {
    //input id="frid49" name="frid49" type="text" size="6" maxlength="6"
    var newIn = document.createElement('input');
    newIn.setAttribute('id', 'txt' + id);
    newIn.setAttribute('type', 'text');
    newIn.setAttribute('size', 6);
    document.getElementById(where).appendChild(newIn);

    newIn = null;
    id = null;
    where = null;
}

function makeHR(where) {
    var newHR = document.createElement('hr');
    document.getElementById(where).appendChild(newHR);

    newHR = null;
    where = null;
}

function makeBR(where) {
    var newBR = document.createElement('br');
    document.getElementById(where).appendChild(newBR);

    newBR = null;
    where = null;
}

function makeDiv(id, style, where) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'div' + id);
    newDiv.setAttribute('style', style);
    document.getElementById(where).appendChild(newDiv);

    newDiv = null;
    id = null;
    style = null;
    where = null;
}

function makeSlct(t, n, where, eChange) {
    var newSlct = document.createElement('select');
    newSlct.setAttribute('id', 'slct' + t );
    newSlct.setAttribute('name', 'slct' + t );
    if(eChange) newSlct.setAttribute('onchange', 'return slct'+ t +'_onchange()');
    document.getElementById(where).appendChild(newSlct);
    for (x = 0; x <= n; x++) {
        var newOpt = document.createElement('option');
        newOpt.setAttribute('value', x);
        newOpt.setAttribute('id', ('opt' + t + x));
        newSlct.appendChild(newOpt);

        newOpt = null;
    }
    newSlct = null;
    t = null;
    n = null;
    where = null;
    eChange = null;
}

function noSlct(t, where) {
    var newSlct = document.createElement('select');
    newSlct.setAttribute('id', 'slct' + t);
    newSlct.setAttribute('name', 'slct' + t);
    newSlct.setAttribute('disabled', 'disabled');
    document.getElementById(where).appendChild(newSlct);
    var newOpt = document.createElement('option');
    newOpt.setAttribute('value', 0);
    newOpt.setAttribute('id', ('opt' + t + 0));
    newSlct.appendChild(newOpt);

    newOpt = null;
    newSlct = null;
    t = null;
    n = null;
    where = null;
    eChange = null;
}

function makeTable(id, where, border){
    var newTable = document.createElement('table')
    newTable.setAttribute('id', 'tbl' + id);
    newTable.setAttribute('cellpadding', '5');
    newTable.setAttribute('cellspacing', '0');
    newTable.setAttribute('border', border);
    newTable.setAttribute('style', 'width: 100%;');
    document.getElementById(where).appendChild(newTable);
    
    id = null;
    newTable = null;
    where = null;
}

function makeTD(id, where) {
    var newTD = document.createElement('td');
    newTD.setAttribute('id', 'td' + id);
    document.getElementById(where).appendChild(newTD);

    id = null;
    newTD = null;
    where = null;
}

function makeTR(id, where) {
    var newTR = document.createElement('tr');
    newTR.setAttribute('id', 'tr' + id);
    document.getElementById(where).appendChild(newTR);

    id = null;
    newTR = null;
    where = null;
}

function makeLbl(t, i, where) {
    var newLbl = document.createElement('label');
    newLbl.setAttribute('id', 'lbl' + i);
    document.getElementById(where).appendChild(newLbl);
    newLbl.innerHTML = t;

    newLbl = null;
    t = null;
    i = null;
    where = null;
}

function makeA(t, i, where) {
    var newA = document.createElement('a');
    newA.setAttribute('href', t);
    newA.setAttribute('target', '_blank');
    document.getElementById(where).appendChild(newA);
    newA.innerHTML = i;

    newA = null;
    t = null;
    i = null;
    where = null;
}

function removeElement(elementID) {
    if (document.getElementById(elementID)) {
        var ele = document.getElementById(elementID);
        ele.parentNode.removeChild(ele);
        
        ele = null;
    }
    elementID = null;
}

function removeSlct(Slctid) {
    if (document.getElementById(Slctid)) {
        var SlctBox = document.getElementById(Slctid);
        while (SlctBox.length > 0) {
            SlctBox.options.remove(0);
        }
        SlctBox.parentNode.removeChild(SlctBox);
        SlctBox = null;
    }
    Slctid = null;
}

function removeNextSibling(elementID) {
    var ele = document.getElementById(elementID);
    while (ele.nextSibling) { //while there is a next sibling...
        ele.parentNode.removeChild(ele.nextSibling); //...delete it
    }
    ele = null;
    elementID = null;
}

function getOptionText(element) {
    element = document.getElementById(element);
    try {
        return element.options[element.selectedIndex].text;
    } finally {
        element = null;
    }
}

function load_binary_resource(url) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    // The following line says we want to receive data as Binary and not as Unicode
    req.overrideMimeType('text/plain; charset=x-user-defined');
    req.send(null);

    url = null;
    try {
        if (req.status != 200) return '';
        else return req.responseText;
    } finally {
        req = null;
    }
}
/*
function ReadTableContents(binread, beginTable, endTable, s) {
    var t = 0;
    beginTable &= 0x0FFFFFFF;
    endTable &= 0x0FFFFFFF;
    while (beginTable <= endTable) {
        if (binread.getPosition() >= binread.getSize()) break;
        binread.seek(beginTable);
        var pointerHere = binread.readUInt32();
        binread.seek(pointerHere);
        var txtTable = '';
        var c = binread.readChar();
        while (c != '\0') {
            txtTable += c;
            c = binread.readChar();
        }
        document.getElementById('opt' + s + t).innerHTML = txtTable.Replace("\'", "\\\'").Replace("ããã¼", "???").Replace("\"", "\\\"");
        beginTable += 0x4;
        t++;
    }
} 
*/

function ReadTableContents(file, s) {
    var binread = new jDataView(load_binary_resource(file));
    var t = 0;
    var beginTable = binread.getUint32(0x0, false);
    var endTable = binread.getUint32(0x4, false);
    while (beginTable <= endTable) {
        if (binread.tell() >= binread.length) break;
        binread.seek(beginTable);
        var pointerHere = (binread.getUint32(binread.tell(), false) & 0x0FFFFFFF);
        binread.seek(pointerHere);
        var txtTable = '';
        var c = binread.getUint8();
        while (c != 0) {
            txtTable += binread.getChar(binread.tell() - 1);
            c = binread.getUint8();
        }
        document.getElementById('opt' + s + t).innerHTML = txtTable; //.replace("ããã¼", "???"); //.Replace("\'", "\\\'").Replace("\"", "\\\"");
        beginTable += 0x4;
        t++;

        pointerHere = null;
        txtTable = null;
        c = null;
    }
    binread = null;
    t = null;
    beginTable = null;
    endTable = null;
    file = null;
    s = null;
}

//----------------------------------
function swap16(val) {
    try {
        return ((val & 0xFF) << 8)
             | ((val >> 8) & 0xFF);
    } finally {
        val = null;
    }
}
function swap32(val) {
    try {
        return ((val & 0xFF) << 24)
             | ((val & 0xFF00) << 8)
             | ((val >> 8) & 0xFF00)
             | ((val >> 24) & 0xFF);
    } finally {
        val = null;
    }
}

function padTo8(d) {
    var hex = Number((d & 0xFF)).toString(16).toUpperCase();
    while (hex.length < 2) hex = "0" + hex;

    d = null;
    try {
        return hex;
    } finally {
        hex = null;
    }
}

function padTo16(d) {
    var hex = Number((d & 0xFFFF)).toString(16).toUpperCase();
    while (hex.length < 4) hex = "0" + hex;

    d = null;
    try {
        return hex;
    } finally {
        hex = null;
    }
}

function padTo32(d) {
    var hex = Number((d & 0xFFFFFFFF)).toString(16).toUpperCase();
    while (hex.length < 8) hex = "0" + hex;

    d = null;
    try {
        return hex;
    } finally {
        hex = null;
    }
}

function padTo31(d) {
    var hex = Number((d & 0xFFFFFFFF)).toString(16).toUpperCase();
    while (hex.length < 7) hex = "0" + hex;

    d = null;
    try {
        return hex;
    } finally {
        hex = null;
    }
}


String.prototype.wordWrap = function(m, b, c) {
    var i, j, l, s, r;
    if (m < 1)
        return this;
    for (i = -1, l = (r = this.split("\n")).length; ++i < l; r[i] += s)
        for (s = r[i], r[i] = ""; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : ""))
        j = c == 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length
            || c == 1 && m || j.input.length + (j = s.slice(m).match(/^\S*/)).input.length;
    return r.join("\n");
};

String.prototype.toHex = function() {
    //modified from geckocodes
    //Original function was created by James Atherton

    //return this.replace(/[\s\S]/g, function(s) {
    //return parseInt(s.charCodeAt()).toString(16);
    //return this.toString(16);
    var work = utf8ToHex(this);
    var worker = "";
    /*
    for (var x = 0; work != ""; x++) {
        if (x % 4 == 0 && x > 0) x % 8 == 0 ? worker += "\n" : worker += " ";
        if (Number(work.charCodeAt(0)) < 16) worker += "0";
        worker += uni2utf8(Number(work.charCodeAt(0))).toString(16).toUpperCase();
        work = work.substr(1);
    }
    */
    for (var i = 0; i < work.length; i += 2) {
        if (i % 8 == 0 && i > 0) i % 16 == 0 ? worker += "\n" : worker += " ";
        worker += work.substr(i, 2);
    }
    return worker;
}      //);
//};

function utf8ToHex(input) {
    //Function copied straight from geckocodes.org
    //Created by James Atherton
    var str = unescape(encodeURIComponent(input));
    var output = "";
    for (var i = 0; i < str.length; i++) {
        var hx = str.charCodeAt(i).toString(16);
        while (hx.length < 2) hx = "0" + hx;
        output += hx;
    }
    return output.toUpperCase();
}

String.prototype.toHexUni = function() {//modified from geckocodes
    //return this.replace(/[\s\S]/g, function(s) {
    //return parseInt(s.charCodeAt()).toString(16);
    //return this.toString(16);
    var work = this;
    var worker = "";
    for (var x = 0; work != ""; x++) {
        if (x % 4 == 0 && x > 0) x % 8 == 0 ? worker += "\n" : worker += " ";
        if (Number(work.charCodeAt(0)) < 16) worker += "0";
        worker += Number(work.charCodeAt(0)).toString(16).toUpperCase();
        work = work.substr(1);
    }
    return worker;
}

function simpleFraction(numerator, denominator) {
    for (d = 2; d <= numerator; d++) {
        while ((mod(numerator, d) == 0) && (mod(denominator, d) == 0)) {
            numerator /= d;
            denominator /= d;
        }
    }
    var simpFract = numerator + "/" + denominator;
    return simpFract;
}

function decfrac(DtF) {
    var dec = DtF
    var decString = dec.toString();
    var dslength = decString.length - 1;
    var div = 1;
    // Multiply by powers of 10 to remove the decimal
    for (i = 0; i < dslength; i++) {
        dec = dec * 10;
        div = div * 10;
    }
    // Factor out the GCF of the two numbers
    for (i = 2; i <= dec; i++) {
        while ((mod(dec, i) == 0) && (mod(div, i) == 0)) {
            dec = dec / i;
            div = div / i;
        }
    }
    expF = dec + "/" + div;
    return expF;
}

function mod(n, m) {
    //Keeps subtracting the number you want to divide by until the remainder is less than the original divisor, and then returning the remainder.
    while (n >= m) {
        n = n - m;
    }
    return (n);
}

function uni2utf8(u) {
    //C0 + (firstbyte*4) + something
    //0x, 4x, 8x, Cx
    //if ((byte & 0xC0) == 00, 40, 80, C0)do stuff
    //(byte & 0x3F) | 0x08
    if (u > 0x7F) {
        var magicNumba = 0xC000;
        magicNumba += ((u & 0xFF00) * 4);
        if ((u & 0x00C0) == 0x0040) magicNumba += 0x0100;
        if ((u & 0x00C0) == 0x0080) magicNumba += 0x0200;
        if ((u & 0x00C0) == 0x00C0) magicNumba += 0x0300;

        u &= 0x003F;
        u |= 0x0080;
        u += magicNumba;

        magicNumba = null;
    }
    return (u);
}

String.prototype.toFullwidth = function() {//0xFEE0
    var halfW = this;
    var fullW = "";
    for (var x = 0; halfW != ""; x++) {
        fullW += (Number(halfW.charCodeAt(0)) + 0xFEE0).toString(16).toUpperCase();
        halfW = halfW.substr(1);
    }
    return fullW;
}
