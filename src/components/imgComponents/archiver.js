function archivator(obj) {
    for (let key in obj) {
        const img = new Image();
        img.src = obj[key];
        obj[key] = img;
    }
    return obj;
}

export {archivator};