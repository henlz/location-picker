export const fetchLocations = (filter = 'test', rows = 5) => {
  const locationsApiUrl = `
    https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${rows}&solrTerm=${filter}
  `;

  return fetch(locationsApiUrl).then(response => response.json());
};