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