function updateEvents() {
    var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;

    var arr = strRawContents.split("\n");
    var annList = document.getElementById("events-list");
    var docFrag = document.createDocumentFragment();

    // skip first event (example event syntax)
    for (var i = 1; i < arr.length; i++) {

        try {
            let re = /[^|]+/g
            let parsedText = arr[i].match(re)
            let eventTitle = parsedText[0];
            let eventDate = parsedText[1];
            let eventDescription = parsedText[2];
            let eventLink = "javascript:;";
            if (parsedText[3] !== undefined) {
                eventLink = parsedText[3]
            }
            var tempNode = document.querySelector("a[data-type='template']").cloneNode(true);
            tempNode.querySelector("h5").innerText = eventTitle;
            tempNode.querySelector("small").innerText = eventDate;
            tempNode.querySelector("p").innerText = eventDescription;
            tempNode.href = eventLink;
            tempNode.style.display = "block";
            docFrag.appendChild(tempNode);   
        } catch (error) {
            console.error("Issue parsing a line of the events document. Check the formatting of the document.");
        }
    }
    
    annList.appendChild(docFrag);
    delete docFrag;
}