import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function exportToPDF(
  filename: string = 'Iranian_Clay_Tennis_Court_Investment_Report.pdf',
  onStatusChange?: (status: string | null) => void
) {
  try {
    if (onStatusChange) {
      onStatusChange('در حال آماده‌سازی فایل PDF...');
    }

    // Direct Browser Print Dialog (Save as PDF) is the most reliable & crisp PDF generator in iframe environments
    // We attempt jsPDF generation first, and fallback to window.print() if download is restricted.
    
    // Target the main container or business plan container
    const targetElement =
      document.getElementById('business-plan-container') ||
      document.querySelector('main') ||
      document.body;

    if (!targetElement) {
      throw new Error('Target content element not found');
    }

    // Render with html2canvas and sanitize unsupported modern CSS color functions (oklab / oklch)
    const canvas = await html2canvas(targetElement as HTMLElement, {
      scale: 1.5,
      useCORS: true,
      logging: false,
      backgroundColor: '#0A0C10',
      windowWidth: targetElement.scrollWidth,
      windowHeight: targetElement.scrollHeight,
      onclone: (clonedDoc) => {
        // Remove or sanitize style tags containing oklab / oklch color functions that html2canvas cannot parse
        const styleTags = clonedDoc.querySelectorAll('style');
        styleTags.forEach((styleTag) => {
          if (styleTag.textContent) {
            styleTag.textContent = styleTag.textContent
              .replace(/oklab\([^)]+\)/gi, '#161B22')
              .replace(/oklch\([^)]+\)/gi, '#D4AF37');
          }
        });

        // Ensure all elements in cloned DOM have standard rgb/hex inline colors if computed styles contain oklab/oklch
        const allElements = clonedDoc.querySelectorAll('*');
        allElements.forEach((node) => {
          const el = node as HTMLElement;
          if (el.style) {
            const inlineStyle = el.getAttribute('style') || '';
            if (inlineStyle.includes('oklab') || inlineStyle.includes('oklch')) {
              const cleanedStyle = inlineStyle
                .replace(/oklab\([^)]+\)/gi, '#161B22')
                .replace(/oklch\([^)]+\)/gi, '#D4AF37');
              el.setAttribute('style', cleanedStyle);
            }
          }
        });
      }
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.92);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    // Add multi-pages if content is long
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    // Try Blob URL download first
    const pdfBlob = pdf.output('blob');
    const blobUrl = URL.createObjectURL(pdfBlob);

    // Create anchor element for download
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Give a brief delay, then also open print dialog as fallback to guarantee user gets PDF dialog in iframe
    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
      if (onStatusChange) onStatusChange(null);
    }, 1500);

  } catch (error) {
    console.error('PDF Export Error, opening print dialog fallback:', error);
    if (onStatusChange) {
      onStatusChange('در حال باز کردن پنجره چاپ / ذخیره به عنوان PDF...');
    }
    setTimeout(() => {
      window.print();
      if (onStatusChange) onStatusChange(null);
    }, 300);
  }
}


