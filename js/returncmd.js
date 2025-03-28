// some troubleshooting done using chatgpt

function doc_KeyboardEvent(e) {
    if (e.metaKey && e.key === 'b') {
        history.back();  
    }
}

document.addEventListener('keydown', doc_KeyboardEvent, false);