// data for reports
const reports = {
    weekly_report: {
        title: "WEEKLY REPORT",
        
        files: [
            {
                name: "Week 1",
                file: "../assets/documents/ojt-requirements.pdf"
            }, 

            {
                name: "Week 2",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Week 3",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Week 4",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Week 5",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Week 6",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Week 7",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Week 8",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Week 9",
                file: "../assets/documents/ojt-requirements.pdf"
            }
        ]
    },
};


// folder panel elements
const folderPanel =
    document.getElementById("folderPanel");

const activeFolderImage =
    document.getElementById("activeFolderImage")

const reportList =
    document.getElementById("reportList");


const documentPanel =
    document.getElementById("documentPanel");

const documentTitle =
    document.getElementById("documentTitle");


const previewLink =
    document.getElementById("previewLink");

const downloadLink =
    document.getElementById("downloadLink");


const pdfViewer =
    document.getElementById("pdfViewer");

const pdfFrame =
    document.getElementById("pdfFrame");


// opening folder
const folders = document.querySelectorAll(".folder_card");
folders.forEach(folder => {
    folder.addEventListener("click", () => {
        const folderID = folder.dataset.folder;

        const folderImage = folder.querySelector("img").src;
        activeFolderImage.src = folderImage;

        openFolder(folderID);
    });
});

function openFolder(folderID) {
    const folder = reports[folderID];

    if (!folder) {
        console.error("Folder not found: ", folderID);
        return;
    }

    // clear past docus
    reportList.innerHTML = ""; 

    // for creating docu buttons
    folder.files.forEach(file => {
        const button = document.createElement("button");
        button.classList.add("document_item");
        button.textContent = file.name;

        button.addEventListener("click", () => {
            openDocument(file);
        });

        reportList.appendChild(button);
    });

    folderPanel.classList.add("active");
};

// closing folder
document
    .getElementById("closeFolder")
    .addEventListener("click",  () => {
        folderPanel.classList.remove("active");
        folderPanel.classList.remove("document-open");
    });

// opening document
function openDocument(file) {
    documentTitle.textContent = file.name;
    previewLink.href = file.file;

    downloadLink.href = file.file;
    downloadLink.download = file.name + ".pdf";

    folderPanel.classList.add("document-open");
}

// closing document
document 
    .getElementById("closeDocument")
    .addEventListener("click", () => {
        folderPanel.classList.remove("document-open");
    });

// opening pdf preview
previewLink.addEventListener("click", (event) => {
    event.preventDefault();

    pdfFrame.src = previewLink.href;
    pdfViewer.classList.add("active");
});

// closing pdf preview
document
    .getElementById("closePdf")
    .addEventListener("click", () => {
        pdfViewer.classList.remove("active");
        pdfFrame.src = "";
    });