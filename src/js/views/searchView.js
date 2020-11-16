import { elements } from './base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';
export const clearUI = () => elements.weatherDetails.innerHTML = '';
export const clearError = () => elements.errorMessage.innerHTML = '';