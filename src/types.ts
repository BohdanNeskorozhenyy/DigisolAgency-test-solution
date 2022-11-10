export interface Asset {
  id: number;
  type: number;
  title: string;
  'used-total-count': number;
  'created-at': number;
  description?: string;
  tags?: string[];
  'preview-image'?: string;
  'external-link'?: {
    href: string;
    title?: string;
  };
  'original-file-src'?: string;
}
