export interface CustomerAgree {
    customerId: number;
    templateId: number;
    name: string;
    signedAt: Date;
    paper: any;
}

export interface CustomerPaper {
    name: string;
    title: string;
    paper: any;
}
