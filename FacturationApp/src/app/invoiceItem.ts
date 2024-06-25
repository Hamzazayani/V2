export interface InvoiceItem {
    articleName: string;
    cost: number;
    tva: number; // tax percentage
    promotion: number; // discount percentage
    initialPayment: number;
    finalPayment: number;
  }
  