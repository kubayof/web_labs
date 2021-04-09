export function formatDate(date) {
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
}

export function formatTime(date) {
    return `${date.getHours()}:${date.getMinutes()}`;
}

export function formatDateTime(date) {
    return `${formatDate(date)} ${formatTime(date)}`;
}

export function registerListener(elementId, func) {
    document.getElementById(elementId).addEventListener('click', func);
}