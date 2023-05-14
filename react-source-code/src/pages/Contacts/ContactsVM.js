export function copy(text){

    navigator.clipboard.writeText(text);

    alert("Text Copied: " + text);
}