//Here we place all constants for project: select values, serviceUrl among others
export const sector = [
  {
    value: 1,
    display: "Public",
  },
  {
    value: 2,
    display: "Private",
  },
];
export const frequency = [
  {
    value: 1,
    display: "Monthly",
  },
  {
    value: 2,
    display: "Biweekly",
  },
];
export const checkPaymentState = {
  name: "",
  email: "",
  income: 0,
  amount: 0,
  workYears: 0,
  sector: 1,
  frequency: 1,
  payTime: 0,
};
export const payTime = [
  {
    value: 3,
    display: "3 months",
  },
  {
    value: 6,
    display: "6 months",
  },
  {
    value: 12,
    display: "12 months",
  },
  {
    value: 18,
    display: "18 months",
  },
  {
    value: 24,
    display: "24 months",
  },
];
export const serviceUrl =
  "https://ahbj1tuvb0.execute-api.us-east-1.amazonaws.com/dev/chkpmt";
