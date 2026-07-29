import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function exportToPDF(
  filename: string = 'Iranian_Clay_Tennis_Court_Investment_Report.pdf',
  onStatusChange?: (status: string | null) => void
) {
  try {
    if (onStatusChange) {
      onStatusChange('در حال آماده‌سازی و پردازش فایل PDF...');
    }

    // Target the main container or business plan container
    const targetElement =
      document.getElementById('business-plan-container') ||
      document.querySelector('main') ||
      document.body;

    if (!targetElement) {
      throw new Error('Target content element not found');
    }

    // Temporarily apply print styles or force clean background for canvas capture
    const canvas = await html2canvas(targetElement as HTMLElement, {
      scale: 1.5,
      useCORS: true,
      logging: false,
      backgroundColor: '#0A0C10',
      windowWidth: targetElement.scrollWidth,
      windowHeight: targetElement.scrollHeight
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
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

    pdf.save(filename);

    if (onStatusChange) {
      onStatusChange(null);
    }
  } catch (error) {
    console.error('PDF Export Error, attempting window.print fallback:', error);
    if (onStatusChange) {
      onStatusChange('در حال باز کردن پنجره چاپ...');
    }
    // Fallback: window.print()
    setTimeout(() => {
      window.print();
      if (onStatusChange) onStatusChange(null);
    }, 500);
  }
}
