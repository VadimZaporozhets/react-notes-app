export const NOTE_STATUSES = {
    active: 'active',
    done: 'done',
    archived: 'archive'
};

export const MESSAGE_TYPES = {
    success: 'success',
    error: 'error',
    info: 'info',
    warning: 'warning'
};

export const requestsTypes = {
    get: 'GET',
    post: 'POST',
    delete: 'DELETE',
    update: 'PUT'
};

export const API_BASE = 'http://127.0.0.1:3001';
export const GET_ALL_NOTES = `${API_BASE}/notes`;