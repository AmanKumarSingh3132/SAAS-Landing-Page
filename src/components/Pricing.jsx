import React from "react";
import "./Pricing.css";

const plans = [
  {
    title: "Free",
    features: [
      "Basic features",
      "Email support",
      "Limited access",
      "1-month trial period"
    ],
    price: "Free",
    button: "Free"
  },
  {
    title: "Plus",
    features: [
      "Everything in Free",
      "Priority email support",
      "Unlimited access",
      "Customizable options"
    ],
    price: "$20",
    button: "Buy Plus"
  },
  {
    title: "Pro",
    features: [
      "Everything in Plus",
      "Phone & chat support",
      "Advanced analytics",
      "Team management"
    ],
    price: "$50",
    button: "Buy Pro"
  }
];

const Pricing = () => (
  <div className="pricing-container">
    {plans.map((plan) => (
      <div className="pricing-card" key={plan.title}>
        <h2>{plan.title}</h2>
        <ul>
          {plan.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <button className={`pricing-btn ${plan.title.toLowerCase()}`}>
          {plan.button === "Free" ? "Free" : `${plan.button} - ${plan.price}`}
        </button>
      </div>
    ))}
  </div>
);

export default Pricing;