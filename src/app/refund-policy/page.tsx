import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <div className="container mx-auto py-8 mt-44">
      <h1 className="text-8xl font-bold mb-4 p-8 text-center">Refund Policy</h1>
      <p className="mb-4">Cancellation and Refund Policy:</p>
      <p className="mb-4">
        We understand that circumstances may change, but please note that the
        amount paid for registration is non-refundable and non-transferable.
        Once payment is made, it cannot be refunded or transferred to another
        individual or event. We appreciate your understanding of this policy as
        it allows us to efficiently manage registrations and provide the best
        possible experience for all participants. If you have any questions or
        concerns, please feel free to contact us at help@opf.org.in.
      </p>
      <p className="mb-4">Shipping & Exchange Policy:</p>
      <p className="mb-4">
        In Simple words, It’s Not applicable for our category, If any thing
        happens then Customers are responsible for return shipping costs. We
        recommend using a trackable shipping service, and we cannot guarantee
        that we will receive your returned item.
      </p>
    </div>
  );
};

export default RefundPolicy;
