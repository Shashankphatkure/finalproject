"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalDirectCheckout({ id, price }) {
  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price, // Default price
            currency_code: "USD",
          },
          description: "wordpresstutorial", // Default description
          custom_id: "WordPress Course",
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // Redirect to the success page
      window.location.href = `/course/view/${id}`;
    });
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        style={{
          shape: "pill", // Make the button pill-shaped
          color: "silver", // Set the button color
          label: "paypal", // Set the button label
        }}
        fundingSource="paypal"
      />
    </PayPalScriptProvider>
  );
}
