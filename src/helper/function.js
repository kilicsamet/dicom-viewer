export const getButtonArray = (resultCount, page) => {
    let pageButtonArray = [];
    const pageCount = Math.ceil(resultCount / 50)
    const maxAbsValue = 2;
    for (let index = page - maxAbsValue; index <= page; index++) {
        if (index > 0) {
            pageButtonArray.push(index);
        }
    }
    for (let index = page + 1; index <= page + maxAbsValue; index++) {
        if (index <= pageCount) {
            pageButtonArray.push(index);
        }
    }
    return pageButtonArray
}