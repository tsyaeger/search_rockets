export const intToDollars = (i) => {
    return "$" + i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const reformatDateStr = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString()
}

export const defaultRocketImg = "https://media.giphy.com/media/ilKO5UMpsJgqY/giphy.gif"
