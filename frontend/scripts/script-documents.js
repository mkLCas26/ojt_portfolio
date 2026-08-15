// data for documents
const documents = {
    predeployment: {
        title: "PRE-DEPLOYMENT",
        
        files: [
            {
                name: "Curriculum Vitae",
                file: "../assets/documents/ojt-requirements.pdf"
            }, 

            {
                name: "Approval Sheet",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Memorandum of Agreement",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Letter of Intent",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Letter of Endorsement",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Student Waiver",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Consent Form",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Medical Certificate",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Insurance",
                file: "../assets/documents/ojt-requirements.pdf"
            }
        ]
    },

    evaluation: {
        title: "EVALUATION",

        files: [
            {
                name: "Certificate of Completion",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Performance of Evaluation Grading",
                file: "../assets/documents/ojt-requirements.pdf"
            },

            {
                name: "Evaluation for Supervisor",
                file: "../assets/documents/ojt-requirements.pdf"
            },
        ]
    }
};


// folder panel elements
const folderPanel =
    document.getElementById("folderPanel");

const folderTitle =
    document.getElementById("folderTitle");

const activeFolderImage =
    document.getElementById("activeFolderImage")

const documentList =
    document.getElementById("documentList");


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
    const folder = documents[folderID];

    if (!folder) {
        console.error("Folder not found: ", folderID);
        return;
    }

    folderTitle.textContent = folder.title;

    // clear past docus
    documentList.innerHTML = ""; 

    // for creating docu buttons
    folder.files.forEach(file => {
        const button = document.createElement("button");
        button.classList.add("document_item");
        button.textContent = file.name;

        button.addEventListener("click", () => {
            openDocument(file);
        });

        documentList.appendChild(button);
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

    documentPanel.classList.add("document-open");
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