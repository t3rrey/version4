import CONFIG from "../config/config";
const STORAGE_KEY = CONFIG.name;

export const downloadFile = (content, type, name) => {
    const FILE = new Blob([content], { type: type });
    const FILE_URL = URL.createObjectURL(FILE);
    const link = document.createElement("a");
    link.href = FILE_URL;
    link.download = name || `${STORAGE_KEY}-creation`;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(FILE_URL);
    link.remove();
};

export const onSvg = (width, size, height, radius, cellRef) => {
    // Generate an SVG File
    // Create the SVG and then create a blob from outerHTML
    const SVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    // set width and height
    SVG.setAttribute("width", width * size);
    SVG.setAttribute("height", height * size);
    SVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    SVG.setAttribute("viewBox", `0 0 ${width * size} ${height * size}`);
    for (let c = 0; c < cellRef.current.length; c++) {
        const x = c % width;
        const y = Math.floor(c / width);
        if (cellRef.current[c].color) {
            const RECT = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "rect"
            );
            RECT.setAttribute("width", size);
            RECT.setAttribute("height", size);
            RECT.setAttribute("rx", radius ? size * 0.5 : 0);
            RECT.setAttribute("fill", cellRef.current[c].color);
            RECT.setAttribute("x", x * size);
            RECT.setAttribute("y", y * size);
            SVG.appendChild(RECT);
        }
    }
    downloadFile(SVG.outerHTML, "text/svg", "shadow.svg");
    alert("Image saved in .svg format!");
};

export const onClear = (cellRef, height, width, setViewing) => {
    if (cellRef.current.filter((c) => c.color).length === 0) return;
    if (window.confirm("Are you sure you wish to clear the canvas?")) {
        cellRef.current = [...new Array(height * width).fill().map(() => ({}))];
        setViewing(new Date().getTime());
    }
};