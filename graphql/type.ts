interface InsurancePlan {
  createdAt: string;
  description: string;
  name: string;
  package: string;
  price: string;
  updatedAt: string;
}

export interface ResponseData {
  insurancePlans: InsurancePlan[];
}
