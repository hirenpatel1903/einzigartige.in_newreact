function searchFilter(row, search) {
    return row.title.toLowerCase().includes(search.toLowerCase()) || !search;
}

export default searchFilter;