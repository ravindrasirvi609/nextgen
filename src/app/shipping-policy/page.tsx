import React from "react";

const ShippingPolicy: React.FC = () => {
  return (
    <div className="container mx-auto mt-44">
      <h1 className="text-8xl font-bold mb-4 p-8 text-center">
        Shipping Policy
      </h1>
      <p className="text-gray-100 mb-8 text-xl text-center">
        At NextGen Magazine, we strive to provide you with the best possible
        experience when it comes to receiving your ordered items. Please find
        below our shipping policy:
      </p>
      <h2 className="text-lg font-bold mb-2">Shipping Process</h2>
      <p className="text-gray-200 mb-4">
        Once your order is confirmed, our team will process it promptly. We aim
        to dispatch all orders within 1-2 business days. You will receive a
        confirmation email with tracking information once your order has been
        shipped.
      </p>
      <h2 className="text-lg font-bold mb-2">Shipping Options</h2>
      <p className="text-gray-200 mb-4">
        We offer standard and expedited shipping options. Standard shipping
        typically takes 5-7 business days for delivery, while expedited shipping
        takes 2-3 business days. Please note that shipping times may vary
        depending on your location and any unforeseen circumstances.
      </p>
      <h2 className="text-lg font-bold mb-2">Shipping Costs</h2>
      <p className="text-gray-200 mb-4">
        Shipping costs are calculated based on the weight of your order and your
        chosen shipping method. You can view the shipping costs at the checkout
        before making your purchase. We may also offer free shipping promotions
        from time to time, so be sure to check our website for any ongoing
        offers.
      </p>
      <h2 className="text-lg font-bold mb-2">International Shipping</h2>
      <p className="text-gray-200 mb-4">
        We currently offer shipping within the United States only. For
        international shipping inquiries, please contact our customer service
        team at support@nextgenmagazine.com.
      </p>
      <h2 className="text-lg font-bold mb-2">Returns and Exchanges</h2>
      <p className="text-gray-200">
        We want you to be completely satisfied with your purchase. If you are
        not happy with your order for any reason, please contact us within 30
        days of receiving your order to initiate a return or exchange. Please
        note that items must be returned in their original condition and
        packaging.
      </p>
    </div>
  );
};

export default ShippingPolicy;
