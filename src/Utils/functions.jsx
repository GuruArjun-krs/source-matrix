export const metaTitle = (title) => {
    const titleQuery = document?.getElementById("axyonTitle");
    titleQuery.innerText = `Axyon - ${title}`;
};

export const formatTimer = (time) => {
    const minutes = Math.floor(time / 60);
    const remainderSeconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainderSeconds).padStart(2, '0')}`;
};