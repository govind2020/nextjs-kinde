'use client'

const DownloadButton = ({ imageUrl }: { imageUrl: string }) => {
    const downloadImage = () => {
        const anchor = document.createElement('a');
        anchor.style.display = 'none';
        anchor.href = imageUrl;
        anchor.download = 'downloaded_image.jpg';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      };
    
      return (
        <button type="button" className="download-button" onClick={downloadImage}>
          Download Image
        </button>
      );
}

export default DownloadButton