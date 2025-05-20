import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useLoaderData, useParams } from "react-router";

const AddToCart = () => {
  const [cart, setCart] = useState({});
  const { thumbnail, name, price, frequency } = cart;
  const [count, setCount] = useState(1);
  const { id } = useParams();

  const serviceData = useLoaderData();

  useEffect(() => {
    const addToCart = serviceData.find((service) => service.id === id);
    setCart(addToCart);
  }, [serviceData, id]);

  const totalPrice = price * count;
  const discount = (totalPrice * 0.2).toFixed(2);
  const shippingCharge = count * 2;
  const afterDiscount = (totalPrice + shippingCharge - discount).toFixed(2);

  const dynamicTitle = `${name} | My Cart`;

  return (
    <section className="bg-white my-12 p-12 w-11/12 rounded-2xl mx-auto">
      <title>{dynamicTitle}</title>
      <h2 className="text-3xl pb-6 font-semibold text-[#031d44]/80">
        Shopping Cart
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-between">
          <div className="border-b-2 border-gray-400/70"></div>

          <div className="flex gap-8 py-6">
            <img
              className="w-70 h-70 rounded-2xl object-cover"
              src={thumbnail}
              alt={name}
            />

            <div className="text-[#031d44]">
              <h3 className="text-4xl font-medium">{name}</h3>

              <div className="text-3xl mt-5 font-semibold">
                <p>${price}</p>
                <p className="line line-through text-xl text-gray-500">
                  ${(price > 100 ? price + 50 : price + 10).toFixed(2)}
                </p>
              </div>

              <div className="border-2 w-30 mt-26 border-slate-700 p-2">
                <div className="flex px-2 text-lg font-medium text-[#031d44] justify-between items-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                      }
                    }}
                  >
                    <TiMinus />
                  </button>
                  <p>{count}</p>
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <TiPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b-2 border-gray-400/70"></div>
        </div>

        <div className="bg-[#F8F0E6] text-[#031d44] rounded-2xl p-10">
          <h3 className="font-semibold text-2xl mb-5">Summary</h3>
          <div className="flex flex-col gap-3">
            <h2 className="flex justify-between">
              Subtotal ({count} Items)
              <span className="text-lg">${totalPrice}</span>
            </h2>

            <p className="flex text-lg font-semibold justify-between">
              Handsome Discount (10% Off)
              <span className="text-2xl">- ${discount} </span>
            </p>

            <p className="flex justify-between">
              Shipping Charge
              <span className="text-lg">${shippingCharge} </span>
            </p>

            <div className="border-b-2 border-gray-400/70"></div>

            <p className="font-bold flex text-xl justify-between">
              Total : <span>${afterDiscount}</span>
            </p>

            <p>
              Your {count} subscription items will continue to ship and bill
              <span className="font-bold italic underline"> {frequency}</span>
            </p>
          </div>

          <button
            onClick={() => {
              toast("🛑 Maintenance in progress!");
            }}
            className="btn bg-[#031d44] mx-16 mt-5 p-6 px-8 w-9/12 border-0 text-[#F8F0E6]"
          >
            Check Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
