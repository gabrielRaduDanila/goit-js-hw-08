import getElement from './getElement.js';
import inputEvent from './feedback-form/input-event.js';
import refreshForm from './feedback-form/refreshForm.js';

export const formKey = 'feedback-form-state';

export const feedbackForm = getElement('.feedback-form');

feedbackForm.addEventListener('input', inputEvent);
window.addEventListener('DOMContentLoaded', refreshForm);
