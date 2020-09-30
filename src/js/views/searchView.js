import { elements } from './base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';

export const clearUI = () => elements.resultsContainer.value = '';