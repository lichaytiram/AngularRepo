const getXML = (file) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        resolve(xhr.responseText)
    }
    xhr.onerror = function () {
        reject(new TypeError('Request failed'));
    }
    xhr.open('GET', file);
    xhr.send(null);
});

const parseXML = xmlString => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, 'text/xml');
    return xml;
};

getXML('./Albums.xml').then(xmlString => {
    const xml = parseXML(xmlString).documentElement;
    console.log(xml);
}).catch(error => {
    console.log(error);
});