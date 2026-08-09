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

const documentList =
    document.getElementById("documentList");

const documentPanel =
    document.getElementById("documentPanel");

const doucmentTitle =
    document.getElementById("documentTitle");

const previewLink =
    document.getElementById("previewLink");

const downloadLink =
    document.getElementById("downloadLink");

const pdfViewer =
    document.getElementById("pdfViewer");

const pdfFrame =
    document.getElementById("pdfFrame");