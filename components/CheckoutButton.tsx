"use client";
import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useSubscriptionStore } from "@/store/store";
import ManageAccountButton from "./ManageAccountButton";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const subscription = useSubscriptionStore((state) => state.subscription);

  const isLoadingSubscription = subscription === undefined;
  const isSubscribed =
    subscription?.status === "active" && subscription?.role === "pro";

  useEffect(() => {
    if (isSubscribed) {
      console.log("isSubscribed : true");
    }
  }, []);

  const createCheckoutSession = async () => {
    if (!session) {
      return;
    }
    // push a document into firestore database

    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session?.user?.id, "checkout_sessions"),
      {
        price: "price_1OMQpfSC7Oazvxz73ncrjIqN",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    // ... stripe extension on firebase will create a checkout session
    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        alert(`Error : ${error.message}`);
        setLoading(false);
      }

      if (url) {
        window.location.assign(url);
        setLoading(false);
      }
    });
    // redirect user to checkout page
  };
  return (
    <div className=" flex flex-col space-y-2 ">
      {/* if subscribed then show that the user is subscribed */}
      {!isSubscribed && (
        <button
          className="mt-8 block rounded-md bg-pink-500 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500
    cursor-pointer disabled:opacity-80 disabled:bg-pink-500/50 disabled:text-white disabled:cursor-default"
        >
          {isLoadingSubscription || loading ? (
            <LoadingSpinner />
          ) : (
            <button onClick={() => createCheckoutSession()}>Sign Up</button>
          )}
        </button>
      )}

      {isSubscribed && <ManageAccountButton />}
    </div>
  );
}

export default CheckoutButton;
