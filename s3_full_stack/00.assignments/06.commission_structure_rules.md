# Mutual Fund Portal - Commission Rules & Structure

## **Commission Structure Rules**

### **Key Clarification: ANNUAL COMMISSION WITH MONTHLY PAYOUTS**
**Commission is 2% ANNUALLY on the current portfolio value, paid out monthly (2%/12 = 0.1667% per month).**

- **Annual Rate**: **2% per year** on customer's ongoing investment value
- **Monthly Payout**: **0.1667% per month** (2% ÷ 12) to each stakeholder
- **Recurring**: Calculated monthly on **current portfolio value** (not original investment)
- **Continuous**: Commission continues until customer redeems/stops SIP
- **Withdrawal**: Monthly payouts available on **Day 5** of each month

### **Annual vs Monthly Breakdown**
| Stakeholder | Annual Rate | Monthly Rate | Example on ₹1,00,000 portfolio |
|-------------|-------------|--------------|-------------------------------|
| **Main Company** | **0.5% yearly** | **0.04167%/month** | ₹41.67/month |
| **Admin** | **0.5% yearly** | **0.04167%/month** | ₹41.67/month |
| **Seller** | **0.5% yearly** | **0.04167%/month** | ₹41.67/month |
| **Mutual Fund** | **0.5% yearly** | **0.04167%/month** | ₹41.67/month |
| **TOTAL** | **2.0% yearly** | **0.1667%/month** | **₹166.67/month** |

---

## **How Annual Commission with Monthly Payouts Works**

### **Commission Flow**
```
Customer's Current Portfolio Value → 2% ANNUAL COMMISSION
├── Monthly Calculation: Portfolio Value × (2% ÷ 12)
├── Distribute: 0.5% ÷ 12 to each stakeholder monthly
└── Payout: Available for withdrawal on Day 5 each month
```

### **Monthly Commission Lifecycle**
1. **1st of Month**: Calculate total portfolio value using current NAV
2. **Generate Commission**: Portfolio Value × (2% ÷ 12) = Monthly commission
3. **Distribute**: Each stakeholder gets Portfolio Value × (0.5% ÷ 12)
4. **Record**: Store monthly commission records
5. **Payout**: Day 5 - Mark as available for withdrawal simulation

---

## **Simple Commission Examples**

### **Example 1: Ongoing SIP with Growth**
**Customer started ₹10,000 monthly SIP 6 months ago**

```
MONTH 1:
• Investment: ₹10,000
• Portfolio Value: ₹10,000
• Monthly Commission: ₹10,000 × (2% ÷ 12) = ₹16.67 total
• Each gets: ₹4.17 (0.5% ÷ 12)

MONTH 6 (after growth):
• Total Invested: ₹60,000
• Current Portfolio: ₹65,000 (NAV growth)
• Monthly Commission: ₹65,000 × (2% ÷ 12) = ₹108.33 total
• Each gets: ₹27.08 monthly
• ANNUAL projection: ₹27.08 × 12 = ₹325 (0.5% of ₹65,000)
```

### **Example 2: Existing Portfolio**
**Customer has ₹5,00,000 portfolio (no new SIP)**

```
MONTHLY COMMISSION:
• Portfolio Value: ₹5,00,000
• Total Monthly: ₹5,00,000 × (2% ÷ 12) = ₹833.33
• Seller gets: ₹5,00,000 × (0.5% ÷ 12) = ₹208.33/month
• Admin: ₹208.33/month
• Company: ₹208.33/month

ANNUAL TOTAL:
• Seller: ₹208.33 × 12 = ₹2,500 (exactly 0.5% of ₹5,00,000)
```

### **Example 3: Redemption Impact**
**Customer redeems ₹2,00,000 from ₹5,00,000 portfolio**

```
BEFORE REDEMPTION:
• Portfolio: ₹5,00,000
• Monthly Commission: ₹833.33 total
• Seller: ₹208.33/month

AFTER REDEMPTION:
• Portfolio: ₹3,00,000
• Monthly Commission: ₹3,00,000 × (2% ÷ 12) = ₹500 total
• Seller: ₹125/month (40% drop)
```

### **Example 4: Seller with Multiple Customers**
**Seller manages 10 customers, total AUM ₹50,00,000**

```
MONTHLY COMMISSION:
• Total AUM: ₹50,00,000
• Monthly Rate: 2% ÷ 12 = 0.1667%
• Seller Commission: ₹50,00,000 × (0.5% ÷ 12) = ₹2,083.33/month
• ANNUAL: ₹2,083.33 × 12 = ₹25,000 (0.5% of total AUM)
```

---

## **Updated Database Schema**

### **`commissions` Collection (Monthly Payouts)**
```javascript
{
  _id: ObjectId,
  period: {
    month: Number,  // e.g., 10
    year: Number    // e.g., 2024
  },
  customerId: ObjectId,
  sellerId: ObjectId,
  adminId: ObjectId,
  companyId: ObjectId,
  portfolioValue: Number,      // ₹5,00,000
  annualRate: 0.02,            // 2% yearly
  monthlyRate: 0.001667,       // 2% ÷ 12
  totalCommission: Number,     // ₹833.33
  breakdown: {
    company: Number,   // ₹208.33
    admin: Number,     // ₹208.33
    seller: Number,    // ₹208.33
    mutualFund: Number // ₹208.33
  },
  status: "accrued" | "available" | "withdrawn",
  withdrawalDate: Date,        // Day 5 of next month
  generatedAt: Date
}
```

---

## **Commission Calculation Logic**

### **Monthly Commission Formula**
```javascript
const calculateMonthlyCommission = (portfolioValue) => {
  const ANNUAL_RATE = 0.02;        // 2% yearly
  const MONTHLY_RATE = ANNUAL_RATE / 12;  // 0.1667%
  const SHARE_ANNUAL_RATE = 0.005;     // 0.5% yearly
  const SHARE_MONTHLY_RATE = SHARE_ANNUAL_RATE / 12; // 0.04167%
  
  const totalMonthlyCommission = portfolioValue * MONTHLY_RATE;
  
  return {
    portfolioValue,
    annualRate: ANNUAL_RATE,
    monthlyRate: MONTHLY_RATE,
    totalMonthly: totalMonthlyCommission,
    breakdown: {
      company: portfolioValue * SHARE_MONTHLY_RATE,
      admin: portfolioValue * SHARE_MONTHLY_RATE,
      seller: portfolioValue * SHARE_MONTHLY_RATE,
      mutualFund: portfolioValue * SHARE_MONTHLY_RATE
    }
  };
};

// Example: ₹1,00,000 portfolio
// Result: totalMonthly: 166.67, each share: 41.67
```

---

## **Monthly Processing & Withdrawal Flow**

### **Cron Job Schedule**
```
1st of Every Month (12:01 AM):
1. Calculate all active portfolios using latest NAV
2. Generate commission: Portfolio × (2% ÷ 12)
3. Store records with status "accrued"
4. Update dashboards with current earnings

5th of Every Month (9:00 AM):
1. Previous month's commissions marked "available"
2. Generate withdrawal statements (PDF)
3. Simulate payouts (virtual transfer)
4. Update status to "withdrawn"
5. Email notifications to stakeholders
```

---

## **Updated API Endpoints**

### **Commission & Withdrawal Endpoints**
```
GET /api/[role]/commissions/monthly
// Current month + historical data

GET /api/[role]/commissions/available
// Ready for withdrawal on Day 5

POST /api/commissions/withdraw
// Simulate monthly withdrawal (Day 5+ only)

GET /api/portfolio/commission-estimate
// Annualized projection based on current AUM
```

### **Example Response**
```json
{
  "period": { "month": 10, "year": 2024 },
  "portfolioValue": 500000,
  "annualRate": "2%",
  "monthlyRate": "0.1667%",
  "totalMonthlyCommission": 833.33,
  "sellerShare": 208.33,
  "status": "available",
  "withdrawalDate": "2024-11-05",
  "annualProjection": 2500
}
```

---

## **Dashboard Commission Displays**

### **Seller Dashboard**
```
CURRENT MONTH EARNINGS: ₹2,083
• From ₹50,00,000 AUM
• Available for withdrawal: Nov 5th
• Annual projection: ₹25,000
• Previous month: ₹2,000 (+4%)

[Chart: Monthly earnings trend]
[Table: Customer AUM contributions]
```

### **Withdrawal Section (Day 5+)**
```
AVAILABLE WITHDRAWAL: ₹2,083
• October 2024 commissions
• [Withdraw Now] button (simulation)
• Bank details (virtual)
• Transaction history
```

### **Admin Dashboard**
```
TEAM MONTHLY EARNINGS: ₹10,000
• From 50 sellers, ₹2 crore AUM
• Available withdrawal: ₹10,000
• Annual team projection: ₹1,20,000
```

---

## **Key Implementation Points**

1. **Annual Basis**: 2% yearly rate, divided monthly (2% ÷ 12)
2. **Current Value**: Always based on latest NAV portfolio valuation
3. **Monthly Payouts**: Stakeholders withdraw earnings on Day 5 each month
4. **Withdrawal Simulation**: Virtual transfers with statements
5. **Scalable Calculation**: MongoDB aggregation for AUM totals
6. **Realistic**: Matches industry trail commission models

